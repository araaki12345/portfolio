import { worksData } from "@/config/works";
import Badge from "@/components/common/Badge";

const getStatusColor = (status: string | undefined) => {
  if (status && (status.includes("停止中") || status === "完了")) {
    return "text-red-600 dark:text-red-400";
  } else if (status) {
    return "text-green-600 dark:text-green-400";
  }
  return "text-gray-600 dark:text-gray-400";
};

const getBadgeVariant = (type: string) => {
  if (type === "成果物") return "blue";
  if (type === "CTF参加") return "purple";
  return "orange";
};

export default function Works() {

  return (
    <div className="max-w-5xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">成果物と実績</h1>
        <p className="text-gray-600 dark:text-gray-400">
          これまでに作成した成果物や各種イベントにおける実績をまとめています
        </p>
      </section>

      {/* 作品一覧 */}
      <section className="space-y-6">
        {worksData.map((item) => {
          return (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant={getBadgeVariant(item.type)}>
                      {item.type}
                    </Badge>

                    {/* 成果物の場合、ステータス表示 */}
                    {item.type === "成果物" && (
                      <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    )}

                    {/* CTF参加の場合、順位情報を表示 */}
                    {item.type === "CTF参加" && (
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.rank}/{item.totalTeams}チーム ({item.percentage})
                      </span>
                    )}

                    {/* ハッカソン参加の場合、受賞情報を表示 */}
                    {item.type === "ハッカソン参加" && item.award && (
                      <Badge variant="green">
                        🏆 {item.award}
                      </Badge>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {item.description}
                  </p>

                  {/* CTF参加またはハッカソン参加の場合、参加時期を表示 */}
                  {(item.type === "CTF参加" || item.type === "ハッカソン参加") && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.type === "CTF参加" ? "参加時期" : "開催時期"}: {item.date}
                    </p>
                  )}
                </div>
              </div>

              {/* 使用技術 */}
              {item.tech && item.tech.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase">
                    {item.type === "CTF参加" ? "カテゴリ" : "使用技術"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* アクションボタン */}
              {item.link && (
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    詳細を見る
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
