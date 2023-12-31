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

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
};

export type Course = {
  __typename?: 'Course';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type CreateQuestionInput = {
  content: Scalars['String']['input'];
  courseId: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  isDraft: Scalars['Boolean']['input'];
  studentId: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateStudentInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateStuukeInput = {
  content: Scalars['String']['input'];
  courseId: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  isDraft: Scalars['Boolean']['input'];
  questionId: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuestion?: Maybe<Question>;
  createStuuke?: Maybe<Stuuke>;
  signinStudent?: Maybe<Student>;
  signupStudent?: Maybe<Student>;
};


export type MutationCreateQuestionArgs = {
  data: CreateQuestionInput;
};


export type MutationCreateStuukeArgs = {
  data: CreateStuukeInput;
};


export type MutationSigninStudentArgs = {
  data: SignInStudentInput;
};


export type MutationSignupStudentArgs = {
  data: CreateStudentInput;
};

export type Query = {
  __typename?: 'Query';
  allCourses?: Maybe<Array<Maybe<Course>>>;
  allStudents?: Maybe<Array<Maybe<Student>>>;
  questionById?: Maybe<Question>;
  questionFeed: Array<Question>;
  stuukeFeed: Array<Stuuke>;
  tagsList: Array<Maybe<Tag>>;
};


export type QueryAllCoursesArgs = {
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuestionByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsListArgs = {
  searchString?: InputMaybe<Scalars['String']['input']>;
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
  stuukes: Array<Stuuke>;
  tags: Array<Tag>;
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

export type SignInStudentInput = {
  emailOrUsername: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Student = {
  __typename?: 'Student';
  courses: Array<Maybe<Course>>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  questions: Array<Maybe<Question>>;
  questionsCount: Scalars['Int']['output'];
  stuukes: Array<Maybe<Stuuke>>;
  stuukesCount: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type Stuuke = {
  __typename?: 'Stuuke';
  content: Scalars['String']['output'];
  course?: Maybe<Course>;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDraft: Scalars['Boolean']['output'];
  question?: Maybe<Question>;
  questionId: Scalars['String']['output'];
  references: Array<Reference>;
  student: Student;
  studentId: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type CreateQuestionMutationVariables = Exact<{
  input: CreateQuestionInput;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', createQuestion?: { __typename?: 'Question', id: string, title: string, content: string, isDraft: boolean, createdAt: any, studentId: string, courseId: string } | null };

export type CreateStuukeMutationVariables = Exact<{
  input: CreateStuukeInput;
}>;


export type CreateStuukeMutation = { __typename?: 'Mutation', createStuuke?: { __typename?: 'Stuuke', id: string, title: string, content: string, isDraft: boolean, createdAt: any, studentId: string, questionId: string, courseId: string } | null };

export type AllCoursesQueryVariables = Exact<{
  courseTitle?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllCoursesQuery = { __typename?: 'Query', allCourses?: Array<{ __typename?: 'Course', title: string, id: string } | null> | null };

export type QuestionFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionFeedQuery = { __typename?: 'Query', questionFeed: Array<{ __typename?: 'Question', id: string, title: string, content: string, isDraft: boolean, createdAt: any, studentId: string, courseId: string, course: { __typename?: 'Course', title: string }, tags: Array<{ __typename?: 'Tag', title: string }>, student: { __typename?: 'Student', username: string, firstName: string, lastName: string } }> };

export type StuukeFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type StuukeFeedQuery = { __typename?: 'Query', stuukeFeed: Array<{ __typename?: 'Stuuke', id: string, title: string, content: string, isDraft: boolean, createdAt: any, studentId: string, courseId: string, course?: { __typename?: 'Course', title: string } | null, tags: Array<{ __typename?: 'Tag', title: string }>, student: { __typename?: 'Student', username: string, firstName: string, lastName: string } }> };

export type QuestionByIdQueryVariables = Exact<{
  questionId?: InputMaybe<Scalars['String']['input']>;
}>;


export type QuestionByIdQuery = { __typename?: 'Query', questionById?: { __typename?: 'Question', id: string, title: string, content: string, createdAt: any, courseId: string, course: { __typename?: 'Course', title: string, description: string }, tags: Array<{ __typename?: 'Tag', id: string, title: string, description: string }>, student: { __typename?: 'Student', firstName: string, lastName: string, username: string }, stuukes: Array<{ __typename?: 'Stuuke', id: string, title: string, content: string, createdAt: any, course?: { __typename?: 'Course', title: string, description: string } | null, tags: Array<{ __typename?: 'Tag', id: string, title: string, description: string }>, student: { __typename?: 'Student', username: string, firstName: string, lastName: string } }> } | null };

export type TagsListQueryVariables = Exact<{
  tagTitle?: InputMaybe<Scalars['String']['input']>;
}>;


export type TagsListQuery = { __typename?: 'Query', tagsList: Array<{ __typename?: 'Tag', id: string, title: string } | null> };


export const CreateQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateQuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}}]}}]}}]} as unknown as DocumentNode<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const CreateStuukeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStuuke"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStuukeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStuuke"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}}]}}]}}]} as unknown as DocumentNode<CreateStuukeMutation, CreateStuukeMutationVariables>;
export const AllCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllCoursesQuery, AllCoursesQueryVariables>;
export const QuestionFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<QuestionFeedQuery, QuestionFeedQueryVariables>;
export const StuukeFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StuukeFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stuukeFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<StuukeFeedQuery, StuukeFeedQueryVariables>;
export const QuestionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stuukes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QuestionByIdQuery, QuestionByIdQueryVariables>;
export const TagsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<TagsListQuery, TagsListQueryVariables>;