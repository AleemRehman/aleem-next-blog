import Link from "next/link"
import { useRouter } from "next/router"
import styles from "components/header/header.module.scss"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/Projects" },
  { name: "Reviews", path: "/Reviews" },
]

const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split("/[")[0] // active paths on dynamic

  return (
    <>
      <div className={styles.navheader}>
        <nav className="nav-container py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                {links.map(({ name, path }) => (
                  <Link key={path} href={path}>
                    <a
                      className={
                        pathname === path
                          ? styles.linkIsActive + " sm:px-6"
                          : styles.link + " sm:px-6"
                      }
                    >
                      {name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className={styles.spacer} /> */}
    </>
  )
}

export default Header
