import Typed from "typed.js"
import { GetStaticProps } from "next"
import Page from "components/page"
import { Button } from "components/button/button"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import styles from "pages/index.module.scss"
import { getPublishedArticles } from "utils/api"
import { ArticleList } from "components/articlescarousel"

export const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID

export default function Home({ recentArticles }) {
  const { push } = useRouter()

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My name is Aleem. I am an Architect, Engineer and Blogger."],

      startDelay: 10,
      typeSpeed: 70,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <Page>
        <div className="z-10">
          <div>
            <div>
              <div
                className={
                  "grid items-center grid-cols-1 mt-12 text-center md:mt-20 mb-4 md:mb-8 md:text-left md:grid-cols-6 " +
                  styles.header_grid
                }
              >
                <h1 className={styles.terminal_text}>
                  &gt; <span ref={el}></span>
                </h1>
              </div>
              <div className="">
                <div className="space-y-6 md:space-y-0 md:space-x-4">
                  <Button
                    buttonType="primary"
                    onButtonClick={() => push("/blog")}
                    buttonSize="medium"
                  >
                    Read my Articles
                  </Button>
                  <Button
                    buttonType="secondary"
                    onButtonClick={() => push("/blog")}
                    buttonSize="medium"
                  >
                    Check out my Projects
                  </Button>
                </div>
              </div>
            </div>
            <hr className={styles.index_divider} />
            <div>
              <h2 className="mb-4 font-semibold text-4xl">
                I like to give my two cents about tech and life ✍🏾
              </h2>
              <h5 className="mb-8 font-semibold text-lg">
                Check out some recent writings below.
              </h5>
              <ArticleList articles={recentArticles} />
            </div>
          </div>
        </div>
      </Page>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { articles } = await getPublishedArticles(databaseId)

  return {
    props: {
      recentArticles: articles,
    },
    revalidate: 30,
  }
}
