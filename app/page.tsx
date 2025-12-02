import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import Badge from "@/components/common/Badge";
import { profileData, contactData, skillsData } from "@/data/profile";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* ヒーローセクション */}
      <section className="text-center mb-16">
        <div className="bg-blue-500 bg-clip-text text-transparent">
          <h1 className="text-5xl font-bold mb-4">{profileData.name}</h1>
        </div>
        <p className="text-xl text-gray-400 mb-6">{profileData.title}</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </section>

      {/* 自己紹介セクション */}
      <section className="mb-12">
        <Card>
          <SectionTitle>自己紹介</SectionTitle>
          <p className="text-gray-300 leading-relaxed text-lg">
            {profileData.description}
          </p>
        </Card>
      </section>

      {/* スキルセクション */}
      <section className="mb-12">
        <Card>
          <SectionTitle>使用経験のある言語・技術</SectionTitle>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                プログラミング言語
              </h3>
              <div className="space-y-2">
                {skillsData.languages.map((skill) => (
                  <Badge key={skill.name} variant={skill.color} className="mr-2 mb-2">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                フレームワーク
              </h3>
              <div className="space-y-2">
                {skillsData.frameworks.map((skill) => (
                  <Badge key={skill.name} variant={skill.color} className="mr-2 mb-2">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                OS
              </h3>
              <div className="space-y-2">
                {skillsData.os.map((skill) => (
                  <Badge key={skill.name} variant={skill.color} className="mr-2 mb-2">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 連絡先セクション */}
      <section>
        <Card>
          <SectionTitle>連絡先</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="メールアイコン"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">メール</p>
                <p className="text-white">{contactData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="GitHubアイコン"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a
                  href={contactData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {contactData.github.username}
                </a>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
