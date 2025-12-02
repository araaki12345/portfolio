import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Akira Morooka
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
