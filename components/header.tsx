// import "styles/globals.css"
import Link from "next/link"
// import ThemeChanger from "components/themechanger"
import { useRouter } from "next/router"
import Image from "next/image"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/Projects" },
  { name: "Reviews", path: "/Reviews" },
]

const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split("/[")[0] // active paths on dynamic subpages
  return (
    <>
      <div className="header-2">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                {links.map(({ name, path }) => (
                  <Link key={path} href={path}>
                    <a className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
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
