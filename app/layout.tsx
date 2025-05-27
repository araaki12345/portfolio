import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "諸岡成のポートフォリオ",
  description: "Next.jsで作成したポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="bg-black text-gray-100 font-jp gradient-bg min-h-screen">
        {/* ナビゲーションヘッダー */}
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

        {/* メインコンテンツ */}
        <main className="container mx-auto px-6 py-12 min-h-screen">
          {children}
        </main>

        {/* フッター */}
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 text-center py-8">
          <div className="container mx-auto px-6">
            <p className="text-sm">
              &copy; 2025 Akira Morooka. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
