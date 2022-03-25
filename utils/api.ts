import { Client } from "@notionhq/client"
import { generateProjectVariable, generateArticleVariable } from "utils/jobs"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  return response.results
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId) => {
  const blocks = []
  let cursor
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}

export const getNotionData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // Sort posts in descending order based on the Date column.
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  })

  return response.results
}

export const getPublishedArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Article",
          },
        },
        {
          property: "Public",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  })

  var results = response.results

  var articles = results.map((result: any) => {
    return generateArticleVariable(result)
  })

  return { articles }
}
