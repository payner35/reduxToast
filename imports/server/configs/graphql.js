import { createApolloServer } from 'meteor/apollo';
import { schema } from '../data/schema';
import { resolvers } from '../data/schema';


export default function () {

    createApolloServer({
        graphiql: true,
        pretty: true,
        schema,
        resolvers,
    });
}

