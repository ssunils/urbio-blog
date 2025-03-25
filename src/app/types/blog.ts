export interface Post {
    id: number;
    title: string;
    author: string;
    excerpt: string;
    image:  string;
}

export interface PostResponse {
    page: number;
    limit: number;
    total: number;
    articles: Post[];
}