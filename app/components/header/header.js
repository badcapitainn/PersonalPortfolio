import Link from "next/link"
export default function Header() {
  return (
    <div>
  <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:border-gray-800">
    <div className="container flex items-center justify-between h-16 px-4 mx-auto">
      <nav className="flex items-center space-x-2">
      
        <Link className="font-bold" href="/">
          badcapitainn.
        </Link>
      </nav>
      <nav className="flex items-center justify-center flex-grow space-x-4">
        <Link className="font-medium" href="/blog">
          blog.
        </Link>
        <Link className="font-medium" href="/about">
          about.
        </Link>
        <Link className="font-medium" href="/projects">
          projects.
        </Link>
        <Link className="font-medium" href="/contact">
          contact.
        </Link>
      </nav>
      
    </div>
  </header>
</div>

  );
}
