import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostMatter, PostData, FullPostData } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blogs");

// ブログ記事一覧用
export function getSortedPostsData(): PostData[] {
  let fileNames: string[];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    console.error(
      "[lib/posts.ts] getSortedPostsData: Could not read directory:",
      postsDirectory,
      e
    );
    return [];
  }

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      let fileContents;
      try {
        fileContents = fs.readFileSync(fullPath, "utf8");
      } catch (e) {
        console.error(
          `[lib/posts.ts] getSortedPostsData: Could not read file ${fullPath}:`,
          e
        );
        // エラーが発生した記事はリストから除外するか、エラーを示すデータを返す
        return {
          id,
          title: "Error Reading File",
          date: "",
          excerpt: "",
          slug: id,
        } as PostData;
      }

      let matterResult;
      try {
        matterResult = matter(fileContents);
      } catch (e) {
        console.error(
          `[lib/posts.ts] getSortedPostsData: Could not parse frontmatter for ${fileName}:`,
          e
        );
        return {
          id,
          title: "Error Parsing Frontmatter",
          date: "",
          excerpt: "",
          slug: id,
        } as PostData;
      }

      const postMatter = matterResult.data as Partial<PostMatter>; // 部分的な型として扱う

      return {
        id,
        title: postMatter.title || "Untitled",
        date: postMatter.date || "No date",
        excerpt: postMatter.excerpt || "",
        slug: postMatter.slug || id, // Frontmatterのslugを優先、なければid
      } as PostData;
    });

  // エラーがあった記事を除外（例: titleがエラーメッセージになっているもの）
  const validPostsData = allPostsData.filter(
    (post) =>
      post.title !== "Error Reading File" &&
      post.title !== "Error Parsing Frontmatter"
  );

  return validPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 個別記事ページのパス生成に重要
export function getAllPostIds(): Array<{ slug: string }> {
  let fileNames: string[];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    console.error(
      "[lib/posts.ts] getAllPostIds: ERROR - Could not read blogMD directory:",
      e
    );
    return [];
  }

  if (!fileNames || fileNames.length === 0) {
    return [];
  }

  const slugs = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return { slug: slug };
    });

  return slugs;
}

// 個別記事のデータ取得に重要
export async function getPostData(slug: string): Promise<FullPostData> {
  if (!slug || slug === "undefined" || slug === "null") {
    console.error(
      `[lib/posts.ts] getPostData: ERROR - Received invalid slug: '${slug}'`
    );
    throw new Error(`Invalid slug provided: ${slug}`);
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (e) {
    console.error(
      `[lib/posts.ts] getPostData: ERROR reading file ${fullPath}:`,
      e
    );
    throw new Error(`Could not read file for slug '${slug}'`);
  }

  let matterResult;
  try {
    matterResult = matter(fileContents);
  } catch (e) {
    console.error(
      `[lib/posts.ts] getPostData: ERROR parsing frontmatter for ${slug}:`,
      e
    );
    throw new Error(`Could not parse frontmatter for slug '${slug}'`);
  }

  const postMatter = matterResult.data as Partial<PostMatter>;
  let contentHtml = "";
  try {
    if (matterResult.content && matterResult.content.trim() !== "") {
      const processedContent = await remark()
        .use(html) // サニタイズが必要な場合は remark-html のオプションや rehype-sanitize を検討
        .process(matterResult.content);
      contentHtml = processedContent.toString();
    }
  } catch (e) {
    console.error(
      `[lib/posts.ts] getPostData: ERROR converting Markdown to HTML for '${slug}':`,
      e
    );
  }

  return {
    id: slug,
    contentHtml,
    title: postMatter.title || "Untitled Post",
    date: postMatter.date || "No Date",
    excerpt: postMatter.excerpt || "",
    slug: postMatter.slug || slug,
  } as FullPostData;
}
