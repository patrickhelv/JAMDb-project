import { ApolloClient, InMemoryCache } from '@apollo/client'

const GRAPHQL_URI = process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql';

export const apolloClient = new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache(),
})
