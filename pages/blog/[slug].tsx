import { Fragment } from "react"
import Head from "next/head"
import { getPage, getBlocks, getNotionData } from "utils/api"
import Link from "next/link"
import { databaseId } from "../index"
import Page from "components/page"
import styles from "components/pagerender/pagerender.module.scss"
import { Text, renderBlock } from "components/pagerender/pagerender"

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />
  }
  return (
    <Page>
      <div>
        <Head>
          <title>{page.properties.Name.title[0].plain_text}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <article className={styles.container}>
          <h1 className={styles.name}>
            <Text text={page.properties.Name.title} />
          </h1>
          <section>
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href="/">
              <a className={styles.back}>← Go home</a>
            </Link>
          </section>
        </article>
      </div>
    </Page>
  )
}

export const getStaticPaths = async () => {
  const database = await getNotionData(databaseId)
  return {
    paths: database.map((page) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params

  const database = await getNotionData(databaseId)
  const filter = database.filter(
    (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
  )
  const page = await getPage(filter[0].id)
  const blocks = await getBlocks(filter[0].id)

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        }
      })
  )
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children
    }
    return block
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  }
}
