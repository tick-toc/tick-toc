const importSchema = require('graphql-import').importSchema
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')


const resolvers = {
    // Mutation,
    Query,
    // Subscription
}

// 3 this will stay here
const server = new GraphQLServer({
    typeDefs: importSchema('./server/schema.graphql'),
    // typeDefs,
    resolvers,
    context: request => ({
        ...request,
        prisma
    })
})

server.start(() => console.log(`Server is running on http://localhost:4000`))