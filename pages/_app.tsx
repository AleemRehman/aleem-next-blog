// import "styles/globals.css"
import "styles/globals.css"
import Head from "next/head"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import SEO from "components/seo"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  return (
    <ThemeProvider defaultTheme="system">
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
