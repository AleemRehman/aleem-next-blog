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
      <h1>{article.title}</h1>
    </div>
  )
}
