import BlogCard from "./BlogCard";
import { Post } from "@/types/blog";
import { JSX } from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchPosts } from "@/service/posts";

interface BlogListProps {
    initialPosts: Post[];
}


const BlogList: React.FC<BlogListProps> = async ({ initialPosts }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPosts(1, 10),
        initialData: initialPosts,
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {initialPosts.map((post: JSX.IntrinsicAttributes & Post) => (
                <BlogCard key={post.id} {...post} />
            ))}
        </HydrationBoundary>
    );
};

export default BlogList