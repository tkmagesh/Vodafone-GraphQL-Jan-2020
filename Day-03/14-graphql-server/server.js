const express = require('express'),
    apolloServerExpress = require('apollo-server-express'),
    gql = apolloServerExpress.gql;

const app = express();

const schema = gql`
    type Query{
        hello(name : String) : String
    }
`
const resolvers = {
    Query : { 
        hello : (parent, args) => {
            return `Hello ${args.name}`;
        }
    }
}
const apolloServer = new apolloServerExpress.ApolloServer({
    typeDefs: schema,
    resolvers,
});

apolloServer.applyMiddleware({ app, path : '/graphql'})

app.listen({ port: 8085 }, () => {
    console.log('Apollo Server on http://localhost:8085/graphql');
});