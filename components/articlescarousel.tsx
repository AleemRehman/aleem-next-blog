import { ArticleCard } from "components/articlecard"
import { Article } from "utils/variables"

type Props = {
  articles: Article[]
  showTags: boolean
  masonry: boolean
}

export function ArticleList({ showTags, articles, masonry }) {
  return (
    <div
      className={
        masonry
          ? "masonry-2-col md:masonry-3-col"
          : "list-none grid grid-cols-1 md:grid-cols-3 gap-8"
      }
    >
      {articles.map((article) => (
        <ArticleCard
          showTags={showTags}
          key={article.title}
          article={article}
          masonryCard={masonry}
        />
      ))}
    </div>
  )
}
