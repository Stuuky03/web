import { graphql } from "@/utils/types/__generated__/gql"

const gqlCreateStuuke = graphql(/* GraphQL */`
mutation CreateStuuke($input: CreateStuukeInput!) {
  createStuuke(data: $input) {
      id
      title
      content
      isDraft
      createdAt
      studentId
      questionId
      courseId
  }
}
`)

export { gqlCreateStuuke }