import { NextResponse } from 'next/server';
import posts from '../../mock/posts.json';
import content from '../../mock/sample-content.json';


export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const postId = Number(params.id);

  const findPost = posts.find((post) => post.id === postId);
  if (findPost) {
    findPost.content = content.content;
  }

  if (!findPost) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(findPost);
}
