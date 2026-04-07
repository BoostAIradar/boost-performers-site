import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BLOG_POSTS, getPostBySlug, getRelatedPosts, getCategoryColor } from "@/lib/blog-data"
import { BlogPostClient } from "@/components/blog/blog-post"

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Boost Performers Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  return <BlogPostClient post={post} related={related} />
}
