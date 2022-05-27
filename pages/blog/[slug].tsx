import { Fragment } from "react"
import Head from "next/head"
import {
  getPage,
  getBlocks,
  getNotionData,
  getRecommendedArticles,
} from "utils/api"
import { ArticleList } from "components/articlescarousel"
import { Button } from "components/button/button"
import { useRouter } from "next/router"
import { databaseId } from "../index"
import Image from "next/image"
import Page from "components/page"
import styles from "components/pagerender/pagerender.module.scss"
import { Text, renderBlock } from "components/pagerender/pagerender"

export default function Post({ page, blocks, recommendedArticles }) {
  if (!page || !blocks) {
    return <div />
  }
  const { push } = useRouter()
  return (
    <Page>
      <div>
        <Head>
          <title>{page.properties.Name.title[0].plain_text}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <article className={styles.container}>
          <div className="mb-10">
            <h1 className={styles.name}>
              <Text text={page.properties.Name.title} />
            </h1>
            <div className={styles.date}>
              <span>{page.properties.Date.date.start}</span>
            </div>
          </div>

          <div className="mb-4">
            <Image
              className="rounded-xl"
              objectFit="cover"
              src={page.cover?.external.url}
              placeholder="blur"
              blurDataURL={page.cover?.external.url}
              width={684}
              height={400}
              layout="intrinsic"
              alt={"article cover"}
            />
          </div>
          <section>
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <div className="mt-6 md:mt-8 mb-8">
              <div className="space-y-6 md:space-y-0 md:space-x-4">
                <Button
                  buttonType="secondary"
                  onButtonClick={() => push("/blog")}
                  buttonSize="small"
                >
                  Back to the blog
                </Button>
              </div>
            </div>
            <div>
              <ArticleList articles={recommendedArticles} />
            </div>
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

  let tags: string[] = []

  page.properties.Tags.multi_select.map((tag) => {
    if (!tags.includes(tag.name)) {
      const newList = [...tags, tag.name]
      tags = newList
    }
    return { name: tag.name, id: tag.id }
  })

  const { articles } = await getRecommendedArticles(databaseId, tags)

  console.log(articles)
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
      recommendedArticles: articles,
    },
    revalidate: 1,
  }
}
