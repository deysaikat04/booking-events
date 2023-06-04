const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const dbConnect = require("./db/connect");

const graphQlSchema = require("./graphql/schema");
const graphQlResolvers = require("./graphql/resolvers");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello there!!");
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

dbConnect();

app.listen(5500, () => {
  console.log("Server started....");
});
