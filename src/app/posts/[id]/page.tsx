import React from 'react';
import { Button, Chip, Container, Divider, Typography } from '@mui/material';
import { fetchPostDetail } from '@/service/posts';
import MuiMarkdown from 'mui-markdown';
import { ArrowLeft } from '@mui/icons-material';

export default async function PostDetailPage({ params }: { params: { id: number } }) {
    const postDetail = await fetchPostDetail(params.id);

    return (
        <Container maxWidth="lg" sx={{ my: 6 }}>
            <Button variant="text" sx={{
                my: 4,
            }} startIcon={<ArrowLeft />} href='/'>
                Go Back
            </Button>
            <Typography variant='h1'>{postDetail.title}</Typography>
            <Chip label={`${postDetail.author}`} color="primary" size="small" variant="outlined" sx={{ mb: 1, mt: 4 }} />
            <Divider sx={{ my: 2 }} />
            <MuiMarkdown>{postDetail.content}</MuiMarkdown>
        </Container>
    );
}
