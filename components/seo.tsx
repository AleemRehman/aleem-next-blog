import { DefaultSeo } from "next-seo"

const config = {
  title: "Aleem Rehman - Engineer & Mentor",
  description:
    "I’m an Engineer and Architect that loves building effective products and writing about all the associated technologies!",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aleemrehman.co",
    site_name: "Aleem Rehman",
    // images: [
    //   {
    //     url: "test",
    //     alt: "Aleem Rehman",
    //   },
    // ],
  },
  twitter: {
    handle: "@almrhmn",
    site: "@almrhmn",
    cardType: "summary_large_image",
  },
}

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />
}

export default SEO
