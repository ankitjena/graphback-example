import gql from 'graphql-tag'

export const typeDefs = gql`
  type Note {
    id: ID
    title: String
    description: String
  }

  type Comment {
    id: ID
    title: String
    description: String
  }

input NoteInput {
    title: String
    description: String
  }

  input CommentInput {
    title: String
    description: String
  }

input NoteFilter {
    id: ID
    title: String
    description: String
  }

  input CommentFilter {
    id: ID
    title: String
    description: String
  }

type Query {
  findNotes(fields: NoteFilter!): [Note!]!
    findComments(fields: CommentFilter!): [Comment!]!
    findAllNotes: [Note!]!
    findAllComments: [Comment!]!
}

type Mutation {
  createNote(input: NoteInput!): Note!
    createComment(input: CommentInput!): Comment!
    updateNote(id: ID!, input: NoteInput!): Note!
    updateComment(id: ID!, input: CommentInput!): Comment!
    deleteNote(id: ID!): ID!
    deleteComment(id: ID!): ID!
}

type Subscription {
  newNote: Note!
    newComment: Comment!
    updatedNote: Note!
    updatedComment: Comment!
    deletedNote: ID!
    deletedComment: ID!
}
`
