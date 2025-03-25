// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

import posts from '../mock/posts.json';
import { Post } from '@/app/types/blog';

const mockArticles: Post[] = [];

export async function GET(request: NextRequest) {
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1', 10);
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '10', 10);
 
  const shuffled = posts.sort(() => 0.5 - Math.random());
  const startIndex = 0;
  const endIndex = startIndex + limit;

  const paginatedArticles = shuffled.slice(startIndex, endIndex);
  const articleExcerpt = paginatedArticles.map((article) => {
    const { id, title, author, image, excerpt } = article;
    return {
      id,
      title,
      author,
      image,
      excerpt,
    };
  })

  return NextResponse.json({
    page,
    limit,
    total: mockArticles.length,
    articles: articleExcerpt,
  });
}
