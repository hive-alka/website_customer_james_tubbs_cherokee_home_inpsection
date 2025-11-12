"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import blogData from "../../data/blog.json"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Home Inspection <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Expert tips, guides, and insights from our Certified Master Inspector to help you make informed decisions about your home.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Post Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-zinc-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4 pb-4 border-b border-gray-200">
                    <User className="h-4 w-4" />
                    <span>{post.author}, {post.authorTitle}</span>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State if no posts */}
          {blogData.posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-zinc-600">No blog posts yet. Check back soon for expert insights!</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />

      <Footer />
    </div>
  )
}
