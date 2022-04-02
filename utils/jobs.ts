import { Article, Project } from "utils/variables"

export const generateArticleVariable = (inputData: any) => {
  let tags: string[] = []
  console.log(Object.keys(inputData.properties))
  return {
    title: inputData.properties.Name.title[0].plain_text,
    tags: inputData.properties.Tags.multi_select.map((tag) => {
      if (!tags.includes(tag.name)) {
        const newList = [...tags, tag.name]
        tags = newList
      }
      return { name: tag.name, id: tag.id }
    }),
    slug: inputData.properties?.Slug.rich_text[0]?.plain_text,
    summary: inputData.properties?.Summary?.rich_text[0]?.plain_text ?? "",
    public: inputData.properties.Public.checkbox,
    coverImage: inputData.properties["Cover Image"].url,
    publishedDate: new Date(inputData.created_time).toLocaleString("en-GB", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    lastUpdatedDate: new Date(inputData.last_edited_time).toLocaleString(
      "en-GB",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    ),
  }
}

export const generateProjectVariable = async (inputData) => {
  let tags: string[] = []
  return {
    title: inputData.properties.Name.title,
    tags: inputData.properties.tags.multi_select.map((tag) => {
      if (!tags.includes(tag.name)) {
        const newList = [...tags, tag.name]
        tags = newList
      }
      return { name: tag.name, id: tag.id }
    }),
    coverImage: inputData.properties.coverImage.url,
    summary: inputData.properties.Summary.rich_text[0].plain_text,
    public: inputData.properties.Public.checkbox,
    created_date: new Date(inputData.created_time).toLocaleString("en-GB", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    last_updated_date: new Date(inputData.last_edited_time).toLocaleString(
      "en-GB",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    ),
  }
}
