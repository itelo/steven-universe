import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "episodes" */
export type Episodes = {
  __typename?: 'episodes';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  index: Scalars['numeric'];
  name: Scalars['String'];
  season_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "episodes" */
export type Episodes_Aggregate = {
  __typename?: 'episodes_aggregate';
  aggregate?: Maybe<Episodes_Aggregate_Fields>;
  nodes: Array<Episodes>;
};

/** aggregate fields of "episodes" */
export type Episodes_Aggregate_Fields = {
  __typename?: 'episodes_aggregate_fields';
  avg?: Maybe<Episodes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Episodes_Max_Fields>;
  min?: Maybe<Episodes_Min_Fields>;
  stddev?: Maybe<Episodes_Stddev_Fields>;
  stddev_pop?: Maybe<Episodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Episodes_Stddev_Samp_Fields>;
  sum?: Maybe<Episodes_Sum_Fields>;
  var_pop?: Maybe<Episodes_Var_Pop_Fields>;
  var_samp?: Maybe<Episodes_Var_Samp_Fields>;
  variance?: Maybe<Episodes_Variance_Fields>;
};


/** aggregate fields of "episodes" */
export type Episodes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Episodes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "episodes" */
export type Episodes_Aggregate_Order_By = {
  avg?: Maybe<Episodes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Episodes_Max_Order_By>;
  min?: Maybe<Episodes_Min_Order_By>;
  stddev?: Maybe<Episodes_Stddev_Order_By>;
  stddev_pop?: Maybe<Episodes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Episodes_Stddev_Samp_Order_By>;
  sum?: Maybe<Episodes_Sum_Order_By>;
  var_pop?: Maybe<Episodes_Var_Pop_Order_By>;
  var_samp?: Maybe<Episodes_Var_Samp_Order_By>;
  variance?: Maybe<Episodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "episodes" */
export type Episodes_Arr_Rel_Insert_Input = {
  data: Array<Episodes_Insert_Input>;
  on_conflict?: Maybe<Episodes_On_Conflict>;
};

/** aggregate avg on columns */
export type Episodes_Avg_Fields = {
  __typename?: 'episodes_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "episodes" */
export type Episodes_Avg_Order_By = {
  index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "episodes". All fields are combined with a logical 'AND'. */
export type Episodes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Episodes_Bool_Exp>>>;
  _not?: Maybe<Episodes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Episodes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  season_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "episodes" */
export enum Episodes_Constraint {
  /** unique or primary key constraint */
  EpisodesIndexKey = 'episodes_index_key',
  /** unique or primary key constraint */
  EpisodesPkey = 'episodes_pkey'
}

/** input type for incrementing integer column in table "episodes" */
export type Episodes_Inc_Input = {
  index?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "episodes" */
export type Episodes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Episodes_Max_Fields = {
  __typename?: 'episodes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "episodes" */
export type Episodes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  season_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Episodes_Min_Fields = {
  __typename?: 'episodes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "episodes" */
export type Episodes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  season_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "episodes" */
export type Episodes_Mutation_Response = {
  __typename?: 'episodes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Episodes>;
};

/** input type for inserting object relation for remote table "episodes" */
export type Episodes_Obj_Rel_Insert_Input = {
  data: Episodes_Insert_Input;
  on_conflict?: Maybe<Episodes_On_Conflict>;
};

/** on conflict condition type for table "episodes" */
export type Episodes_On_Conflict = {
  constraint: Episodes_Constraint;
  update_columns: Array<Episodes_Update_Column>;
  where?: Maybe<Episodes_Bool_Exp>;
};

/** ordering options when selecting data from "episodes" */
export type Episodes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  season_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "episodes" */
export type Episodes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "episodes" */
export enum Episodes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  SeasonId = 'season_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "episodes" */
export type Episodes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Episodes_Stddev_Fields = {
  __typename?: 'episodes_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "episodes" */
export type Episodes_Stddev_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Episodes_Stddev_Pop_Fields = {
  __typename?: 'episodes_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "episodes" */
export type Episodes_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Episodes_Stddev_Samp_Fields = {
  __typename?: 'episodes_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "episodes" */
export type Episodes_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Episodes_Sum_Fields = {
  __typename?: 'episodes_sum_fields';
  index?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "episodes" */
export type Episodes_Sum_Order_By = {
  index?: Maybe<Order_By>;
};

/** update columns of table "episodes" */
export enum Episodes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  SeasonId = 'season_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Episodes_Var_Pop_Fields = {
  __typename?: 'episodes_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "episodes" */
export type Episodes_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Episodes_Var_Samp_Fields = {
  __typename?: 'episodes_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "episodes" */
export type Episodes_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Episodes_Variance_Fields = {
  __typename?: 'episodes_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "episodes" */
export type Episodes_Variance_Order_By = {
  index?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "episodes" */
  delete_episodes?: Maybe<Episodes_Mutation_Response>;
  /** delete single row from the table: "episodes" */
  delete_episodes_by_pk?: Maybe<Episodes>;
  /** delete data from the table: "seasons" */
  delete_seasons?: Maybe<Seasons_Mutation_Response>;
  /** delete single row from the table: "seasons" */
  delete_seasons_by_pk?: Maybe<Seasons>;
  /** insert data into the table: "episodes" */
  insert_episodes?: Maybe<Episodes_Mutation_Response>;
  /** insert a single row into the table: "episodes" */
  insert_episodes_one?: Maybe<Episodes>;
  /** insert data into the table: "seasons" */
  insert_seasons?: Maybe<Seasons_Mutation_Response>;
  /** insert a single row into the table: "seasons" */
  insert_seasons_one?: Maybe<Seasons>;
  /** update data of the table: "episodes" */
  update_episodes?: Maybe<Episodes_Mutation_Response>;
  /** update single row of the table: "episodes" */
  update_episodes_by_pk?: Maybe<Episodes>;
  /** update data of the table: "seasons" */
  update_seasons?: Maybe<Seasons_Mutation_Response>;
  /** update single row of the table: "seasons" */
  update_seasons_by_pk?: Maybe<Seasons>;
};


/** mutation root */
export type Mutation_RootDelete_EpisodesArgs = {
  where: Episodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Episodes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SeasonsArgs = {
  where: Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seasons_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_EpisodesArgs = {
  objects: Array<Episodes_Insert_Input>;
  on_conflict?: Maybe<Episodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Episodes_OneArgs = {
  object: Episodes_Insert_Input;
  on_conflict?: Maybe<Episodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SeasonsArgs = {
  objects: Array<Seasons_Insert_Input>;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasons_OneArgs = {
  object: Seasons_Insert_Input;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EpisodesArgs = {
  _inc?: Maybe<Episodes_Inc_Input>;
  _set?: Maybe<Episodes_Set_Input>;
  where: Episodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Episodes_By_PkArgs = {
  _inc?: Maybe<Episodes_Inc_Input>;
  _set?: Maybe<Episodes_Set_Input>;
  pk_columns: Episodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SeasonsArgs = {
  _inc?: Maybe<Seasons_Inc_Input>;
  _set?: Maybe<Seasons_Set_Input>;
  where: Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seasons_By_PkArgs = {
  _inc?: Maybe<Seasons_Inc_Input>;
  _set?: Maybe<Seasons_Set_Input>;
  pk_columns: Seasons_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "episodes" */
  episodes: Array<Episodes>;
  /** fetch aggregated fields from the table: "episodes" */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
};


/** query root */
export type Query_RootEpisodesArgs = {
  distinct_on?: Maybe<Array<Episodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Episodes_Order_By>>;
  where?: Maybe<Episodes_Bool_Exp>;
};


/** query root */
export type Query_RootEpisodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Episodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Episodes_Order_By>>;
  where?: Maybe<Episodes_Bool_Exp>;
};


/** query root */
export type Query_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSeasonsArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootSeasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootSeasons_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "seasons" */
export type Seasons = {
  __typename?: 'seasons';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  index: Scalars['numeric'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "seasons" */
export type Seasons_Aggregate = {
  __typename?: 'seasons_aggregate';
  aggregate?: Maybe<Seasons_Aggregate_Fields>;
  nodes: Array<Seasons>;
};

/** aggregate fields of "seasons" */
export type Seasons_Aggregate_Fields = {
  __typename?: 'seasons_aggregate_fields';
  avg?: Maybe<Seasons_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Seasons_Max_Fields>;
  min?: Maybe<Seasons_Min_Fields>;
  stddev?: Maybe<Seasons_Stddev_Fields>;
  stddev_pop?: Maybe<Seasons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seasons_Stddev_Samp_Fields>;
  sum?: Maybe<Seasons_Sum_Fields>;
  var_pop?: Maybe<Seasons_Var_Pop_Fields>;
  var_samp?: Maybe<Seasons_Var_Samp_Fields>;
  variance?: Maybe<Seasons_Variance_Fields>;
};


/** aggregate fields of "seasons" */
export type Seasons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Seasons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seasons" */
export type Seasons_Aggregate_Order_By = {
  avg?: Maybe<Seasons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Seasons_Max_Order_By>;
  min?: Maybe<Seasons_Min_Order_By>;
  stddev?: Maybe<Seasons_Stddev_Order_By>;
  stddev_pop?: Maybe<Seasons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Seasons_Stddev_Samp_Order_By>;
  sum?: Maybe<Seasons_Sum_Order_By>;
  var_pop?: Maybe<Seasons_Var_Pop_Order_By>;
  var_samp?: Maybe<Seasons_Var_Samp_Order_By>;
  variance?: Maybe<Seasons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "seasons" */
export type Seasons_Arr_Rel_Insert_Input = {
  data: Array<Seasons_Insert_Input>;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};

/** aggregate avg on columns */
export type Seasons_Avg_Fields = {
  __typename?: 'seasons_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "seasons" */
export type Seasons_Avg_Order_By = {
  index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "seasons". All fields are combined with a logical 'AND'. */
export type Seasons_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Seasons_Bool_Exp>>>;
  _not?: Maybe<Seasons_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Seasons_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "seasons" */
export enum Seasons_Constraint {
  /** unique or primary key constraint */
  SeasonsIndexKey = 'seasons_index_key',
  /** unique or primary key constraint */
  SeasonsPkey = 'seasons_pkey'
}

/** input type for incrementing integer column in table "seasons" */
export type Seasons_Inc_Input = {
  index?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "seasons" */
export type Seasons_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Seasons_Max_Fields = {
  __typename?: 'seasons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "seasons" */
export type Seasons_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Seasons_Min_Fields = {
  __typename?: 'seasons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "seasons" */
export type Seasons_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "seasons" */
export type Seasons_Mutation_Response = {
  __typename?: 'seasons_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Seasons>;
};

/** input type for inserting object relation for remote table "seasons" */
export type Seasons_Obj_Rel_Insert_Input = {
  data: Seasons_Insert_Input;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};

/** on conflict condition type for table "seasons" */
export type Seasons_On_Conflict = {
  constraint: Seasons_Constraint;
  update_columns: Array<Seasons_Update_Column>;
  where?: Maybe<Seasons_Bool_Exp>;
};

/** ordering options when selecting data from "seasons" */
export type Seasons_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "seasons" */
export type Seasons_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "seasons" */
export enum Seasons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "seasons" */
export type Seasons_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Seasons_Stddev_Fields = {
  __typename?: 'seasons_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "seasons" */
export type Seasons_Stddev_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Seasons_Stddev_Pop_Fields = {
  __typename?: 'seasons_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "seasons" */
export type Seasons_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Seasons_Stddev_Samp_Fields = {
  __typename?: 'seasons_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "seasons" */
export type Seasons_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Seasons_Sum_Fields = {
  __typename?: 'seasons_sum_fields';
  index?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "seasons" */
export type Seasons_Sum_Order_By = {
  index?: Maybe<Order_By>;
};

/** update columns of table "seasons" */
export enum Seasons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Seasons_Var_Pop_Fields = {
  __typename?: 'seasons_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "seasons" */
export type Seasons_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Seasons_Var_Samp_Fields = {
  __typename?: 'seasons_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "seasons" */
export type Seasons_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Seasons_Variance_Fields = {
  __typename?: 'seasons_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "seasons" */
export type Seasons_Variance_Order_By = {
  index?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "episodes" */
  episodes: Array<Episodes>;
  /** fetch aggregated fields from the table: "episodes" */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
};


/** subscription root */
export type Subscription_RootEpisodesArgs = {
  distinct_on?: Maybe<Array<Episodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Episodes_Order_By>>;
  where?: Maybe<Episodes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEpisodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Episodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Episodes_Order_By>>;
  where?: Maybe<Episodes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSeasonsArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeasons_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type EpisodesListBySeasonIdQueryVariables = Exact<{
  season_id?: Maybe<Scalars['uuid']>;
}>;


export type EpisodesListBySeasonIdQuery = (
  { __typename?: 'query_root' }
  & { episodes: Array<(
    { __typename?: 'episodes' }
    & Pick<Episodes, 'id' | 'name' | 'season_id' | 'index' | 'url'>
  )> }
);

export type SeasonsQueryVariables = Exact<{ [key: string]: never; }>;


export type SeasonsQuery = (
  { __typename?: 'query_root' }
  & { seasons: Array<(
    { __typename?: 'seasons' }
    & Pick<Seasons, 'id' | 'index' | 'name'>
  )> }
);


export const EpisodesListBySeasonIdDocument = gql`
    query EpisodesListBySeasonId($season_id: uuid) {
  episodes(where: {season_id: {_eq: $season_id}}) {
    id
    name
    season_id
    index
    url
  }
}
    `;
export type EpisodesListBySeasonIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>, 'query'>;

    export const EpisodesListBySeasonIdComponent = (props: EpisodesListBySeasonIdComponentProps) => (
      <ApolloReactComponents.Query<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables> query={EpisodesListBySeasonIdDocument} {...props} />
    );
    
export type EpisodesListBySeasonIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>
    } & TChildProps;
export function withEpisodesListBySeasonId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EpisodesListBySeasonIdQuery,
  EpisodesListBySeasonIdQueryVariables,
  EpisodesListBySeasonIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables, EpisodesListBySeasonIdProps<TChildProps, TDataName>>(EpisodesListBySeasonIdDocument, {
      alias: 'episodesListBySeasonId',
      ...operationOptions
    });
};

/**
 * __useEpisodesListBySeasonIdQuery__
 *
 * To run a query within a React component, call `useEpisodesListBySeasonIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesListBySeasonIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesListBySeasonIdQuery({
 *   variables: {
 *      season_id: // value for 'season_id'
 *   },
 * });
 */
export function useEpisodesListBySeasonIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>) {
        return ApolloReactHooks.useQuery<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>(EpisodesListBySeasonIdDocument, baseOptions);
      }
export function useEpisodesListBySeasonIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>(EpisodesListBySeasonIdDocument, baseOptions);
        }
export type EpisodesListBySeasonIdQueryHookResult = ReturnType<typeof useEpisodesListBySeasonIdQuery>;
export type EpisodesListBySeasonIdLazyQueryHookResult = ReturnType<typeof useEpisodesListBySeasonIdLazyQuery>;
export type EpisodesListBySeasonIdQueryResult = ApolloReactCommon.QueryResult<EpisodesListBySeasonIdQuery, EpisodesListBySeasonIdQueryVariables>;
export const SeasonsDocument = gql`
    query Seasons {
  seasons {
    id
    index
    name
  }
}
    `;
export type SeasonsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SeasonsQuery, SeasonsQueryVariables>, 'query'>;

    export const SeasonsComponent = (props: SeasonsComponentProps) => (
      <ApolloReactComponents.Query<SeasonsQuery, SeasonsQueryVariables> query={SeasonsDocument} {...props} />
    );
    
export type SeasonsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SeasonsQuery, SeasonsQueryVariables>
    } & TChildProps;
export function withSeasons<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SeasonsQuery,
  SeasonsQueryVariables,
  SeasonsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SeasonsQuery, SeasonsQueryVariables, SeasonsProps<TChildProps, TDataName>>(SeasonsDocument, {
      alias: 'seasons',
      ...operationOptions
    });
};

/**
 * __useSeasonsQuery__
 *
 * To run a query within a React component, call `useSeasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeasonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeasonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SeasonsQuery, SeasonsQueryVariables>) {
        return ApolloReactHooks.useQuery<SeasonsQuery, SeasonsQueryVariables>(SeasonsDocument, baseOptions);
      }
export function useSeasonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SeasonsQuery, SeasonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SeasonsQuery, SeasonsQueryVariables>(SeasonsDocument, baseOptions);
        }
export type SeasonsQueryHookResult = ReturnType<typeof useSeasonsQuery>;
export type SeasonsLazyQueryHookResult = ReturnType<typeof useSeasonsLazyQuery>;
export type SeasonsQueryResult = ApolloReactCommon.QueryResult<SeasonsQuery, SeasonsQueryVariables>;