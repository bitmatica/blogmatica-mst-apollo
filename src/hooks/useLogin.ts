import { useLoginMutation, LoginMutation, LoginMutationVariables } from "../graphql";
import { setJwt } from "../utilities/jwtHelpers";
import { MutationTuple } from "@apollo/react-hooks";
import { useStore } from "../store/RootStore";
import { useEffect } from "react";

const useLogin: () => MutationTuple<LoginMutation, LoginMutationVariables> = () => {
  const useLoginResult = useLoginMutation();
  const store = useStore();
  const [, { called, loading, data }] = useLoginResult;
  const jwt = data?.login?.token;

  useEffect(() => {
    if (called && !loading) {
      if (jwt) {
        setJwt(jwt);
        store.currentUser.updateUser(data?.login.user);
      } else {
        throw new Error("Wrong username/password.");
      }
    }
  });

  return useLoginResult;
};

export default useLogin;
