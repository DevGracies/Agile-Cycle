export type BlogStatus = "Active" | "Inactive";

export interface BlogLog {
  id: string;
  title: string;
  image?: string;
  info?: string;
  comments: number;
  likes: number;
  views?: number;
  status: BlogStatus;
  createdAt: Date;
}

export interface CreateBlogPayload {
  title: string;
  image?: string;
  info?: string;
  category: string;
  comments: number;
  likes: number;
  views?: number;
  status: BlogStatus;
  createdAt: Date;
}

export interface UpdateBlogPayload {
  title?: string;
  image?: string;
  info?: string;
  category?: string;
  comments?: number;
  likes?: number;
  views?: number;
  status?: BlogStatus;
}

export type BlogToggleKey =
  | "Manual"
  | "Automatic";

export interface BlogToggleState {
  Manual: boolean;
  Automatic: boolean;
}

export type BlogTabKey =
  | "this-week"
  | "last-week";

export interface BlogTab {
  label: string;
  key: BlogTabKey;
}

export interface BlogMetrics {
  totalBlogs: number;
  totalComments: number;
  totalVisitors: number;
}

// users blog
export interface Blog {
  _id: string;

  author: {
    _id: string;
    name: string;
  };

  title: string;
  description: string;
  content: string;

  image: {
    public_id: string;
    secure_url: string;
  };

  status: "active" | "inactive" | "archived";

  publishedAt?: string;
  createdAt: string;
  updatedAt: string;

  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}

export interface BlogListResponse {
  success: boolean;
  message: string;

  blogs: Blog[];

  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface BlogResponse {
  success: boolean;
  message: string;
  blog: Blog;
  comments: any[]; // we'll type this later
}
// end of users blog

export interface MockBlog {
  _id: string;

  title: string;
  description: string;

  heroImage?: string;

  author: {
    _id: string;
    name: string;
  };

  image: {
    public_id: string;
    secure_url: string;
  };

  publishedAt: string;

  stats: {
  views: number;
  likes: number;
  comments: number;
};
  // comments: number;

  //sections: BlogSection[];

  commentsData?: Comment[];
}