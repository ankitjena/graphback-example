import {
  MutationResolvers,
  QueryResolvers,
  SubscriptionResolvers
} from './resolverTypes'

enum Subscriptions {
  NEW_NOTE = 'newnote',
  UPDATED_NOTE = 'updatednote',
  DELETED_NOTE = 'deletednote',
  NEW_COMMENT = 'newcomment',
  UPDATED_COMMENT = 'updatedcomment',
  DELETED_COMMENT = 'deletedcomment'
}

interface IResolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
  Subscription: SubscriptionResolvers
}

export const resolvers: IResolvers = {
  Query: {
    findNotes: (_, args, context) => {
      return context.db.select().from('note').where(args.fields)
    },
    findComments: (_, args, context) => {
      return context.db.select().from('comment').where(args.fields)
    },
    findAllNotes: (_, __, context) => {
      return context.db.select().from('note')
    },
    findAllComments: (_, __, context) => {
      return context.db.select().from('comment')
    }
  },

  Mutation: {
    createNote: async (_, args, context) => {
      const result = await context.db('note').insert(args.input).returning('*')
      context.pubsub.publish(Subscriptions.NEW_NOTE, {
        newNote: result[0]
      })
      return result[0]
    },
    createComment: async (_, args, context) => {
      const result = await context.db('comment').insert(args.input).returning('*')
      context.pubsub.publish(Subscriptions.NEW_COMMENT, {
        newComment: result[0]
      })
      return result[0]
    },
    updateNote: (_, args, context) => {
      return context.db('note').where('id', '=' , args.id).update(args.input).then( async () => {
        const result = await context.db.select().from('note').where('id', '=' , args.id);
        context.pubsub.publish(Subscriptions.UPDATED_NOTE, {
          updatedNote: result[0]
        })
        return result[0]
    })},
    updateComment: (_, args, context) => {
      return context.db('comment').where('id', '=' , args.id).update(args.input).then( async () => {
        const result = await context.db.select().from('comment').where('id', '=' , args.id);
        context.pubsub.publish(Subscriptions.UPDATED_COMMENT, {
          updatedComment: result[0]
        })
        return result[0]
    })},
    deleteNote: (_, args, context) => {
      return context.db('note').where('id', '=' , args.id).del().then( () => {
        context.pubsub.publish(Subscriptions.DELETED_NOTE, {
          deletedNote: args.id
        })
        return args.id;
    })},
    deleteComment: (_, args, context) => {
      return context.db('comment').where('id', '=' , args.id).del().then( () => {
        context.pubsub.publish(Subscriptions.DELETED_COMMENT, {
          deletedComment: args.id
        })
        return args.id;
    })}
  },

  Subscription: {
    newNote: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.NEW_NOTE)
    },
    newComment: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.NEW_COMMENT)
    },
    updatedNote: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.UPDATED_NOTE)
    },
    updatedComment: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.UPDATED_COMMENT)
    },
    deletedNote: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.DELETED_NOTE)
    },
    deletedComment: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(Subscriptions.DELETED_COMMENT)
    }
  }
}
