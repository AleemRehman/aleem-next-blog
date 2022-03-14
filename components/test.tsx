;<header className="relative z-50 text-gray-900 dark:text-gray-100">
  <div className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10">
    {/* <Link href="/"></Link> */}
    <nav className="hidden space-x-6 text-lg md:flex">
      <ol className="font-bold text-xl text-indigo-600">
        {links.map(({ name, path }) => (
          <li
            key={path}
            className={
              pathname === path
                ? "font-bold text-xl text-red"
                : "font-bold text-xl text-indigo-600"
            }
          >
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </div>
</header>
