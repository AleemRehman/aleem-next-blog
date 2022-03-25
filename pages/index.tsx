import Typed from "typed.js"
import { GetStaticProps } from "next"
import Page from "components/page"
import { Button } from "components/button/button"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import styles from "pages/index.module.scss"
import { getPublishedArticles } from "utils/api"

export const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID

export default function Home({ recentArticles }) {
  const { push } = useRouter()

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My name is Aleem. I am an Architect, Engineer and Blogger."],

      startDelay: 50,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <Page>
        <div className="z-10">
          <div className="splash-header">
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
                  >
                    Read my Articles
                  </Button>
                  <Button
                    buttonType="secondary"
                    onButtonClick={() => push("/blog")}
                  >
                    Check out my Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(databaseId)
  console.log(data)
  return {
    props: {
      recentArticles: data,
    },
    revalidate: 30,
  }
}
