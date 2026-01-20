import Badge from "@/components/common/Badge";
import ArrowLink from "@/components/common/ArrowLink";
import { profileData, contactData, skillsData } from "@/config/profile";

// アイコンコンポーネント
function LocationIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29-.2.133-.377.24-.336.205-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242-.52-.32-.192-.125-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function UniversityIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="animate-fade-in-up flex flex-col items-center text-center mb-16 pt-8">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full border-2 border-[hsl(var(--border))] p-1 mb-6 bg-[hsl(var(--card))]">
          <img src="icon.jpg" alt="araaki logo" className="w-full h-full rounded-full object-cover" />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
          {profileData.name}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="default" icon={<LocationIcon />}>
            Shizuoka
          </Badge>
          <Badge variant="default" icon={<UniversityIcon />}>
            Shizuoka Univ.
          </Badge>
          <Badge variant="default" icon={<SecurityIcon />}>
            Cybersecurity
          </Badge>
        </div>
      </section>

      {/* Content Grid */}
      <div className="animate-fade-in-up animation-delay-100 flex flex-col gap-8">
        {/* About Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">About</h2>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              {profileData.description}
            </p>
            <div className="self-end">
              <ArrowLink href="/works">成果物を見る</ArrowLink>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">Skills</h2>
          </div>
          <div className="flex-1">
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Languages */}
              <div>
                <h3 className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.languages.map((skill) => (
                    <Badge key={skill.name} variant={skill.color}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide mb-3">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frameworks.map((skill) => (
                    <Badge key={skill.name} variant={skill.color}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* OS */}
              <div>
                <h3 className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide mb-3">
                  OS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.os.map((skill) => (
                    <Badge key={skill.name} variant={skill.color}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="md:min-w-[140px]">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">Contact</h2>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-4">
              {/* Email */}
              <a
                href={`mailto:${contactData.email}`}
                className="
                  flex items-center gap-3 px-4 py-3
                  rounded-xl border border-[hsl(var(--border))]
                  bg-[hsl(var(--card))]
                  hover:bg-[hsl(var(--muted))]
                  transition-colors
                  group
                "
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Email</p>
                  <p className="text-sm font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    {contactData.email}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contactData.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 px-4 py-3
                  rounded-xl border border-[hsl(var(--border))]
                  bg-[hsl(var(--card))]
                  hover:bg-[hsl(var(--muted))]
                  transition-colors
                  group
                "
              >
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--foreground))]">
                  <GithubIcon />
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">GitHub</p>
                  <p className="text-sm font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    {contactData.github.username}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
