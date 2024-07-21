const userTypeDef = `#graphql
# User type definition
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    transactions: [Transaction!]
  }
# queries which can be made to the user
  type Query {
    authUser: User
    user(userId:ID!): User
  }
# muation which can be made to the user
  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
