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
    "\n  mutation CreateQuestion($input: CreateQuestionInput!) {\n    createQuestion(data: $input) {\n        id\n        title\n        content\n        isDraft\n        createdAt\n        studentId\n        courseId\n    }\n  }\n": types.CreateQuestionDocument,
    "\nmutation CreateStuuke($input: CreateStuukeInput!) {\n  createStuuke(data: $input) {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      questionId\n      courseId\n  }\n}\n": types.CreateStuukeDocument,
    "\n  query AllCourses($courseTitle: String) {\n    allCourses(searchString: $courseTitle) {\n        title\n        id\n    }\n}\n": types.AllCoursesDocument,
    "\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n": types.QuestionFeedDocument,
    "\nquery StuukeFeed {\n    stuukeFeed {\n        id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n    }\n}\n": types.StuukeFeedDocument,
    "\n  query QuestionById($questionId: String) {\n    questionById(id: $questionId) {\n    id\n    title\n    content\n    createdAt\n    courseId\n    course {\n        title\n        description\n    }\n    tags {\n        id\n        title\n        description\n    }\n    student {\n        firstName\n        lastName\n        username\n    }\n    stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            title\n            description\n        }\n        tags {\n            id\n            title\n            description\n        }\n        student {\n            username\n            firstName\n            lastName\n        }\n    }\n}\n}\n": types.QuestionByIdDocument,
    "\n  query TagsList($tagTitle: String) {\n      tagsList(searchString: $tagTitle) {\n          id\n          title\n      }\n  }\n": types.TagsListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateQuestion($input: CreateQuestionInput!) {\n    createQuestion(data: $input) {\n        id\n        title\n        content\n        isDraft\n        createdAt\n        studentId\n        courseId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateQuestion($input: CreateQuestionInput!) {\n    createQuestion(data: $input) {\n        id\n        title\n        content\n        isDraft\n        createdAt\n        studentId\n        courseId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateStuuke($input: CreateStuukeInput!) {\n  createStuuke(data: $input) {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      questionId\n      courseId\n  }\n}\n"): (typeof documents)["\nmutation CreateStuuke($input: CreateStuukeInput!) {\n  createStuuke(data: $input) {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      questionId\n      courseId\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCourses($courseTitle: String) {\n    allCourses(searchString: $courseTitle) {\n        title\n        id\n    }\n}\n"): (typeof documents)["\n  query AllCourses($courseTitle: String) {\n    allCourses(searchString: $courseTitle) {\n        title\n        id\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n"): (typeof documents)["\nquery QuestionFeed {\n  questionFeed {\n      id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery StuukeFeed {\n    stuukeFeed {\n        id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n    }\n}\n"): (typeof documents)["\nquery StuukeFeed {\n    stuukeFeed {\n        id\n      title\n      content\n      isDraft\n      createdAt\n      studentId\n      courseId\n      course {\n          title\n      }\n      tags {\n          title\n      }\n      student {\n          username\n          firstName\n          lastName\n      }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QuestionById($questionId: String) {\n    questionById(id: $questionId) {\n    id\n    title\n    content\n    createdAt\n    courseId\n    course {\n        title\n        description\n    }\n    tags {\n        id\n        title\n        description\n    }\n    student {\n        firstName\n        lastName\n        username\n    }\n    stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            title\n            description\n        }\n        tags {\n            id\n            title\n            description\n        }\n        student {\n            username\n            firstName\n            lastName\n        }\n    }\n}\n}\n"): (typeof documents)["\n  query QuestionById($questionId: String) {\n    questionById(id: $questionId) {\n    id\n    title\n    content\n    createdAt\n    courseId\n    course {\n        title\n        description\n    }\n    tags {\n        id\n        title\n        description\n    }\n    student {\n        firstName\n        lastName\n        username\n    }\n    stuukes {\n        id\n        title\n        content\n        createdAt\n        course {\n            title\n            description\n        }\n        tags {\n            id\n            title\n            description\n        }\n        student {\n            username\n            firstName\n            lastName\n        }\n    }\n}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TagsList($tagTitle: String) {\n      tagsList(searchString: $tagTitle) {\n          id\n          title\n      }\n  }\n"): (typeof documents)["\n  query TagsList($tagTitle: String) {\n      tagsList(searchString: $tagTitle) {\n          id\n          title\n      }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;