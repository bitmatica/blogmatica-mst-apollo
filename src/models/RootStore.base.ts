/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { PostModel, PostModelType } from "./PostModel"
import { postModelPrimitives, PostModelSelector } from "./PostModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { CommentModel, CommentModelType } from "./CommentModel"
import { commentModelPrimitives, CommentModelSelector } from "./CommentModel.base"
import {
  PostUpdateResponseModel,
  PostUpdateResponseModelType,
} from "./PostUpdateResponseModel"
import {
  postUpdateResponseModelPrimitives,
  PostUpdateResponseModelSelector,
} from "./PostUpdateResponseModel.base"
import { DeletionResponseModel, DeletionResponseModelType } from "./DeletionResponseModel"
import {
  deletionResponseModelPrimitives,
  DeletionResponseModelSelector,
} from "./DeletionResponseModel.base"
import {
  PostCreationResponseModel,
  PostCreationResponseModelType,
} from "./PostCreationResponseModel"
import {
  postCreationResponseModelPrimitives,
  PostCreationResponseModelSelector,
} from "./PostCreationResponseModel.base"
import {
  UserUpdateResponseModel,
  UserUpdateResponseModelType,
} from "./UserUpdateResponseModel"
import {
  userUpdateResponseModelPrimitives,
  UserUpdateResponseModelSelector,
} from "./UserUpdateResponseModel.base"
import {
  UserCreationResponseModel,
  UserCreationResponseModelType,
} from "./UserCreationResponseModel"
import {
  userCreationResponseModelPrimitives,
  UserCreationResponseModelSelector,
} from "./UserCreationResponseModel.base"
import {
  UserLoginResponseModel,
  UserLoginResponseModelType,
} from "./UserLoginResponseModel"
import {
  userLoginResponseModelPrimitives,
  UserLoginResponseModelSelector,
} from "./UserLoginResponseModel.base"
import { MutationResponseModel, MutationResponseModelType } from "./MutationResponseModel"
import {
  mutationResponseModelPrimitives,
  MutationResponseModelSelector,
} from "./MutationResponseModel.base"
import {
  CommentCreationResponseModel,
  CommentCreationResponseModelType,
} from "./CommentCreationResponseModel"
import {
  commentCreationResponseModelPrimitives,
  CommentCreationResponseModelSelector,
} from "./CommentCreationResponseModel.base"
import {
  CommentUpdateResponseModel,
  CommentUpdateResponseModelType,
} from "./CommentUpdateResponseModel"
import {
  commentUpdateResponseModelPrimitives,
  CommentUpdateResponseModelSelector,
} from "./CommentUpdateResponseModel.base"

export type UpdatePostInput = {
  title?: string
  body?: string
  authorId?: string
}
export type CreatePostInput = {
  title: string
  body: string
}
export type UpdateUserInput = {
  email?: string
  roles?: string[]
}
export type CreateUserInput = {
  email: string
  password: string
}
export type UserLoginArgs = {
  email: string
  password: string
}
export type CreateCommentInput = {
  body: string
  authorId: string
  postId: string
}
export type UpdateCommentInput = {
  body?: string
  authorId?: string
  postId?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  posts: ObservableMap<string, PostModelType>
  users: ObservableMap<string, UserModelType>
  comments: ObservableMap<string, CommentModelType>
}

/**
 * Store, managing, among others, all the objects received through graphQL
 */
export const RootStoreBase = withTypedRefs<Refs>()(
  MSTGQLStore.named("RootStore")
    .extend(
      configureStoreMixin(
        [
          ["Post", () => PostModel],
          ["User", () => UserModel],
          ["Comment", () => CommentModel],
          ["PostUpdateResponse", () => PostUpdateResponseModel],
          ["DeletionResponse", () => DeletionResponseModel],
          ["PostCreationResponse", () => PostCreationResponseModel],
          ["UserUpdateResponse", () => UserUpdateResponseModel],
          ["UserCreationResponse", () => UserCreationResponseModel],
          ["UserLoginResponse", () => UserLoginResponseModel],
          ["MutationResponse", () => MutationResponseModel],
          ["CommentCreationResponse", () => CommentCreationResponseModel],
          ["CommentUpdateResponse", () => CommentUpdateResponseModel],
        ],
        ["Post", "User", "Comment"],
        "js",
      ),
    )
    .props({
      posts: types.optional(types.map(types.late((): any => PostModel)), {}),
      users: types.optional(types.map(types.late((): any => UserModel)), {}),
      comments: types.optional(types.map(types.late((): any => CommentModel)), {}),
    })
    .actions((self) => ({
      queryPost(
        variables: { id: string },
        resultSelector:
          | string
          | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ post: PostModelType }>(
          `query post($id: ID!) { post(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new PostModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryPosts(
        variables?: {},
        resultSelector:
          | string
          | ((qb: PostModelSelector) => PostModelSelector) = postModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ posts: PostModelType[] }>(
          `query posts { posts {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new PostModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUser(
        variables: { id: string },
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ user: UserModelType }>(
          `query user($id: ID!) { user(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUsers(
        variables?: {},
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ users: UserModelType[] }>(
          `query users { users {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryWhoAmI(
        variables?: {},
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ whoAmI: UserModelType }>(
          `query whoAmI { whoAmI {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryComment(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: CommentModelSelector,
            ) => CommentModelSelector) = commentModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ comment: CommentModelType }>(
          `query comment($id: ID!) { comment(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CommentModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryComments(
        variables?: {},
        resultSelector:
          | string
          | ((
              qb: CommentModelSelector,
            ) => CommentModelSelector) = commentModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ comments: CommentModelType[] }>(
          `query comments { comments {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CommentModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      mutateUpdatePost(
        variables: { input: UpdatePostInput; id: string },
        resultSelector:
          | string
          | ((
              qb: PostUpdateResponseModelSelector,
            ) => PostUpdateResponseModelSelector) = postUpdateResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updatePost: PostUpdateResponseModelType }>(
          `mutation updatePost($input: UpdatePostInput!, $id: ID!) { updatePost(input: $input, id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new PostUpdateResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeletePost(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: DeletionResponseModelSelector,
            ) => DeletionResponseModelSelector) = deletionResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deletePost: DeletionResponseModelType }>(
          `mutation deletePost($id: ID!) { deletePost(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new DeletionResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateCreatePost(
        variables: { input: CreatePostInput },
        resultSelector:
          | string
          | ((
              qb: PostCreationResponseModelSelector,
            ) => PostCreationResponseModelSelector) = postCreationResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ createPost: PostCreationResponseModelType }>(
          `mutation createPost($input: CreatePostInput!) { createPost(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new PostCreationResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUpdateUser(
        variables: { input: UpdateUserInput; id: string },
        resultSelector:
          | string
          | ((
              qb: UserUpdateResponseModelSelector,
            ) => UserUpdateResponseModelSelector) = userUpdateResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updateUser: UserUpdateResponseModelType }>(
          `mutation updateUser($input: UpdateUserInput!, $id: ID!) { updateUser(input: $input, id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserUpdateResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeleteUser(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: DeletionResponseModelSelector,
            ) => DeletionResponseModelSelector) = deletionResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deleteUser: DeletionResponseModelType }>(
          `mutation deleteUser($id: ID!) { deleteUser(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new DeletionResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateCreateUser(
        variables: { input: CreateUserInput },
        resultSelector:
          | string
          | ((
              qb: UserCreationResponseModelSelector,
            ) => UserCreationResponseModelSelector) = userCreationResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ createUser: UserCreationResponseModelType }>(
          `mutation createUser($input: CreateUserInput!) { createUser(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserCreationResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateLogin(
        variables: { input: UserLoginArgs },
        resultSelector:
          | string
          | ((
              qb: UserLoginResponseModelSelector,
            ) => UserLoginResponseModelSelector) = userLoginResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ login: UserLoginResponseModelType }>(
          `mutation login($input: UserLoginArgs!) { login(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserLoginResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateLogout(
        variables?: {},
        resultSelector:
          | string
          | ((
              qb: MutationResponseModelSelector,
            ) => MutationResponseModelSelector) = mutationResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ logout: MutationResponseModelType }>(
          `mutation logout { logout {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new MutationResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateCreateComment(
        variables: { input: CreateCommentInput },
        resultSelector:
          | string
          | ((
              qb: CommentCreationResponseModelSelector,
            ) => CommentCreationResponseModelSelector) = commentCreationResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ createComment: CommentCreationResponseModelType }>(
          `mutation createComment($input: CreateCommentInput!) { createComment(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CommentCreationResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUpdateComment(
        variables: { input: UpdateCommentInput; id: string },
        resultSelector:
          | string
          | ((
              qb: CommentUpdateResponseModelSelector,
            ) => CommentUpdateResponseModelSelector) = commentUpdateResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updateComment: CommentUpdateResponseModelType }>(
          `mutation updateComment($input: UpdateCommentInput!, $id: ID!) { updateComment(input: $input, id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CommentUpdateResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeleteComment(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: DeletionResponseModelSelector,
            ) => DeletionResponseModelSelector) = deletionResponseModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deleteComment: DeletionResponseModelType }>(
          `mutation deleteComment($id: ID!) { deleteComment(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new DeletionResponseModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
    })),
)
