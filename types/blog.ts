export interface PostMatter {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export interface PostData extends PostMatter {
  id: string;
}

export interface FullPostData extends PostData {
  contentHtml: string;
}
