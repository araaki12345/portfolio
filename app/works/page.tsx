import React from "react";

export default function Works() {
  const items = [
    {
      id: 1,
      title: "SU-CRAFT",
      type: "成果物",
      description: "静大生向けに構築したMinecraftマルチプレイサーバー",
      tech: ["Ubuntu Server 22.04", "Java", "bungeecord", "Paper"],
      status: "停止中",
      link: "https://x.com/craft_su185",
    },
    {
      id: 2,
      title: "認証Bot",
      type: "成果物",
      description: "SU-CRAFTのDiscordサーバーの認証Bot",
      tech: ["typescript", "discord.js", "node.js"],
      status: "停止中",
      link: "https://github.com/araaki12345/SUMinecraft-discord",
    },
    {
      id: 3,
      title: "ラズパイ水温系",
      type: "成果物",
      description: "ラズパイで水温を測定し、簡易的にWeb上で表示するシステム",
      tech: ["python", "flask", "html", "css", "javascript"],
      status: "停止中(稲の種蒔き期間の際に使用)",
    },
    {
      id: 4,
      title: "Thank you 天竜",
      type: "成果物",
      description:
        "オープンデータを活用したアイデアソンである「チャレンジ！！オープンガバナンス 2024」にて発表したWebサイト",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      status: "公開中(データベースやChatGPTのAPIは停止しています)",
      link: "https://cog2024hamamatsu.vercel.app",
    },
    // CTF結果を追加
    {
      id: 5,
      title: "DIVERS OSINT CTF 2025",
      type: "CTF参加",
      description: "OSINTをメインとしたCTF大会に参加し、前年よりも高い成績を収めることが出来ました",
      tech: ["OSINT"],
      rank: "16位",
      totalTeams: 668,
      percentage: "2.5%",
      date: "2025年6月",
      link: "https://ctftime.org/event/2751/",
    },
    {
      id: 6,
      title: "San Diego CTF 2025",
      type: "CTF参加",
      description: "一般CTFのOSINT問題を解きました",
      tech: ["OSINT"],
      rank: "24位",
      totalTeams: 269,
      percentage: "8.9%",
      date: "2025年5月",
      link: "https://ctftime.org/event/2785/",
    },
    {
      id: 7,
      title: "Crate-CTF 2024",
      type: "CTF参加",
      description:
        "一般CTFのOSINT分野の問題を解き、全問完答しました。",
      tech: ["OSINT"],
      rank: "13位",
      totalTeams: 227,
      percentage: "5.7%",
      date: "2024年11月",
      link: "https://ctftime.org/event/2489/",
    },
    {
      id: 8,
      title: "DIVERS OSINT CTF 2024",
      type: "CTF参加",
      description:
        "初めてCTFに出場しました",
      tech: ["OSINT"],
      rank: "26位",
      totalTeams: 453,
      percentage: "5.7%",
      date: "2024年6月",
      link: "https://ctftime.org/event/2365/",
    },
  ];

  const getStatusColor = (status: string | undefined) => {
    if (status && (status.includes("停止中") || status === "完了")) {
      return {
        bg: "bg-red-500",
        bgLight: "bg-red-500/10",
        text: "text-red-400",
      };
    } else if (status) {
      return {
        bg: "bg-green-500",
        bgLight: "bg-green-500/10",
        text: "text-green-400",
      };
    }
    return null;
  };

  const getTypeColor = (type: string) => {
    if (type === "CTF参加") {
      return {
        bg: "bg-purple-600/20",
        text: "text-purple-300",
      };
    } else {
      return {
        bg: "bg-blue-600/20",
        text: "text-blue-300",
      };
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="text-center mb-12">
        <div className="bg-blue-500 bg-clip-text text-transparent">
          <h1 className="text-4xl font-bold mb-4">成果物と実績</h1>
        </div>
        <p className="text-xl text-gray-400">
          これまでに作成した成果物や各種イベントにおける実績をまとめています
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6"></div>
      </section>

      {/* 作品一覧 */}
      <section className="grid gap-8">
        {items.map((item) => {
          const typeColor = getTypeColor(item.type);

          return (
            <div
              key={item.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    {/* CTF参加以外の場合のみステータス表示 */}
                    {item.type !== "CTF参加" && (
                      <>
                        <span
                          className={`inline-block w-3 h-3 ${
                            getStatusColor(item.status)?.bg
                          } rounded-full mr-3`}
                        ></span>
                        <span
                          className={`text-sm ${
                            getStatusColor(item.status)?.text
                          } font-medium ${
                            getStatusColor(item.status)?.bgLight
                          } px-2 py-1 rounded-full`}
                        >
                          {item.status}
                        </span>
                      </>
                    )}
                    {/* CTF結果の場合、順位情報を表示 */}
                    {item.type === "CTF参加" && (
                      <span className="text-sm bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full font-medium">
                        {item.rank}/{item.totalTeams}チーム ({item.percentage})
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-300 text-lg mb-4">
                    {item.description}
                  </p>

                  {/* CTF参加の場合、参加時期を表示 */}
                  {item.type === "CTF参加" && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">
                        参加時期:{" "}
                        <span className="text-white">{item.date}</span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <span
                    className={`inline-block ${typeColor.bg} ${typeColor.text} px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>

              {/* 使用技術 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  {item.type === "CTF参加" ? "カテゴリ" : "使用技術"}
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

              {/* アクションボタン */}
              <div className="flex space-x-4">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {"詳細"}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
