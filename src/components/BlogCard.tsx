'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Chip, Box, Divider } from '@mui/material';
import { Post } from '@/app/types/blog';

const BlogCard: React.FC<Post> = ({ id, title, body, author }) => {
  return (
    <Card elevation={0} sx={{ my: 3, borderBottom: '1px solid #e0e0e0', pb: 2 }}>
      <Link href={`/posts/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent sx={{ p: 0 }}>
          <Chip label={author} color="primary" size="small" variant="outlined" sx={{ mb: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body.slice(0, 150)}...
          </Typography>
          <Box mt={2}>
            <Typography variant="caption" color="primary">
              Read More →
            </Typography>
          </Box>
        </CardContent>
      </Link>
      <Divider sx={{ mt: 2 }} />
    </Card>
  );
};

export default BlogCard;
