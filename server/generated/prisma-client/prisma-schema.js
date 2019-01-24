module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGame {
  count: Int!
}

type AggregategamePlayerRoles {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateuserGameRoles {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Game {
  id: ID!
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int!
  gameStatus: Status!
  needyModules: Boolean
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int!
  gameStatus: Status!
  needyModules: Boolean
}

input GameCreateManyInput {
  create: [GameCreateInput!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateOneInput {
  create: GameCreateInput
  connect: GameWhereUniqueInput
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  modules_ASC
  modules_DESC
  modulesFailed_ASC
  modulesFailed_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  strikesAllowed_ASC
  strikesAllowed_DESC
  gameStatus_ASC
  gameStatus_DESC
  needyModules_ASC
  needyModules_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type gamePlayerRoles {
  id: ID!
  gameId: Game!
  playerId: User!
}

type gamePlayerRolesConnection {
  pageInfo: PageInfo!
  edges: [gamePlayerRolesEdge]!
  aggregate: AggregategamePlayerRoles!
}

input gamePlayerRolesCreateInput {
  gameId: GameCreateOneInput!
  playerId: UserCreateOneInput!
}

type gamePlayerRolesEdge {
  node: gamePlayerRoles!
  cursor: String!
}

enum gamePlayerRolesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type gamePlayerRolesPreviousValues {
  id: ID!
}

type gamePlayerRolesSubscriptionPayload {
  mutation: MutationType!
  node: gamePlayerRoles
  updatedFields: [String!]
  previousValues: gamePlayerRolesPreviousValues
}

input gamePlayerRolesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: gamePlayerRolesWhereInput
  AND: [gamePlayerRolesSubscriptionWhereInput!]
  OR: [gamePlayerRolesSubscriptionWhereInput!]
  NOT: [gamePlayerRolesSubscriptionWhereInput!]
}

input gamePlayerRolesUpdateInput {
  gameId: GameUpdateOneRequiredInput
  playerId: UserUpdateOneRequiredInput
}

input gamePlayerRolesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gameId: GameWhereInput
  playerId: UserWhereInput
  AND: [gamePlayerRolesWhereInput!]
  OR: [gamePlayerRolesWhereInput!]
  NOT: [gamePlayerRolesWhereInput!]
}

input gamePlayerRolesWhereUniqueInput {
  id: ID
}

type GamePreviousValues {
  id: ID!
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int!
  gameStatus: Status!
  needyModules: Boolean
}

input GameScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  modules: Int
  modules_not: Int
  modules_in: [Int!]
  modules_not_in: [Int!]
  modules_lt: Int
  modules_lte: Int
  modules_gt: Int
  modules_gte: Int
  modulesFailed: Int
  modulesFailed_not: Int
  modulesFailed_in: [Int!]
  modulesFailed_not_in: [Int!]
  modulesFailed_lt: Int
  modulesFailed_lte: Int
  modulesFailed_gt: Int
  modulesFailed_gte: Int
  startTime: Int
  startTime_not: Int
  startTime_in: [Int!]
  startTime_not_in: [Int!]
  startTime_lt: Int
  startTime_lte: Int
  startTime_gt: Int
  startTime_gte: Int
  endTime: Int
  endTime_not: Int
  endTime_in: [Int!]
  endTime_not_in: [Int!]
  endTime_lt: Int
  endTime_lte: Int
  endTime_gt: Int
  endTime_gte: Int
  strikesAllowed: Int
  strikesAllowed_not: Int
  strikesAllowed_in: [Int!]
  strikesAllowed_not_in: [Int!]
  strikesAllowed_lt: Int
  strikesAllowed_lte: Int
  strikesAllowed_gt: Int
  strikesAllowed_gte: Int
  gameStatus: Status
  gameStatus_not: Status
  gameStatus_in: [Status!]
  gameStatus_not_in: [Status!]
  needyModules: Boolean
  needyModules_not: Boolean
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateDataInput {
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int
  gameStatus: Status
  needyModules: Boolean
}

input GameUpdateInput {
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int
  gameStatus: Status
  needyModules: Boolean
}

input GameUpdateManyDataInput {
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int
  gameStatus: Status
  needyModules: Boolean
}

input GameUpdateManyInput {
  create: [GameCreateInput!]
  update: [GameUpdateWithWhereUniqueNestedInput!]
  upsert: [GameUpsertWithWhereUniqueNestedInput!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyMutationInput {
  modules: Int
  modulesFailed: Int
  startTime: Int
  endTime: Int
  strikesAllowed: Int
  gameStatus: Status
  needyModules: Boolean
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateOneRequiredInput {
  create: GameCreateInput
  update: GameUpdateDataInput
  upsert: GameUpsertNestedInput
  connect: GameWhereUniqueInput
}

input GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  data: GameUpdateDataInput!
}

input GameUpsertNestedInput {
  update: GameUpdateDataInput!
  create: GameCreateInput!
}

input GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  update: GameUpdateDataInput!
  create: GameCreateInput!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  modules: Int
  modules_not: Int
  modules_in: [Int!]
  modules_not_in: [Int!]
  modules_lt: Int
  modules_lte: Int
  modules_gt: Int
  modules_gte: Int
  modulesFailed: Int
  modulesFailed_not: Int
  modulesFailed_in: [Int!]
  modulesFailed_not_in: [Int!]
  modulesFailed_lt: Int
  modulesFailed_lte: Int
  modulesFailed_gt: Int
  modulesFailed_gte: Int
  startTime: Int
  startTime_not: Int
  startTime_in: [Int!]
  startTime_not_in: [Int!]
  startTime_lt: Int
  startTime_lte: Int
  startTime_gt: Int
  startTime_gte: Int
  endTime: Int
  endTime_not: Int
  endTime_in: [Int!]
  endTime_not_in: [Int!]
  endTime_lt: Int
  endTime_lte: Int
  endTime_gt: Int
  endTime_gte: Int
  strikesAllowed: Int
  strikesAllowed_not: Int
  strikesAllowed_in: [Int!]
  strikesAllowed_not_in: [Int!]
  strikesAllowed_lt: Int
  strikesAllowed_lte: Int
  strikesAllowed_gt: Int
  strikesAllowed_gte: Int
  gameStatus: Status
  gameStatus_not: Status
  gameStatus_in: [Status!]
  gameStatus_not_in: [Status!]
  needyModules: Boolean
  needyModules_not: Boolean
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  creategamePlayerRoles(data: gamePlayerRolesCreateInput!): gamePlayerRoles!
  updategamePlayerRoles(data: gamePlayerRolesUpdateInput!, where: gamePlayerRolesWhereUniqueInput!): gamePlayerRoles
  upsertgamePlayerRoles(where: gamePlayerRolesWhereUniqueInput!, create: gamePlayerRolesCreateInput!, update: gamePlayerRolesUpdateInput!): gamePlayerRoles!
  deletegamePlayerRoles(where: gamePlayerRolesWhereUniqueInput!): gamePlayerRoles
  deleteManygamePlayerRoleses(where: gamePlayerRolesWhereInput): BatchPayload!
  createuserGameRoles(data: userGameRolesCreateInput!): userGameRoles!
  updateuserGameRoles(data: userGameRolesUpdateInput!, where: userGameRolesWhereUniqueInput!): userGameRoles
  updateManyuserGameRoleses(data: userGameRolesUpdateManyMutationInput!, where: userGameRolesWhereInput): BatchPayload!
  upsertuserGameRoles(where: userGameRolesWhereUniqueInput!, create: userGameRolesCreateInput!, update: userGameRolesUpdateInput!): userGameRoles!
  deleteuserGameRoles(where: userGameRolesWhereUniqueInput!): userGameRoles
  deleteManyuserGameRoleses(where: userGameRolesWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  gamePlayerRoles(where: gamePlayerRolesWhereUniqueInput!): gamePlayerRoles
  gamePlayerRoleses(where: gamePlayerRolesWhereInput, orderBy: gamePlayerRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [gamePlayerRoles]!
  gamePlayerRolesesConnection(where: gamePlayerRolesWhereInput, orderBy: gamePlayerRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): gamePlayerRolesConnection!
  userGameRoles(where: userGameRolesWhereUniqueInput!): userGameRoles
  userGameRoleses(where: userGameRolesWhereInput, orderBy: userGameRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [userGameRoles]!
  userGameRolesesConnection(where: userGameRolesWhereInput, orderBy: userGameRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): userGameRolesConnection!
  node(id: ID!): Node
}

enum Roles {
  DEFUSER
  EXPERT
}

enum Status {
  INPROGRESS
  COMPLETED
  FAILED
}

type Subscription {
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  gamePlayerRoles(where: gamePlayerRolesSubscriptionWhereInput): gamePlayerRolesSubscriptionPayload
  userGameRoles(where: userGameRolesSubscriptionWhereInput): userGameRolesSubscriptionPayload
}

type User {
  id: ID!
  userName: String!
  password: String!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  avatar: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  userName: String!
  password: String!
  games: GameCreateManyInput
  avatar: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

type userGameRoles {
  id: ID!
  role: Roles!
  userId: User!
}

type userGameRolesConnection {
  pageInfo: PageInfo!
  edges: [userGameRolesEdge]!
  aggregate: AggregateuserGameRoles!
}

input userGameRolesCreateInput {
  role: Roles!
  userId: UserCreateOneInput!
}

type userGameRolesEdge {
  node: userGameRoles!
  cursor: String!
}

enum userGameRolesOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type userGameRolesPreviousValues {
  id: ID!
  role: Roles!
}

type userGameRolesSubscriptionPayload {
  mutation: MutationType!
  node: userGameRoles
  updatedFields: [String!]
  previousValues: userGameRolesPreviousValues
}

input userGameRolesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: userGameRolesWhereInput
  AND: [userGameRolesSubscriptionWhereInput!]
  OR: [userGameRolesSubscriptionWhereInput!]
  NOT: [userGameRolesSubscriptionWhereInput!]
}

input userGameRolesUpdateInput {
  role: Roles
  userId: UserUpdateOneRequiredInput
}

input userGameRolesUpdateManyMutationInput {
  role: Roles
}

input userGameRolesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: Roles
  role_not: Roles
  role_in: [Roles!]
  role_not_in: [Roles!]
  userId: UserWhereInput
  AND: [userGameRolesWhereInput!]
  OR: [userGameRolesWhereInput!]
  NOT: [userGameRolesWhereInput!]
}

input userGameRolesWhereUniqueInput {
  id: ID
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  userName_ASC
  userName_DESC
  password_ASC
  password_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  userName: String!
  password: String!
  avatar: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  userName: String
  password: String
  games: GameUpdateManyInput
  avatar: String
}

input UserUpdateInput {
  userName: String
  password: String
  games: GameUpdateManyInput
  avatar: String
}

input UserUpdateManyMutationInput {
  userName: String
  password: String
  avatar: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  games_every: GameWhereInput
  games_some: GameWhereInput
  games_none: GameWhereInput
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  userName: String
}
`
      }
    