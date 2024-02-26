/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7QSiginLNbo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <nav className="flex items-center space-x-4">
            <Link className="font-bold" href="#">
              Home
            </Link>
            <Link className="font-medium" href="#">
              Blog
            </Link>
            <Link className="font-medium" href="#">
              About
            </Link>
            <Link className="font-medium" href="#">
              Projects
            </Link>
            <Link className="font-medium" href="#">
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
                src="/placeholder.svg"
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
      <main className="flex-1 py-6">
        <div className="container px-4 py-6 mx-auto space-y-6 text-xl leading-loose text-gray-900 dark:text-gray-50">
          <div className="prose lg:prose-xl max-w-[900px] mx-auto">
            <h1 className="font-bold text-4xl md:text-6xl">Welcome to my Portfolio</h1>
            <p className="text-gray-500 dark:text-gray-500">My journey as a developer</p>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-500">© 2023 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center space-x-4">
            <Link className="font-medium" href="#">
              Terms & Conditions
            </Link>
            <Link className="font-medium" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

