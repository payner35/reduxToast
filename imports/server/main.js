
import {Schema} from './api/schema';
import {Resolvers} from './api/schema';
//import Connectors from './data/connectors';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';



const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers,
    //connectors: Connectors,
    printErrors: true, // optional
    allowUndefinedInResolve: true // optional
});


createApolloServer({
    graphiql: true,
    pretty: true,
    schema: executableSchema
});



