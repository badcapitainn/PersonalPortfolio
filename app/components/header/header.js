import Link from "next/link"
export default function Header() {
  return (
    <div>
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <nav className="flex items-center space-x-4">
            <Link className="font-bold" href="/">
              Home
            </Link>
            <Link className="font-medium" href="/blog">
              Blog
            </Link>
            <Link className="font-medium" href="/about">
              About
            </Link>
            <Link className="font-medium" href="/projects">
              Projects
            </Link>
            <Link className="font-medium" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700"
              href="#"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/image1.jpg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span className="sr-only">Toggle navigation menu</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
