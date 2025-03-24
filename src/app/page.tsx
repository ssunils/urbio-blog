// src/app/page.tsx
import React from 'react';
import { Container } from '@mui/material';
import BlogList from '@/components/BlogList';
import axios from 'axios';
import { Post } from './types/blog';

const fetchInitialPosts = async (): Promise<Post[]> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');
  return res.data;
};

export default async function HomePage() {
  const initialPosts = await fetchInitialPosts();

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <BlogList initialPosts={initialPosts} />
    </Container>
  );
}
