import { graphql } from "@/utils/types/__generated__";

const gqlGetTagList = graphql(/* GraphQL */ `
  query TagsList($tagTitle: String) {
      tagsList(searchString: $tagTitle) {
          title
      }
  }
`)

export default gqlGetTagList