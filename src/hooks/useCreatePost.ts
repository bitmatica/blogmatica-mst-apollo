import produce from "immer";
import {
  CreatePostMutationHookResult,
  useCreatePostMutation,
  AllPostsDocument,
  AllPostsQuery,
  Post,
} from "../graphql";

export default function useCreatePost(): CreatePostMutationHookResult {
  return useCreatePostMutation({
    update: (cache, data): void => {
      const post = data?.data?.createPost?.post;
      const allPostsCache = cache.readQuery({
        query: AllPostsDocument,
      });

      // todo error handling
      cache.writeQuery({
        query: AllPostsDocument,
        data: produce(allPostsCache, (draftAllPostsCache: AllPostsQuery): void => {
          draftAllPostsCache.posts.push(post as Post);
        }),
      });
    },
  });
}
