import { graphql } from "@/utils/types/__generated__/gql"

const gqlGetQuestionById = graphql(/* GraphQL */`
  query QuestionById($questionId: String) {
    questionById(id: $questionId) {
    id
    title
    content
    createdAt
    courseId
    course {
        title
        description
    }
    tags {
        id
        title
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
            title
            description
        }
        tags {
            id
            title
            description
        }
        student {
            username
            firstName
            lastName
        }
    }
}
}
`)

export { gqlGetQuestionById }