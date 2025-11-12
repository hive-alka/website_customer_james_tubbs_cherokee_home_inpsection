"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Clock, CheckCircle, Phone, ArrowRight, Award, FileCheck, Users, Camera, TrendingUp, Calendar, Search, FileText, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import businessInfo from "../data/business-info.json"
import services from "../data/services.json"

export default function HomePage() {
  const featuredServices = services.services.slice(0, 3)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get service image based on service ID
  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'buyers-inspection':
        return '/other_images/home-inspector.jpg'
      case 'pre-sale-inspection':
        return '/other_images/for-sale.jpg'
      case 'thermal-imaging':
        return '/other_images/thermal-camera.jpg'
      case 'single-family-inspection':
        return '/other_images/single_family.jpg'
      case 'multi-family-inspection':
        return '/other_images/multi-unit.jpg'
      case 'commercial-inspection':
        return '/other_images/commercial.jpeg'
      case 'pre-listing-inspection':
        return '/other_images/for-sale.jpg'
      default:
        return '/other_images/single_family.jpg'
    }
  }

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section - Full Width with Blur Overlay */}
      <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px]" style={{
        background: 'linear-gradient(to bottom, rgba(191, 219, 254, 0.7) 0%, rgba(219, 234, 254, 0.6) 20%, rgba(219, 234, 254, 0.5) 40%, rgba(239, 246, 255, 0.4) 60%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0.1) 90%, white 100%)'
      }}>
        {/* Background Image Layer - Positioned to Right */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/pexels-a-darmel-7642100.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundRepeat: 'no-repeat',
              transform: 'translateX(20%)'
            }}
          />
        </div>

        {/* Blurred Gradient Overlay on Left Side */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 right-1/2 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to right, rgba(147, 197, 253, 0.95) 0%, rgba(191, 219, 254, 0.9) 25%, rgba(219, 234, 254, 0.85) 40%, rgba(219, 234, 254, 0.75) 55%, rgba(219, 234, 254, 0.6) 70%, rgba(219, 234, 254, 0.4) 85%, transparent 100%)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            maskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.25) 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.25) 85%, transparent 100%)'
          }}
        />

        {/* Text Content Layer */}
        <div className="relative z-20 flex items-center min-h-[500px] lg:min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center md:text-left">
              <div className="space-y-8 max-w-xl mx-auto md:mx-0">
                <div className="space-y-6">
                  {/* Certified Master Inspector Label */}
                  <div>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider"
                       style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.9)' }}>
                      InterNACHI Certified Master Inspector
                    </p>
                  </div>

                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight tracking-tight"
                        style={{ textShadow: '0 3px 6px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.15)' }}>
                      Protecting what's
                      <span className="block text-blue-600 mt-2">
                        important to you
                      </span>
                    </h1>
                    <p className="text-xl text-zinc-800 font-semibold mt-6"
                       style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                      Thorough inspections you can trust.
                    </p>
                  </div>

                  {/* Trust Indicators & Key Features Combined */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Google Reviews */}
                    <a
                      href="https://share.google/Y0fhDTnKYTsUReAOz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-zinc-900">5.0</span>
                      <span className="text-xs text-zinc-600">(100+)</span>
                    </a>

                    {/* Same-day Reports */}
                    <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span className="text-xs text-zinc-800 font-medium">Same-day reports</span>
                    </div>

                    {/* Licensed & Insured */}
                    <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      <Shield className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs text-zinc-800 font-medium">Licensed & Insured</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl w-full sm:w-auto shadow-lg rounded-full"
                      asChild
                    >
                      <Link href="/contact#scheduler">
                        Schedule Inspection
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white bg-white/90 backdrop-blur-sm px-8 py-6 text-base font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg rounded-full"
                      asChild
                    >
                      <a href={`tel:${businessInfo.contact.phone.replace(/\./g, '')}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        {businessInfo.contact.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Blur Overlay */}
        <div
          className="hidden lg:block absolute bottom-0 left-0 h-64 md:h-96 pointer-events-none z-0"
          style={{
            width: '54%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(239, 246, 255, 0.4) 30%, rgba(255, 255, 255, 0.7) 60%, white 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            maskImage: 'radial-gradient(circle at 100% 0%, transparent 0%, transparent 12%, rgba(0,0,0,0.5) 18%, black 25%, black 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 0%, transparent 12%, rgba(0,0,0,0.5) 18%, black 25%, black 100%)'
          }}
        />
      </section>

      {/* Services Section - Elegant */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              Comprehensive
              <span className="block font-semibold">Inspection Services</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you're buying or selling your home, we offer a range of inspection services to meet your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card
                key={service.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden transform hover:-tranzinc-y-2 hover:scale-105 relative"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={getServiceImage(service.id)}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-zinc-100/90 backdrop-blur-sm text-zinc-600 group-hover:bg-zinc-100 group-hover:text-blue-700 transition-colors shadow-lg">
                      {service.duration}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8 relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-600 font-light leading-relaxed">{service.description}</p>
                  </div>


                  <ul className="space-y-2 mb-8">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-zinc-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Subtle 3D highlight */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gray-700 hover:bg-gray-600 text-white px-10 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              What Our <span className="font-semibold">Clients Say</span>
            </h2>
            <p className="text-xl text-zinc-600 font-light leading-relaxed">
              Read authentic reviews from our satisfied clients on Google
            </p>
          </div>

          {/* Google Reviews Widget */}
          {isMounted && (
            <div className="elfsight-app-e0fcb470-7aa3-43e7-849d-6c866ba7a195" data-elfsight-app-lazy></div>
          )}

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300"
              asChild
            >
              <a
                href="https://g.co/kgs/sCsUDHJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Leave a Review on Google
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              How It <span className="font-semibold">Works</span>
            </h2>
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-3xl mx-auto">
              Simple, straightforward process from start to finish
            </p>
          </div>

          {/* 4-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: Calendar,
                title: "Schedule Your Inspection",
                desc: "Book online or call us. We offer flexible scheduling 7 days a week.",
                link: "/contact#scheduler",
              },
              {
                step: "2",
                icon: Search,
                title: "Thorough Home Inspection",
                desc: "Inspector examines every detail. Join the final walkthrough.",
                link: null,
              },
              {
                step: "3",
                icon: FileText,
                title: "Same-Day Report Delivery",
                desc: "Detailed inspection report delivered same day with photos.",
                link: null,
              },
              {
                step: "4",
                icon: MessageCircle,
                title: "Ongoing Support",
                desc: "Ongoing support for questions after your inspection.",
                link: null,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-zinc-900 mb-3">{item.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>

                {/* Connecting Arrow (hidden on mobile, shown on desktop except last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              What Sets <span className="font-semibold">Us Apart</span>
            </h2>
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-3xl mx-auto">
              Experience the Cherokee Home Inspection difference.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Same-Day Reports",
                desc: "Comprehensive inspection reports delivered within hours, not days.",
              },
              {
                icon: Camera,
                title: "Advanced Technology",
                desc: "State-of-the-art inspection software, thermal imaging, and comprehensive photo documentation.",
              },
              {
                icon: TrendingUp,
                title: "10+ Years of Experience",
                desc: "Years of experience serving Arkansas homeowners with trusted, thorough inspections.",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Honest, transparent reporting you can trust.",
              },
              {
                icon: FileCheck,
                title: "Education",
                desc: "Empowering you with knowledge about your property.",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "Meticulous attention to every detail.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
                    <item.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owner - James Tubbs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/james_tubbs.jpg"
                  alt="James Tubbs - Co-owner and InterNACHI Certified Master Inspector"
                  width={500}
                  height={600}
                  className="w-full h-auto shadow-2xl rounded-lg object-cover"
                />
                {/* Credentials Badge */}
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <div>
                      <div className="font-semibold text-sm">Certified</div>
                      <div className="text-xs opacity-90">Master Inspector</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Bio */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">Meet Your Inspector</Badge>
              </div>

              <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
                Hello and
                <span className="block font-semibold">Welcome!</span>
              </h2>

              <div className="space-y-6 text-lg text-zinc-700 font-light leading-relaxed">
                <p>
                  I am <span className="font-semibold text-zinc-900">James Tubbs</span>, co-owner of Cherokee Home Inspection LLC.
                  I am a licensed home inspector in Arkansas and an <span className="font-semibold text-zinc-900">InterNACHI Certified Master Inspector</span>,
                  and a member of the Arkansas Association of Real Estate Inspectors. I inspect every home as if it were my own,
                  reporting on all aspects of the property, both major and minor.
                </p>
              </div>

              {/* Professional Credentials */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Licensed in Arkansas</div>
                    <div className="text-sm text-zinc-600">State Licensed Home Inspector</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">InterNACHI Certified Master Inspector</div>
                    <div className="text-sm text-zinc-600">Highest Professional Certification</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">AAREI Member</div>
                    <div className="text-sm text-zinc-600">Arkansas Association of Real Estate Inspectors</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl rounded-full"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Fixed Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium tracking-wide"
          asChild
        >
          <Link href="/contact#scheduler">
            Schedule Now
          </Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}
