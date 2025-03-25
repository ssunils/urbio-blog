'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { Post } from '@/app/types/blog';

const BlogCard: React.FC<Post> = ({ id, title, excerpt, author }) => {
  return (
    <Card elevation={0} sx={{borderBottom: '1px solid #e0e0e0', py: 2 }}>
      <Link href={`/posts/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent sx={{ p: 2 }}>
          <Chip label={`Author: ${author}`} color="primary" size="small" variant="outlined" sx={{ mb: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {excerpt}...
          </Typography>
          <Box mt={2}>
            <Typography variant="caption" color="primary">
              Read More →
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
