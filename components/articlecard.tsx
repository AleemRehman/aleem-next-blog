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
    <button
      onClick={() => handleArticleClick(article.slug, router)}
      key={article.title}
    >
      <div>
        <div className="article-card">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src={article.coverImage}
            placeholder="blur"
            blurDataURL={article.coverImage}
            width={684}
            height={800}
            layout="intrinsic"
            alt={"article cover"}
          />
          <h1>{article.title}</h1>
          <div className="mb-2">
            <p>{article.summary}</p>
          </div>
          {showTags ? (
            <div className="sm:col-span-2">
              <div className="flex flex-wrap space-y-3">
                <div className="flex flex-wrap">
                  {article.tags.map((tag) => {
                    return (
                      <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-semibold text-skin-inverted rounded-full border border-skin-input mr-2 mb-2">
                        #{tag.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </button>
  )
}
