import React from 'react';
import { Container, Grid2 } from '@mui/material';
import BlogList from '@/components/BlogList';
import { fetchPosts } from '@/service/posts';
import { SideBar } from '@/components/SideBar';

export default async function HomePage() {
  const initialPosts = await fetchPosts(1, 10);

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid2 container justifyContent="space-between" spacing={2} columns={12} sx={{ position: 'relative' }}>
        <Grid2 size={{ xs: 12, md: 9 }} >
          <h2>Latest from our blog</h2>
          <BlogList initialPosts={initialPosts.articles} />
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
