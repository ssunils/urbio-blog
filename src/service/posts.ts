import { PostResponse } from "@/types/blog";

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_API_URL

export const fetchPosts = async (page: number, limit: number): Promise<PostResponse> => {
    const res = await fetch(`${API_URL}/api/posts?page=${page}&limit=${limit}`);
    try {
        return res.json();
    } catch (err) {
        console.error('Failed to parse JSON:', err);
        throw err;
    }
};

export const fetchPostDetail = async (id: number) => {
    const res = await fetch(`${API_URL}/api/posts/${id}`);
    try {
        return res.json();
    } catch (err) {
        console.error('Failed to parse JSON:', err);
        throw err;
    }
};