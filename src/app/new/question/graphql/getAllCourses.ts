import { graphql } from "@/utils/types/__generated__/gql";

const gqlGetAllCourses = graphql(/* GraphQL */`
  query AllCourses {
    allCourses {
        title
        id
    }
}
`)

export { gqlGetAllCourses }