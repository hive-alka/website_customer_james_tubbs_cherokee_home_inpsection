import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Star, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gallery from "../../data/gallery.json"

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="animated-bg text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-in-up">
            <Badge className="glass-effect text-white border-white/30 mb-6 px-6 py-3 text-lg font-semibold">
              <Camera className="w-5 h-5 mr-2" />
              Gallery
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow">
              Our Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Gallery
              </span>
            </h1>
            <p className="text-2xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              See our professional inspectors in action. From residential homes to commercial properties, we bring the
              same level of thoroughness and expertise to every inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {gallery.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <Badge className="bg-zinc-100 text-zinc-900 mb-4">{category.name}</Badge>
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <Card key={imageIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-gray-600">{image.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium tracking-wide"
          asChild
        >
          <Link href="/contact#scheduler">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Now
          </Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}
