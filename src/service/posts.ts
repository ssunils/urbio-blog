import { PostResponse } from "@/app/types/blog";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPosts = async (page: number, limit: number): Promise<PostResponse> => {
    const res = await fetch(`${API_URL}/api/posts?page=${page}&limit=${limit}`);
    return res.json();
};

export const fetchPostDetail = async (id: number) => {
    const res = await fetch(`${API_URL}/api/posts/${id}`);
    return res.json();
};