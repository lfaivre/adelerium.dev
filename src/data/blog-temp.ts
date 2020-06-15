import { v4 as uuidv4 } from "uuid"

export interface BlogPostAttributes {
  id: string
  title: string
  subtitle: string
  body: string
}

const BlogPostsDataArray: Array<BlogPostAttributes> = [
  {
    id: uuidv4(),
    title: "Currently under construction.",
    subtitle: "Expected July 2020",
    body: "",
  },
]

interface BlogPostsDataAttributes {
  posts: Array<BlogPostAttributes>
  count(): number
}

export const BlogPostsData: BlogPostsDataAttributes = {
  posts: BlogPostsDataArray,
  count: () => BlogPostsDataArray.length,
}
