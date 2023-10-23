import { graphql } from "@/utils/types/__generated__/gql";

const getAllQuestions = graphql(/* GraphQL */ `
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
          title
      }
      tags {
          title
      }
      student {
          username
          firstName
          lastName
      }
  }
}
`)

const getAllStuukes = graphql(/* GraphQL */`
query StuukeFeed {
    stuukeFeed {
        id
      title
      content
      isDraft
      createdAt
      studentId
      courseId
      course {
          title
      }
      tags {
          title
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