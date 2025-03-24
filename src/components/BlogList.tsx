import { Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import { Post } from "@/app/types/blog";

interface BlogListProps {
    initialPosts: Post[];
}
export const BlogList: React.FC<BlogListProps> = ({ initialPosts }) => (
    <Stack>
        {initialPosts.map((post) =>
            <BlogCard key={post.id} {...post} />
        )}
    </Stack>
)

export default BlogList