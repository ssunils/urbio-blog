import { NextRequest, NextResponse } from 'next/server'
import posts from '@/mock/posts.json'
import content from '@/mock/sample-content.json'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const findPost = posts.find((post) => post.id === Number(id))
  if (findPost) {
    findPost.content = content.content
  }

  if (!findPost) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(findPost)
}
