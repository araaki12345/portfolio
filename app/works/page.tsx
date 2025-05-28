import React from "react";

export default function Works() {
  const items = [
    {
      id: 1,
      title: "SU-CRAFT",
      type: "成果物",
      description: "大学生向けに構築したMinecraftマルチプレイサーバー",
      tech: ["Ubuntu Server 22.04", "Java", "bungeecord", "Paper"],
      status: "停止中",
    },
    {
      id: 2,
      title: "静大生認証Bot",
      type: "成果物",
      description: "SU-CRAFTのDiscordサーバーの認証Bot",
      tech: ["typescript", "discord.js", "node.js"],
      status: "停止中",
    },
    {
      id: 3,
      title: "ラズパイ水温系",
      type: "成果物",
      description: "ラズパイで水温を測定し、簡易的にWeb上で表示するシステム",
      tech: ["python", "flask", "html", "css", "javascript"],
      status: "停止中(稲の種蒔き期間の際に使用)",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="text-center mb-12">
        <div className="bg-blue-500 bg-clip-text text-transparent">
          <h1 className="text-4xl font-bold mb-4">成果物とレポート</h1>
        </div>
        <p className="text-xl text-gray-400">
          これまでに作成したレポートや成果物
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6"></div>
      </section>

      {/* 作品一覧 */}
      <section className="grid gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover-lift"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-300 text-lg mb-4">{item.description}</p>
              </div>

              <div className="text-right">
                <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  {item.type}
                </span>
              </div>
            </div>

            {/* 使用技術 */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                使用技術
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-md text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* アクションボタン（将来の詳細ページ用） */}
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>詳細を見る</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 空の状態メッセージ（追加の作品用） */}
      <section className="text-center py-12">
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-12 border border-gray-800">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            作品を準備中
          </h3>
          <p className="text-gray-500">
            新しいプロジェクトや成果物を随時追加予定です
          </p>
        </div>
      </section>
    </div>
  );
}
