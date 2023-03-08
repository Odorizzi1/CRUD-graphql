const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const typeDefs = require('./graphql/schema/User');
const resolvers = require('./graphql/resolvers/User');

const app = express();

dotenv.config();

const uri = process.env.ACCESS_STORAGE;

mongoose.set('strictQuery', true);

mongoose.connect(uri).then((res) => {
    console.log('db is connected');
    app.listen(3001, function () {
        console.log('listening on port 3001');
    });
})
    .catch((err) => {
        console.log('Error connecting to database: ', err);
    });

app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            currentUser: null, 
        };
    },
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startServer();

module.exports = app;
