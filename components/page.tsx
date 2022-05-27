import { ReactNode } from "react"
import Header from "components/header/header"
import Link from "next/link"
import PageTransition from "components/pagetransition"

type PageProps = {
  children: ReactNode
  backDrop: String
}

const Page = ({ backDrop, children }: PageProps): JSX.Element => (
  <div className="bg-slate-00">
    <Header />
    <main className="flex flex-col mx-auto max-w-6xl justify-center px-4 prose prose-lg md:prose-xl dark:prose-dark relative">
      {backDrop ? (
        <div className="absolute top-0 text-8xl md:text-9xl page-type">
          {backDrop}
        </div>
      ) : null}
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
