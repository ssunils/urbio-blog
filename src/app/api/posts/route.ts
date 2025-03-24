// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') || '1';
  const limit = request.nextUrl.searchParams.get('limit') || '10';

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  const posts = res.data;

  return NextResponse.json(posts);
}
