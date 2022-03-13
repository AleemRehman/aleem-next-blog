// Utils file to create cool slugs
// Built in house to remove reliance on external dependencies

export const Slug = ({ title }) => {
  //take the title and create a cool SEO slug from it
  if (!title || typeof title != "string") {
    return null
  }

  var title = title.toLowerCase()
  var split_title = title.split(" ")
  var slug = split_title.join("-")
  return slug
}
