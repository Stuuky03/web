import { gql } from "@/utils/types/__generated__/gql";

const getAllQuestions = gql(/* GraphQL */ `
query QuestionFeed {
  questionFeed {
      id
      title
      content
      isDraft
      createdAt
      studentId
      courseId
      course {
          name
      }
      tags {
          name
      }
      student {
          username
          firstName
          lastName
      }
  }
}
`)

const getAllStuukes = gql(/* GraphQL */`
query QuestionById {
    stuukeFeed {
        id
      title
      content
      isDraft
      createdAt
      studentId
      courseId
      course {
          name
      }
      tags {
          name
      }
      student {
          username
          firstName
          lastName
      }
    }
}
`)

export { getAllQuestions }