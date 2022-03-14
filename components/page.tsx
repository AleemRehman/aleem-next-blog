import { ReactNode } from "react"
import Header from "components/header/header"
import Link from "next/link"
import PageTransition from "components/pagetransition"

type PageProps = {
  children: ReactNode
}

const Page = ({ children }: PageProps): JSX.Element => (
  <div className="">
    <Header />
    <main className="">
      <PageTransition>{children}</PageTransition>
    </main>
    {/* <footer className={styles.footer}>
      <ul className={styles.links}>
        {footerLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <NowPlaying />
      <p className={styles.copyright}>
        &copy; Samuel Kraft {new Date().getFullYear()}
      </p>
    </footer> */}
  </div>
)

export default Page
