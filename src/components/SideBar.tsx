import { fetchPosts } from "@/service/posts";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { ArrowRightAltOutlined } from '@mui/icons-material';

export const SideBar = async () => {
    const recentlyVisited = await fetchPosts(1, 3);

    return (
        <>
            <Box sx={{ mb: 2 }}>
                <h4>Popular Topics</h4>
                <Chip label="Artificial Intelligence" color="info" variant='outlined' size="medium" sx={{ mb: 1, mr: 1 }} />
                <Chip label="Data Science" color="info" variant='outlined' size="medium" sx={{ mb: 1 }} />
                <Chip label="Self Development" color="info" variant='outlined' size="medium" sx={{ mb: 1 }} />
                <Chip label="Crypto Currency" color="info" variant='outlined' size="medium" sx={{ mb: 1 }} />
            </Box>
            <Box>
                <h4>Recently Viewed</h4>
                <Stack direction="column" spacing={3} >

                    {recentlyVisited.articles.map((post) => (
                        <Stack direction="column" spacing={0} sx={{
                            padding: '15px 20px',
                            background: 'background.default',
                            borderRadius: '30px'
                        }} key={post.id}>
                            <Typography  >{post.title}</Typography>
                            <Typography variant='body1' color='primary' fontSize={12}>Author: {post.author}</Typography>
                            <Typography variant='body2' color='#666'>{post.excerpt}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: 12 }}>
                                <Button variant='text' href={`/posts/${post.id}`} endIcon={<ArrowRightAltOutlined />} >Read More</Button>
                            </Box>

                        </Stack>
                    ))}
                </Stack>

            </Box>
        </>
    );
};