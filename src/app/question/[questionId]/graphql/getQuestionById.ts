import { gql } from "@/utils/types/__generated__/gql"

const getQuestionById = gql(/* GraphQL */`
  query QuestionById($questionId: String!) {
    questionById(id: $questionId) {
      id
      title
      content
      createdAt
      course {
          name
          description
      }
      tags {
          name
          description
      }
      student {
          firstName
          lastName
          username
      }
      stuukes {
        id
        title
        content
        createdAt
        course {
            name
            description
        }
        tags {
            name
            description
        }
        student {
            firstName
            lastName
            username
        }
        references {
            title
            url
        }
      }
    }
}`)

export { getQuestionById }