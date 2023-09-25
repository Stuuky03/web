/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query QuestionById($questionId: String!) {\n    questionById(id: $questionId) {\n      id\n      title\n      content\n      createdAt\n      course {\n          name\n          description\n      }\n      tags {\n          name\n          description\n      }\n      student {\n          firstName\n          lastName\n          username\n      }\n      stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            name\n            description\n        }\n        tags {\n            name\n            description\n        }\n        student {\n            firstName\n            lastName\n            username\n        }\n        references {\n            title\n            url\n        }\n      }\n    }\n}": types.QuestionByIdDocument,
    "\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          name\n      }\n      tags {\n          name\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n": types.QuestionFeedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QuestionById($questionId: String!) {\n    questionById(id: $questionId) {\n      id\n      title\n      content\n      createdAt\n      course {\n          name\n          description\n      }\n      tags {\n          name\n          description\n      }\n      student {\n          firstName\n          lastName\n          username\n      }\n      stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            name\n            description\n        }\n        tags {\n            name\n            description\n        }\n        student {\n            firstName\n            lastName\n            username\n        }\n        references {\n            title\n            url\n        }\n      }\n    }\n}"): (typeof documents)["\n  query QuestionById($questionId: String!) {\n    questionById(id: $questionId) {\n      id\n      title\n      content\n      createdAt\n      course {\n          name\n          description\n      }\n      tags {\n          name\n          description\n      }\n      student {\n          firstName\n          lastName\n          username\n      }\n      stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            name\n            description\n        }\n        tags {\n            name\n            description\n        }\n        student {\n            firstName\n            lastName\n            username\n        }\n        references {\n            title\n            url\n        }\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          name\n      }\n      tags {\n          name\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n"): (typeof documents)["\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          name\n      }\n      tags {\n          name\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;