"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import blogData from "../../../data/blog.json"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string

  // Find the post by slug
  const post = blogData.posts.find((p) => p.slug === slug)

  // If post not found, show 404-like message
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-zinc-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <Badge className="bg-blue-600 text-white text-sm px-4 py-2">{post.category}</Badge>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Title Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{post.author}</span>
              <span className="text-zinc-400">•</span>
              <span className="text-sm">{post.authorTitle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-a:text-blue-600 prose-strong:text-zinc-900 prose-ul:text-zinc-700 prose-ol:text-zinc-700">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="text-center mb-12">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </article>

      <CTASection />

      <Footer />
    </div>
  )
}
