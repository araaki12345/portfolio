import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // 欧文フォント
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
}); // 日本語フォント

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
      {" "}
      {/* htmlタグにフォント変数を適用 */}
      <body className="bg-gray-100 text-gray-800 font-jp">
        {" "}
        {/* font-jp を基本フォントに (後述) */}{" "}
        {/* 背景色、基本文字色、フォントを設定 */}
        <header className="bg-white shadow-md">
          {" "}
          {/* 背景白、影をつけて立体感を出す */}
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            {" "}
            {/* コンテンツ幅制限、左右余白、高さ、要素の配置 */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-gray-600"
            >
              Akira Morooka
            </Link>
            <ul className="flex space-x-4">
              {" "}
              {/* li間のスペース */}
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-6 min-h-screen">
          {" "}
          {/* コンテンツ幅制限、上下左右余白、最小の高さを画面いっぱいにする */}
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          {" "}
          {/* フッターの背景色、文字色、中央揃え、余白、上マージン */}
          <p>&copy; 2025 Akira Morooka</p>
        </footer>
      </body>
    </html>
  );
}
