import { useEffect } from "react";
import { useWhoAmIQuery, WhoAmIQueryVariables, WhoAmIQuery } from "../graphql";
import { useStore } from "../store/RootStore";
import { QueryResult } from "@apollo/react-common";

type UseGetCurrentUser = QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;

export default function useGetCurrentUser(): UseGetCurrentUser {
  let mounted = true;
  const store = useStore();
  const queryHookResults = useWhoAmIQuery({ fetchPolicy: "no-cache" });

  useEffect(() => {
    const { loading, data } = queryHookResults;
    if (mounted && !loading && data?.whoAmI) {
      store.currentUser.updateUser(data.whoAmI);
    }
    return (): void => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  });

  return queryHookResults;
}
