import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
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
  let [isOpen, setIsOpen] = useState(false)
  const pathname = router.pathname.split("/[")[0] // active paths on dynamic

  return (
    <>
      <div className="relative z-50 text-gray-900 dark:text-gray-100">
        <div className="nav-container py-2 md:py-4">
          <div className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10">
            <div className="flex justify-start lg:flex-1 md:mr-40 lg:mr-86">
              <span className="">
                <Image
                  alt="Aleem Rehman"
                  height={70}
                  width={70}
                  src="https://res.cloudinary.com/dqgb6xtqy/image/upload/v1647442504/logo_cb65kg.png"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/dqgb6xtqy/image/upload/v1647442504/logo_cb65kg.png"
                  className="rounded-full"
                />
              </span>
            </div>

            <div
              className="-my-2 -mr-2 md:hidden justify-end"
              onClick={() => setIsOpen(true)}
            >
              <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
                <span className="sr-only">Open menu</span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 5.75H19.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 18.25H19.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 12H19.25"
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              {links.map(({ name, path }) => (
                <Link key={path} href={path}>
                  <a
                    className={
                      pathname === path
                        ? styles.linkIsActive + " sm:px-6"
                        : styles.inActiveLink + " sm:px-6"
                    }
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
