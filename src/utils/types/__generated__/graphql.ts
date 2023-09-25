/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type BadgeInfo = {
  __typename?: 'BadgeInfo';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Course = {
  __typename?: 'Course';
  description: Scalars['String']['output'];
  name: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  question?: Maybe<Question>;
};

export type Query = {
  __typename?: 'Query';
  allStudents?: Maybe<Array<Maybe<Student>>>;
  questionById?: Maybe<Question>;
  questionFeed: Array<Question>;
  stuukeFeed: Array<Stuuke>;
};


export type QueryQuestionByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Question = {
  __typename?: 'Question';
  content: Scalars['String']['output'];
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDraft: Scalars['Boolean']['output'];
  student: Student;
  studentId: Scalars['String']['output'];
  stuukes?: Maybe<Array<Stuuke>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String']['output'];
};

export type Reference = {
  __typename?: 'Reference';
  id: Scalars['ID']['output'];
  stuuke: Stuuke;
  stuukeId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Student = {
  __typename?: 'Student';
  badges?: Maybe<Array<Maybe<StudentBadge>>>;
  badgesCount: Scalars['Int']['output'];
  bio: Scalars['String']['output'];
  courses: Course;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  leaderBoardPosition: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  questions?: Maybe<Array<Maybe<Question>>>;
  questionsCount: Scalars['Int']['output'];
  stuukes?: Maybe<Array<Maybe<Stuuke>>>;
  stuukesCount: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type StudentBadge = {
  __typename?: 'StudentBadge';
  badgeId: Scalars['String']['output'];
  badgeInfo?: Maybe<BadgeInfo>;
  earnedAt: Scalars['DateTime']['output'];
  student?: Maybe<Student>;
  studentId: Scalars['String']['output'];
};

export type Stuuke = {
  __typename?: 'Stuuke';
  content: Scalars['String']['output'];
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDraft: Scalars['Boolean']['output'];
  question: Question;
  questionId: Scalars['String']['output'];
  references?: Maybe<Array<Maybe<Reference>>>;
  student: Student;
  studentId: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type QuestionByIdQueryVariables = Exact<{
  questionId: Scalars['String']['input'];
}>;


export type QuestionByIdQuery = { __typename?: 'Query', questionById?: { __typename?: 'Question', id: string, title: string, content: string, createdAt: any, course: { __typename?: 'Course', name: string, description: string }, tags?: Array<{ __typename?: 'Tag', name: string, description: string } | null> | null, student: { __typename?: 'Student', firstName: string, lastName: string, username: string }, stuukes?: Array<{ __typename?: 'Stuuke', id: string, title: string, content: string, createdAt: any, course: { __typename?: 'Course', name: string, description: string }, tags?: Array<{ __typename?: 'Tag', name: string, description: string } | null> | null, student: { __typename?: 'Student', firstName: string, lastName: string, username: string }, references?: Array<{ __typename?: 'Reference', title: string, url: string } | null> | null }> | null } | null };

export type QuestionFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionFeedQuery = { __typename?: 'Query', questionFeed: Array<{ __typename?: 'Question', id: string, title: string, content: string, isDraft: boolean, createdAt: any, studentId: string, courseId: string, course: { __typename?: 'Course', name: string }, tags?: Array<{ __typename?: 'Tag', name: string } | null> | null, student: { __typename?: 'Student', username: string, firstName: string, lastName: string } }> };


export const QuestionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stuukes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"references"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QuestionByIdQuery, QuestionByIdQueryVariables>;
export const QuestionFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<QuestionFeedQuery, QuestionFeedQueryVariables>;