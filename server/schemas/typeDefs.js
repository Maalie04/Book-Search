const { gql } = require("apollo-server-express");
const { resolvers } = require("./resolvers");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    author: [String]
    email: String
    imaage: String
    link: String!
    title: String!
    bookID: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    getSingleUser(user: String!): User
    books(username: String): [Book]
    book(bookID: ID!): Book
    me: User
  }

  input SaveBook {
    authors: [String]
    title: String!
    description: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      authors: [String]
      title: String!
      description: String
      bookId: String
      image: String
      link: String
    ): Book
  }
`;

module.exports = typeDefs;
