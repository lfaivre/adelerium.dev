export interface BlogPost {
  id: string
  title: string
  subtitle: string
  body: string
}

export interface BlogData {
  posts: Array<BlogPost>
  count: () => number
}
