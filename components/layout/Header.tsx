import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200"
          >
            Akira Morooka
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group"
              >
                Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group"
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
