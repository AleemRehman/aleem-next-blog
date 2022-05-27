const path = require("path")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "variables.scss";`,
  },
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com", // Images coming from Notion
      "via.placeholder.com", // for articles that do not have a cover image
      "images.unsplash.com", // For blog posts that use an external cover ima ge
      "pbs.twimg.com", // Twitter Profile Picture
      "res.cloudinary.com",
      "www.notion.so",
    ],
  },
}
