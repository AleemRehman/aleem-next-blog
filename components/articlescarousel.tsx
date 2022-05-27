import { ArticleCard } from "components/articlecard"
import { Article } from "utils/variables"

type Props = {
  articles: Article[]
  showTags: boolean
}

export function ArticleList({ showTags, articles }) {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard
          showTags={showTags}
          key={article.title}
          article={article}
        />
      ))}
    </div>
  )
}
