import * as cors from "cors"
import * as express from "express"
import * as http from "http"

import { altairExpress } from "altair-express-middleware"
import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express"

import config from "./config/config"
import { connect } from "./db"
import { resolvers, typeDefs } from "./mapping"
import { pubsub } from './subscriptions'

interface IRequestParams { req: express.Request}

async function start() {
  const app = express()

  app.use(cors())

  app.get("/health", (req, res) => res.sendStatus(200))

  app.use("/graphql", altairExpress(config.altairConfig))

  // connect to db
  const client = await connect(config.db);

  const apolloConfig: ApolloServerExpressConfig = {
    typeDefs,
    resolvers,
    playground: false,
    context: async ({
      req
    }: IRequestParams) => {
      // pass request + db ref + pubsub into context for each resolver
      return {
        req,
        db: client,
        pubsub,
        serverName: "graphback"
      }
    }
  }

  const apolloServer = new ApolloServer(apolloConfig)

  apolloServer.applyMiddleware({ app })

  const httpServer = http.createServer(app)
  apolloServer.installSubscriptionHandlers(httpServer)

  httpServer.listen({ port: config.port }, () => {
    console.log(`🚀  Server ready at http://localhost:${config.port}/graphql`)
  })
}

start()
