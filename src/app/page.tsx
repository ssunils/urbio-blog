import React from 'react';
import { Chip, Container, Grid2 } from '@mui/material';
import BlogList from '@/components/BlogList';
import { fetchPosts } from '@/service/posts';

export default async function HomePage() {
  const initialPosts = await fetchPosts(1, 10);

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid2 container justifyContent="space-between" columns={12}>
        <Grid2 size={9}>
          <h2>Latest from our blog</h2>
          <BlogList initialPosts={initialPosts.articles} />
        </Grid2>
        <Grid2 size={3}>
          <h4>Popular Topics</h4>
          <Chip label="Artificial Intelligence" color="warning" variant='outlined' size="medium" sx={{ mb: 1, mr: 1 }} />
          <Chip label="Data Science" color="warning" variant='outlined' size="medium" sx={{ mb: 1 }} />
          <Chip label="Self Development" color="warning" variant='outlined' size="medium" sx={{ mb: 1 }} />
          <Chip label="Crypto Currency" color="warning" variant='outlined' size="medium" sx={{ mb: 1 }} />
        </Grid2>
      </Grid2>
    </Container>
  );
}
