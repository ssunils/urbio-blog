import React from 'react';
import { Button, Chip, Container, Divider, Grid2, Typography } from '@mui/material';
import { fetchPostDetail } from '@/service/posts';
import MuiMarkdown from 'mui-markdown';
import { ArrowLeft } from '@mui/icons-material';
import { SideBar } from '@/components/SideBar';

const PostDetailPage = async (
    
  { params }: { params: Promise<{ id: string }> }
) => {
    const { id } = await params;
    const postDetail = await fetchPostDetail(Number(id));

    return (
        <Container maxWidth="lg" sx={{ my: 6 }}>
            <Grid2 container justifyContent="space-between" spacing={2} columns={12} sx={{ position: 'relative' }}>
                <Grid2 size={{ xs: 12, md: 9 }} >
                    <Button variant="text" sx={{
                        my: 2,
                    }} startIcon={<ArrowLeft />} href='/'>
                        Go Back
                    </Button>
                    <Typography variant='h1'>{postDetail.title}</Typography>
                    <Chip label={`${postDetail.author}`} color="primary" size="small" variant="outlined" sx={{ mb: 1, mt: 4 }} />
                    <Divider sx={{ my: 2 }} />

                    {/* <img
                        src={'/img/banner.jpg'}
                        srcSet={`/img/banner.jpg 2x`}
                        alt={postDetail.image}
                        style={{ objectFit: 'cover',maxWidth: '100%', marginBottom: 15 }}
                    /> */}
                    <MuiMarkdown>{postDetail.content}</MuiMarkdown>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 3 }} sx={{
                    position: 'sticky',
                    top: 100,
                }}>
                    <SideBar />
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default PostDetailPage;