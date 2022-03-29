import Image from "next/image"
import { useRouter } from "next/dist/client/router"
import router from "next/router"
import { Article } from "utils/variables"

type Props = {
  article: Article
}

export function ArticleCard({ article }: Props) {
  return (
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
        {/* <div className="flex items-center mt-4">
          <div className="grid-cols-4 gap-4"> */}
        <div className="sm:col-span-2">
          <div className="flex flex-wrap items-center space-x-3">
            <div className="flex flex-wrap items-center space-x-2">
              {article.tags.map((tag) => {
                return (
                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-react"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    {tag.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
