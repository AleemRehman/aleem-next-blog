import Head from "next/head"
import Link from "next/link"
import { getDatabase } from "utils/api"
import Page from "components/page"
import { Text } from "components/pagerender/pagerender"
import styles from "pages/index.module.scss"

export const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID

export default function Home({ posts }) {
  return (
    <div>
      {/* <Head>
        <title>Aleem's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Page>
        <h2 className={styles.heading}>Featured Projects</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            if (!post.properties.Slug) {
              return (
                <li key={post.id} className={styles.post}>
                  <h4>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                    <span>This doesn't have a slug, add one now!</span>
                  </h4>
                </li>
              )
            }
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            )
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link
                    href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                  >
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link
                  href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                >
                  <a> Read post →</a>
                </Link>
              </li>
            )
          })}
        </ol>
      </Page>
    </div>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}
