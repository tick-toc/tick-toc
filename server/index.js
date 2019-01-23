const { GraphQLServer } = require('graphql-yoga')

//1 this will move to schema file...this is our schema
// Every GraphQL schema has three special root types,
// these are called Query, Mutation and Subscription
// root fields are below the root types
// When the type of a root field is an object type,
// you can further expand the query (or mutation/subscription)
// with fields of that object type. The expanded part is
// called selection set
const typeDefs = `
    type Query {
        info: String!
    }
`

//2 this will move to a resolvers file
const resolvers = {
    Query: {
        info: () => `This is the API of our Bomb Game`
    }
}

// 3 this will stay here
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))