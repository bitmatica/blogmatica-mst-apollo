import { ApolloClient } from "apollo-boost"
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { ApolloLink } from "apollo-link"
import { setContext } from "apollo-link-context"
import { onError } from "apollo-link-error"
import { createHttpLink } from "apollo-link-http"
import { SERVER_URI } from "./config"
import { getJwt } from "./utilities/jwtHelpers"

export default function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const authLink = setContext((_, { headers }) => {
    const token = getJwt()
    return {
      headers: {
        ...headers,
        ...(token && token !== "null" && { authorization: `Bearer ${token}` }),
      },
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // todo check for auth token errors and redirect
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      )

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const httpLink = createHttpLink({
    uri: SERVER_URI,
  })

  const cache = new InMemoryCache()
  return new ApolloClient({
    cache,
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    connectToDevTools: true,
  })
}
