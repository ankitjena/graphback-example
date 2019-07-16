import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Comment = {
  __typename?: 'Comment',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type CommentFilter = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type CommentInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  createNote: Note,
  createComment: Comment,
  updateNote: Note,
  updateComment: Comment,
  deleteNote: Scalars['ID'],
  deleteComment: Scalars['ID'],
};


export type MutationCreateNoteArgs = {
  input: NoteInput
};


export type MutationCreateCommentArgs = {
  input: CommentInput
};


export type MutationUpdateNoteArgs = {
  id: Scalars['ID'],
  input: NoteInput
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'],
  input: CommentInput
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']
};

export type Note = {
  __typename?: 'Note',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type NoteFilter = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type NoteInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  findNotes: Array<Note>,
  findComments: Array<Comment>,
  findAllNotes: Array<Note>,
  findAllComments: Array<Comment>,
};


export type QueryFindNotesArgs = {
  fields: NoteFilter
};


export type QueryFindCommentsArgs = {
  fields: CommentFilter
};

export type Subscription = {
  __typename?: 'Subscription',
  newNote: Note,
  newComment: Comment,
  updatedNote: Note,
  updatedComment: Comment,
  deletedNote: Scalars['ID'],
  deletedComment: Scalars['ID'],
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  NoteFilter: NoteFilter,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Note: ResolverTypeWrapper<Note>,
  CommentFilter: CommentFilter,
  Comment: ResolverTypeWrapper<Comment>,
  Mutation: ResolverTypeWrapper<{}>,
  NoteInput: NoteInput,
  CommentInput: CommentInput,
  Subscription: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  NoteFilter: NoteFilter,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Note: Note,
  CommentFilter: CommentFilter,
  Comment: Comment,
  Mutation: {},
  NoteInput: NoteInput,
  CommentInput: CommentInput,
  Subscription: {},
  Boolean: Scalars['Boolean'],
};

export type CommentResolvers<ContextType = any, ParentType = ResolversParentTypes['Comment']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType = ResolversParentTypes['Mutation']> = {
  createNote?: Resolver<ResolversTypes['Note'], ParentType, ContextType, MutationCreateNoteArgs>,
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, MutationCreateCommentArgs>,
  updateNote?: Resolver<ResolversTypes['Note'], ParentType, ContextType, MutationUpdateNoteArgs>,
  updateComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, MutationUpdateCommentArgs>,
  deleteNote?: Resolver<ResolversTypes['ID'], ParentType, ContextType, MutationDeleteNoteArgs>,
  deleteComment?: Resolver<ResolversTypes['ID'], ParentType, ContextType, MutationDeleteCommentArgs>,
};

export type NoteResolvers<ContextType = any, ParentType = ResolversParentTypes['Note']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType = ResolversParentTypes['Query']> = {
  findNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, QueryFindNotesArgs>,
  findComments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, QueryFindCommentsArgs>,
  findAllNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType>,
  findAllComments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType = ResolversParentTypes['Subscription']> = {
  newNote?: SubscriptionResolver<ResolversTypes['Note'], ParentType, ContextType>,
  newComment?: SubscriptionResolver<ResolversTypes['Comment'], ParentType, ContextType>,
  updatedNote?: SubscriptionResolver<ResolversTypes['Note'], ParentType, ContextType>,
  updatedComment?: SubscriptionResolver<ResolversTypes['Comment'], ParentType, ContextType>,
  deletedNote?: SubscriptionResolver<ResolversTypes['ID'], ParentType, ContextType>,
  deletedComment?: SubscriptionResolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Note?: NoteResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
