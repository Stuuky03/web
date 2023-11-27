import { graphql } from "@/utils/types/__generated__/gql"

const gqlCreateQuestion = graphql(/* GraphQL */`
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(data: $input) {
        id
        title
        content
        isDraft
        createdAt
        studentId
        courseId
    }
  }
`)

export { gqlCreateQuestion }