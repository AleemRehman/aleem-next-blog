export type Article = {
  title: string
  tags?: []
  slug: string
  coverImage: string
  summary: string
  publishedDate?: any
  lastUpdatedDate?: any
}

export type Project = {
  title: string
  tags?: string[]
  slug: string
  coverImage: string
  summary: string
  description: string
  publishedDate?: any
  lastUpdatedDate?: any
}
