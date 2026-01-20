import { worksData } from "@/config/works";
import Badge from "@/components/common/Badge";
import ArrowLink from "@/components/common/ArrowLink";

const getBadgeVariant = (type: string) => {
  if (type === "成果物") return "emerald";
  if (type === "CTF参加") return "violet";
  return "orange";
};

const getStatusBadgeVariant = (status: string | undefined) => {
  if (status?.includes("停止中") || status === "完了") return "gray";
  if (status?.includes("公開中")) return "emerald";
  return "sky";
};

export default function Works() {
  // タイプ別にグループ化
  const ctfWorks = worksData.filter((w) => w.type === "CTF参加");
  const hackathonWorks = worksData.filter((w) => w.type === "ハッカソン参加");
  const productWorks = worksData.filter((w) => w.type === "成果物");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="animate-fade-in-up text-center mb-12 pt-8">
        <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-3">
          Works & Achievements
        </h1>
        <p className="text-[hsl(var(--muted-foreground))]">
          成果物や各種イベントでの実績
        </p>
      </section>

      <div className="animate-fade-in-up animation-delay-100 space-y-12">
        {/* CTF Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">CTF</h2>
          </div>
          <div className="flex-1">
            <ul className="space-y-0">
              {ctfWorks.map((item, index) => (
                <li
                  key={item.id}
                  className="timeline-item pb-6"
                >
                  <div className="flex items-start gap-4">
                    <time className="text-sm font-mono text-[hsl(var(--muted-foreground))] min-w-[80px] pt-0.5">
                      {item.date}
                    </time>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">
                          {item.title}
                        </h3>
                        <Badge variant="violet" size="sm">
                          {item.rank}/{item.totalTeams}チーム
                        </Badge>
                        <span className="text-xs text-[hsl(var(--muted-foreground))]">
                          ({item.percentage})
                        </span>
                      </div>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech?.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {item.link && (
                        <div className="mt-3">
                          <ArrowLink href={item.link} external>
                            詳細を見る
                          </ArrowLink>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hackathon Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">Hackathon</h2>
          </div>
          <div className="flex-1">
            <ul className="space-y-0">
              {hackathonWorks.map((item) => (
                <li
                  key={item.id}
                  className="timeline-item pb-6"
                >
                  <div className="flex items-start gap-4">
                    <time className="text-sm font-mono text-[hsl(var(--muted-foreground))] min-w-[80px] pt-0.5">
                      {item.date}
                    </time>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">
                          {item.title}
                        </h3>
                        {item.award && (
                          <Badge variant="green" size="sm">
                            🏆 {item.award}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                        {item.description}
                      </p>
                      {item.tech && item.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tech.map((tech) => (
                            <Badge key={tech} variant="default" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {item.link && (
                        <div className="mt-3">
                          <ArrowLink href={item.link} external>
                            詳細を見る
                          </ArrowLink>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Products Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">Products</h2>
          </div>
          <div className="flex-1">
            <div className="space-y-4">
              {productWorks.map((item) => (
                <article
                  key={item.id}
                  className="
                    p-5 rounded-2xl
                    border border-[hsl(var(--border))]
                    bg-[hsl(var(--card))]
                    hover:bg-[hsl(var(--muted)/0.5)]
                    transition-colors
                  "
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">
                      {item.title}
                    </h3>
                    <Badge variant={getStatusBadgeVariant(item.status)} size="sm">
                      {item.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                    {item.description}
                  </p>

                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tech.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <ArrowLink href={item.link} external>
                      詳細を見る
                    </ArrowLink>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
