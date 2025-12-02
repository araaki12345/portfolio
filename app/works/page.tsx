import React from "react";
import { worksData } from "@/data/works";
import Badge from "@/components/common/Badge";

export default function Works() {
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
        {worksData.map((item) => {
          return (
            <article
              key={item.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    {/* 成果物の場合、ステータス表示 */}
                    {item.type === "成果物" && (
                      <>
                        <span
                          className={`inline-block w-3 h-3 ${
                            getStatusColor(item.status)?.bg
                          } rounded-full mr-3`}
                          aria-hidden="true"
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
                    {/* CTF参加の場合、順位情報を表示 */}
                    {item.type === "CTF参加" && (
                      <Badge variant="yellow" className="font-medium">
                        {item.rank}/{item.totalTeams}チーム ({item.percentage})
                      </Badge>
                    )}
                    {/* ハッカソン参加の場合、受賞情報を表示 */}
                    {item.type === "ハッカソン参加" && item.award && (
                      <Badge variant="green" className="font-medium">
                        🏆 {item.award}
                      </Badge>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-300 text-lg mb-4">
                    {item.description}
                  </p>

                  {/* CTF参加またはハッカソン参加の場合、参加時期を表示 */}
                  {(item.type === "CTF参加" || item.type === "ハッカソン参加") && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">
                        {item.type === "CTF参加" ? "参加時期" : "開催時期"}:{" "}
                        <span className="text-white">{item.date}</span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <Badge variant={
                    item.type === "成果物" ? "blue" :
                    item.type === "CTF参加" ? "purple" : "orange"
                  } className="px-4 py-2 font-medium">
                    {item.type}
                  </Badge>
                </div>
              </div>

              {/* 使用技術 */}
              {item.tech && item.tech.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    {item.type === "CTF参加" ? "カテゴリ" : "使用技術"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, index) => (
                      <Badge key={index} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

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
                      aria-label="外部リンクアイコン"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>詳細</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
