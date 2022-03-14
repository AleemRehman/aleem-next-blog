import Link from "next/link"
import { useRouter } from "next/router"
import styles from "components/header/header.module.css"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/Projects" },
  { name: "Reviews", path: "/Reviews" },
]

const link =
  "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"

const linkActive =
  "p-2 lg:px-4 md:mx-2 text-blue-600 rounded hover:bg-blue-200 hover:text-gray-700 transition-colors duration-300"

const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split("/[")[0] // active paths on dynamic
  console.log(pathname)
  return (
    <>
      <div className={styles.navheader}>
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                {links.map(({ name, path }) => (
                  <Link key={path} href={path}>
                    <a className={pathname === path ? linkActive : link}>
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
