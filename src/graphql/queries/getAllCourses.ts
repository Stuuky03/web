import { graphql } from "@/utils/types/__generated__/gql";

const gqlGetAllCourses = graphql(/* GraphQL */`
  query AllCourses($courseTitle: String) {
    allCourses(searchString: $courseTitle) {
        title
        id
    }
}
`)

export { gqlGetAllCourses }