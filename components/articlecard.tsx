import Image from "next/image"
import { useRouter } from "next/dist/client/router"
import router from "next/router"
import { Article } from "utils/variables"

type Props = {
  article: Article
  showTags: boolean
}

function handleArticleClick(slug, router) {
  router.push(`/writings/${slug}`)
}

export function ArticleCard({ showTags, article }: Props) {
  const router = useRouter()
  return (
    <div
      // onClick={() => handleArticleClick(article.slug, router)}
      key={article.title}
    >
      <div>
        <div className="article-card">
          <button onClick={() => handleArticleClick(article.slug, router)}>
            <Image
              className="group-hover:opacity-75"
              objectFit="cover"
              src={article.coverImage}
              placeholder="blur"
              blurDataURL={article.coverImage}
              width={600}
              height={700}
              layout="intrinsic"
              alt={"article cover"}
            />
          </button>
          <div className="text-left">
            <h1 className="text-3xl">{article.title}</h1>
            <div className="mb-2">
              <p>{article.summary}</p>
            </div>
          </div>

          {showTags ? (
            <div className="sm:col-span-2">
              <div className="flex flex-wrap space-y-3">
                <div className="flex flex-wrap">
                  {article.tags.map((tag) => {
                    return (
                      <span
                        className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-semibold mr-2 mb-2 px-2 py-1 
                         tag-colour
                         
                        text-gray-100"
                      >
                        {tag.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <button onClick={() => handleArticleClick(article.slug, router)}>
              <span className="read-more">read &gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
