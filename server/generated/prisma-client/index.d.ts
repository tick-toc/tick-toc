// Code generated by Prisma (prisma@1.24.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  game: (where?: GameWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  gameRole: (where?: gameRoleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  game: (where: GameWhereUniqueInput) => GamePromise;
  games: (
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Game>;
  gamesConnection: (
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => GameConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  gameRole: (where: gameRoleWhereUniqueInput) => gameRolePromise;
  gameRoles: (
    args?: {
      where?: gameRoleWhereInput;
      orderBy?: gameRoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<gameRole>;
  gameRolesConnection: (
    args?: {
      where?: gameRoleWhereInput;
      orderBy?: gameRoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => gameRoleConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGame: (data: GameCreateInput) => GamePromise;
  updateGame: (
    args: { data: GameUpdateInput; where: GameWhereUniqueInput }
  ) => GamePromise;
  updateManyGames: (
    args: { data: GameUpdateManyMutationInput; where?: GameWhereInput }
  ) => BatchPayloadPromise;
  upsertGame: (
    args: {
      where: GameWhereUniqueInput;
      create: GameCreateInput;
      update: GameUpdateInput;
    }
  ) => GamePromise;
  deleteGame: (where: GameWhereUniqueInput) => GamePromise;
  deleteManyGames: (where?: GameWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  creategameRole: (data: gameRoleCreateInput) => gameRolePromise;
  updategameRole: (
    args: { data: gameRoleUpdateInput; where: gameRoleWhereUniqueInput }
  ) => gameRolePromise;
  updateManygameRoles: (
    args: { data: gameRoleUpdateManyMutationInput; where?: gameRoleWhereInput }
  ) => BatchPayloadPromise;
  upsertgameRole: (
    args: {
      where: gameRoleWhereUniqueInput;
      create: gameRoleCreateInput;
      update: gameRoleUpdateInput;
    }
  ) => gameRolePromise;
  deletegameRole: (where: gameRoleWhereUniqueInput) => gameRolePromise;
  deleteManygameRoles: (where?: gameRoleWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  game: (
    where?: GameSubscriptionWhereInput
  ) => GameSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  gameRole: (
    where?: gameRoleSubscriptionWhereInput
  ) => gameRoleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Status = "INPROGRESS" | "COMPLETED" | "FAILED";

export type GameOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "modules_ASC"
  | "modules_DESC"
  | "modulesFailed_ASC"
  | "modulesFailed_DESC"
  | "startTime_ASC"
  | "startTime_DESC"
  | "endTime_ASC"
  | "endTime_DESC"
  | "strikesAllowed_ASC"
  | "strikesAllowed_DESC"
  | "gameStatus_ASC"
  | "gameStatus_DESC"
  | "needyModules_ASC"
  | "needyModules_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "userName_ASC"
  | "userName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type RoleType = "DEFUSER" | "EXPERT";

export type gameRoleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "role_ASC"
  | "role_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type GameWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface GameWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  modules?: Int;
  modules_not?: Int;
  modules_in?: Int[] | Int;
  modules_not_in?: Int[] | Int;
  modules_lt?: Int;
  modules_lte?: Int;
  modules_gt?: Int;
  modules_gte?: Int;
  modulesFailed?: Int;
  modulesFailed_not?: Int;
  modulesFailed_in?: Int[] | Int;
  modulesFailed_not_in?: Int[] | Int;
  modulesFailed_lt?: Int;
  modulesFailed_lte?: Int;
  modulesFailed_gt?: Int;
  modulesFailed_gte?: Int;
  startTime?: Int;
  startTime_not?: Int;
  startTime_in?: Int[] | Int;
  startTime_not_in?: Int[] | Int;
  startTime_lt?: Int;
  startTime_lte?: Int;
  startTime_gt?: Int;
  startTime_gte?: Int;
  endTime?: Int;
  endTime_not?: Int;
  endTime_in?: Int[] | Int;
  endTime_not_in?: Int[] | Int;
  endTime_lt?: Int;
  endTime_lte?: Int;
  endTime_gt?: Int;
  endTime_gte?: Int;
  strikesAllowed?: Int;
  strikesAllowed_not?: Int;
  strikesAllowed_in?: Int[] | Int;
  strikesAllowed_not_in?: Int[] | Int;
  strikesAllowed_lt?: Int;
  strikesAllowed_lte?: Int;
  strikesAllowed_gt?: Int;
  strikesAllowed_gte?: Int;
  gameStatus?: Status;
  gameStatus_not?: Status;
  gameStatus_in?: Status[] | Status;
  gameStatus_not_in?: Status[] | Status;
  needyModules?: Boolean;
  needyModules_not?: Boolean;
  AND?: GameWhereInput[] | GameWhereInput;
  OR?: GameWhereInput[] | GameWhereInput;
  NOT?: GameWhereInput[] | GameWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  userName?: String;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  userName?: String;
  userName_not?: String;
  userName_in?: String[] | String;
  userName_not_in?: String[] | String;
  userName_lt?: String;
  userName_lte?: String;
  userName_gt?: String;
  userName_gte?: String;
  userName_contains?: String;
  userName_not_contains?: String;
  userName_starts_with?: String;
  userName_not_starts_with?: String;
  userName_ends_with?: String;
  userName_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  games_every?: GameWhereInput;
  games_some?: GameWhereInput;
  games_none?: GameWhereInput;
  avatar?: String;
  avatar_not?: String;
  avatar_in?: String[] | String;
  avatar_not_in?: String[] | String;
  avatar_lt?: String;
  avatar_lte?: String;
  avatar_gt?: String;
  avatar_gte?: String;
  avatar_contains?: String;
  avatar_not_contains?: String;
  avatar_starts_with?: String;
  avatar_not_starts_with?: String;
  avatar_ends_with?: String;
  avatar_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type gameRoleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface gameRoleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  playerId?: UserWhereInput;
  role?: RoleType;
  role_not?: RoleType;
  role_in?: RoleType[] | RoleType;
  role_not_in?: RoleType[] | RoleType;
  gameId?: GameWhereInput;
  AND?: gameRoleWhereInput[] | gameRoleWhereInput;
  OR?: gameRoleWhereInput[] | gameRoleWhereInput;
  NOT?: gameRoleWhereInput[] | gameRoleWhereInput;
}

export interface GameCreateInput {
  modules?: Int;
  modulesFailed?: Int;
  startTime?: Int;
  endTime?: Int;
  strikesAllowed?: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface GameUpdateInput {
  modules?: Int;
  modulesFailed?: Int;
  startTime?: Int;
  endTime?: Int;
  strikesAllowed?: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface GameUpdateManyMutationInput {
  modules?: Int;
  modulesFailed?: Int;
  startTime?: Int;
  endTime?: Int;
  strikesAllowed?: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface UserCreateInput {
  userName: String;
  password: String;
  games?: GameCreateManyInput;
  avatar?: String;
}

export interface GameCreateManyInput {
  create?: GameCreateInput[] | GameCreateInput;
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput;
}

export interface UserUpdateInput {
  userName?: String;
  password?: String;
  games?: GameUpdateManyInput;
  avatar?: String;
}

export interface GameUpdateManyInput {
  create?: GameCreateInput[] | GameCreateInput;
  update?:
    | GameUpdateWithWhereUniqueNestedInput[]
    | GameUpdateWithWhereUniqueNestedInput;
  upsert?:
    | GameUpsertWithWhereUniqueNestedInput[]
    | GameUpsertWithWhereUniqueNestedInput;
  delete?: GameWhereUniqueInput[] | GameWhereUniqueInput;
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput;
  disconnect?: GameWhereUniqueInput[] | GameWhereUniqueInput;
  deleteMany?: GameScalarWhereInput[] | GameScalarWhereInput;
  updateMany?:
    | GameUpdateManyWithWhereNestedInput[]
    | GameUpdateManyWithWhereNestedInput;
}

export interface GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;
  data: GameUpdateDataInput;
}

export interface GameUpdateDataInput {
  modules?: Int;
  modulesFailed?: Int;
  startTime?: Int;
  endTime?: Int;
  strikesAllowed?: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;
  update: GameUpdateDataInput;
  create: GameCreateInput;
}

export interface GameScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  modules?: Int;
  modules_not?: Int;
  modules_in?: Int[] | Int;
  modules_not_in?: Int[] | Int;
  modules_lt?: Int;
  modules_lte?: Int;
  modules_gt?: Int;
  modules_gte?: Int;
  modulesFailed?: Int;
  modulesFailed_not?: Int;
  modulesFailed_in?: Int[] | Int;
  modulesFailed_not_in?: Int[] | Int;
  modulesFailed_lt?: Int;
  modulesFailed_lte?: Int;
  modulesFailed_gt?: Int;
  modulesFailed_gte?: Int;
  startTime?: Int;
  startTime_not?: Int;
  startTime_in?: Int[] | Int;
  startTime_not_in?: Int[] | Int;
  startTime_lt?: Int;
  startTime_lte?: Int;
  startTime_gt?: Int;
  startTime_gte?: Int;
  endTime?: Int;
  endTime_not?: Int;
  endTime_in?: Int[] | Int;
  endTime_not_in?: Int[] | Int;
  endTime_lt?: Int;
  endTime_lte?: Int;
  endTime_gt?: Int;
  endTime_gte?: Int;
  strikesAllowed?: Int;
  strikesAllowed_not?: Int;
  strikesAllowed_in?: Int[] | Int;
  strikesAllowed_not_in?: Int[] | Int;
  strikesAllowed_lt?: Int;
  strikesAllowed_lte?: Int;
  strikesAllowed_gt?: Int;
  strikesAllowed_gte?: Int;
  gameStatus?: Status;
  gameStatus_not?: Status;
  gameStatus_in?: Status[] | Status;
  gameStatus_not_in?: Status[] | Status;
  needyModules?: Boolean;
  needyModules_not?: Boolean;
  AND?: GameScalarWhereInput[] | GameScalarWhereInput;
  OR?: GameScalarWhereInput[] | GameScalarWhereInput;
  NOT?: GameScalarWhereInput[] | GameScalarWhereInput;
}

export interface GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput;
  data: GameUpdateManyDataInput;
}

export interface GameUpdateManyDataInput {
  modules?: Int;
  modulesFailed?: Int;
  startTime?: Int;
  endTime?: Int;
  strikesAllowed?: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface UserUpdateManyMutationInput {
  userName?: String;
  password?: String;
  avatar?: String;
}

export interface gameRoleCreateInput {
  playerId: UserCreateOneInput;
  role: RoleType;
  gameId: GameCreateOneInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface GameCreateOneInput {
  create?: GameCreateInput;
  connect?: GameWhereUniqueInput;
}

export interface gameRoleUpdateInput {
  playerId?: UserUpdateOneRequiredInput;
  role?: RoleType;
  gameId?: GameUpdateOneRequiredInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateDataInput {
  userName?: String;
  password?: String;
  games?: GameUpdateManyInput;
  avatar?: String;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface GameUpdateOneRequiredInput {
  create?: GameCreateInput;
  update?: GameUpdateDataInput;
  upsert?: GameUpsertNestedInput;
  connect?: GameWhereUniqueInput;
}

export interface GameUpsertNestedInput {
  update: GameUpdateDataInput;
  create: GameCreateInput;
}

export interface gameRoleUpdateManyMutationInput {
  role?: RoleType;
}

export interface GameSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GameWhereInput;
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface gameRoleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: gameRoleWhereInput;
  AND?: gameRoleSubscriptionWhereInput[] | gameRoleSubscriptionWhereInput;
  OR?: gameRoleSubscriptionWhereInput[] | gameRoleSubscriptionWhereInput;
  NOT?: gameRoleSubscriptionWhereInput[] | gameRoleSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Game {
  id: ID_Output;
  modules: Int;
  modulesFailed: Int;
  startTime: Int;
  endTime?: Int;
  strikesAllowed: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface GamePromise extends Promise<Game>, Fragmentable {
  id: () => Promise<ID_Output>;
  modules: () => Promise<Int>;
  modulesFailed: () => Promise<Int>;
  startTime: () => Promise<Int>;
  endTime: () => Promise<Int>;
  strikesAllowed: () => Promise<Int>;
  gameStatus: () => Promise<Status>;
  needyModules: () => Promise<Boolean>;
}

export interface GameSubscription
  extends Promise<AsyncIterator<Game>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  modules: () => Promise<AsyncIterator<Int>>;
  modulesFailed: () => Promise<AsyncIterator<Int>>;
  startTime: () => Promise<AsyncIterator<Int>>;
  endTime: () => Promise<AsyncIterator<Int>>;
  strikesAllowed: () => Promise<AsyncIterator<Int>>;
  gameStatus: () => Promise<AsyncIterator<Status>>;
  needyModules: () => Promise<AsyncIterator<Boolean>>;
}

export interface GameConnection {
  pageInfo: PageInfo;
  edges: GameEdge[];
}

export interface GameConnectionPromise
  extends Promise<GameConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GameEdge>>() => T;
  aggregate: <T = AggregateGamePromise>() => T;
}

export interface GameConnectionSubscription
  extends Promise<AsyncIterator<GameConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GameEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGameSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface GameEdge {
  node: Game;
  cursor: String;
}

export interface GameEdgePromise extends Promise<GameEdge>, Fragmentable {
  node: <T = GamePromise>() => T;
  cursor: () => Promise<String>;
}

export interface GameEdgeSubscription
  extends Promise<AsyncIterator<GameEdge>>,
    Fragmentable {
  node: <T = GameSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGame {
  count: Int;
}

export interface AggregateGamePromise
  extends Promise<AggregateGame>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGameSubscription
  extends Promise<AsyncIterator<AggregateGame>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  userName: String;
  password: String;
  avatar?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  password: () => Promise<String>;
  games: <T = FragmentableArray<Game>>(
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  avatar: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  games: <T = Promise<AsyncIterator<GameSubscription>>>(
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface gameRole {
  id: ID_Output;
  role: RoleType;
}

export interface gameRolePromise extends Promise<gameRole>, Fragmentable {
  id: () => Promise<ID_Output>;
  playerId: <T = UserPromise>() => T;
  role: () => Promise<RoleType>;
  gameId: <T = GamePromise>() => T;
}

export interface gameRoleSubscription
  extends Promise<AsyncIterator<gameRole>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  playerId: <T = UserSubscription>() => T;
  role: () => Promise<AsyncIterator<RoleType>>;
  gameId: <T = GameSubscription>() => T;
}

export interface gameRoleConnection {
  pageInfo: PageInfo;
  edges: gameRoleEdge[];
}

export interface gameRoleConnectionPromise
  extends Promise<gameRoleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<gameRoleEdge>>() => T;
  aggregate: <T = AggregategameRolePromise>() => T;
}

export interface gameRoleConnectionSubscription
  extends Promise<AsyncIterator<gameRoleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<gameRoleEdgeSubscription>>>() => T;
  aggregate: <T = AggregategameRoleSubscription>() => T;
}

export interface gameRoleEdge {
  node: gameRole;
  cursor: String;
}

export interface gameRoleEdgePromise
  extends Promise<gameRoleEdge>,
    Fragmentable {
  node: <T = gameRolePromise>() => T;
  cursor: () => Promise<String>;
}

export interface gameRoleEdgeSubscription
  extends Promise<AsyncIterator<gameRoleEdge>>,
    Fragmentable {
  node: <T = gameRoleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregategameRole {
  count: Int;
}

export interface AggregategameRolePromise
  extends Promise<AggregategameRole>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregategameRoleSubscription
  extends Promise<AsyncIterator<AggregategameRole>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface GameSubscriptionPayload {
  mutation: MutationType;
  node: Game;
  updatedFields: String[];
  previousValues: GamePreviousValues;
}

export interface GameSubscriptionPayloadPromise
  extends Promise<GameSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GamePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GamePreviousValuesPromise>() => T;
}

export interface GameSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GameSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GameSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GamePreviousValuesSubscription>() => T;
}

export interface GamePreviousValues {
  id: ID_Output;
  modules: Int;
  modulesFailed: Int;
  startTime: Int;
  endTime?: Int;
  strikesAllowed: Int;
  gameStatus?: Status;
  needyModules?: Boolean;
}

export interface GamePreviousValuesPromise
  extends Promise<GamePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  modules: () => Promise<Int>;
  modulesFailed: () => Promise<Int>;
  startTime: () => Promise<Int>;
  endTime: () => Promise<Int>;
  strikesAllowed: () => Promise<Int>;
  gameStatus: () => Promise<Status>;
  needyModules: () => Promise<Boolean>;
}

export interface GamePreviousValuesSubscription
  extends Promise<AsyncIterator<GamePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  modules: () => Promise<AsyncIterator<Int>>;
  modulesFailed: () => Promise<AsyncIterator<Int>>;
  startTime: () => Promise<AsyncIterator<Int>>;
  endTime: () => Promise<AsyncIterator<Int>>;
  strikesAllowed: () => Promise<AsyncIterator<Int>>;
  gameStatus: () => Promise<AsyncIterator<Status>>;
  needyModules: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  userName: String;
  password: String;
  avatar?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface gameRoleSubscriptionPayload {
  mutation: MutationType;
  node: gameRole;
  updatedFields: String[];
  previousValues: gameRolePreviousValues;
}

export interface gameRoleSubscriptionPayloadPromise
  extends Promise<gameRoleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = gameRolePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = gameRolePreviousValuesPromise>() => T;
}

export interface gameRoleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<gameRoleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = gameRoleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = gameRolePreviousValuesSubscription>() => T;
}

export interface gameRolePreviousValues {
  id: ID_Output;
  role: RoleType;
}

export interface gameRolePreviousValuesPromise
  extends Promise<gameRolePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<RoleType>;
}

export interface gameRolePreviousValuesSubscription
  extends Promise<AsyncIterator<gameRolePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<RoleType>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Game",
    embedded: false
  },
  {
    name: "RoleType",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "gameRole",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
