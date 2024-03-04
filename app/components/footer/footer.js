import Link from "next/link"
export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2023 Acme Inc. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            <p>madzambaprince111@gmail.com</p>
          </nav>
        </div>
      </footer>
    </div>
  );
}
