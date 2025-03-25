'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Chip, Box, SxProps } from '@mui/material';
import { Post } from '@/app/types/blog';

const BlogImage: React.FC<{ src: string, sx: SxProps }> = ({ src, sx }) => {
  return (
    <Box sx={{
      width: { xs: '100%', sm: 200 },
      height: { xs: 'auto', sm: 200 },
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
      ...sx
    }}>
      <img
        src={src}
        srcSet={`${src} 2x`}
        alt={src}
        style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '20px' }}
      />
    </Box>
  );
}
const BlogCard: React.FC<Post> = ({ id, title, excerpt, author, image }) => {
  return (
    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', mb: 2, borderRadius: '20px' }}>
      <Link href={`/posts/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <BlogImage src={image} sx={{ display: { xs: 'flex', sm: 'none' }, }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 200px' } }}>
          <CardContent>
            <Chip label={`Author: ${author}`} color="info" size="small" variant="outlined" sx={{ mb: 1 }} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {excerpt}...
            </Typography>
            <Box mt={2}>
              <Typography color="primary">
                Read More →
              </Typography>
            </Box>
          </CardContent>
          <BlogImage src={image} sx={{ display: { xs: 'none', sm: 'flex' }, }} />
        </Box>
      </Link>
    </Card>
  );
};

export default BlogCard;
