"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Clock, CheckCircle, Phone, ArrowRight, Award, Home, Building, FileCheck, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import businessInfo from "../data/business-info.json"
import services from "../data/services.json"
import testimonials from "../data/testimonials.json"

export default function HomePage() {
  const featuredServices = services.services.slice(0, 3)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'commercial' | 'realtor'>('all')
  
  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials.testimonials
    : testimonials.testimonials.filter(t => t.category === selectedCategory)
  
  const highlightedTestimonial = testimonials.testimonials.find(t => t.highlight)
  const displayTestimonials = filteredTestimonials.slice(0, selectedCategory === 'all' ? 3 : 6)

  // Get service image based on service ID
  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
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

      {/* Hero Section - Elegant Design */}
      <section className="relative bg-gradient-to-br from-zinc-50 via-white to-zinc-100 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Trusted Since {businessInfo.established}
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-light text-zinc-900 leading-tight">
                  Your Home's
                  <span className="block font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent pb-2">
                    Guardian Angels
                  </span>
                </h1>

                <p className="text-xl text-zinc-600 leading-relaxed max-w-lg font-light">
                  Delivering peace of mind through comprehensive home evaluations and education. Our meticulous and thorough inspections provide detailed insights to help you make informed decisions about your investment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-none font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {businessInfo.contact.phone}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#scheduler">
                    Schedule Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200">
                <div>
                  <div className="text-3xl font-light text-zinc-900">{businessInfo.inspectionsCompleted}</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wide">Inspections Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-zinc-900">
                    {new Date().getFullYear() - Number.parseInt(businessInfo.established)}+
                  </div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wide">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/profile_img.png"
                  alt="Professional home inspector from First Class Home Inspections"
                  width={500}
                  height={600}
                  className="w-full h-auto shadow-2xl rounded-3xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-zinc-100 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-zinc-700 font-medium">Available Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              From residential properties to commercial buildings, we deliver meticulous inspections that provide
              clarity and confidence in your real estate decisions.
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

                  <Button
                    variant="outline"
                    className="w-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-blue-200 hover:text-blue-700 rounded-lg font-medium tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
                    asChild
                  >
                    <Link 
                      href={
                        service.id === 'single-family-inspection'
                          ? "https://reports.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/sample_report?sample_id=29126"
                          : service.id === 'multi-family-inspection'
                          ? "https://reports.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/sample_report?sample_id=29776"
                          : service.id === 'commercial-inspection'
                          ? "https://reports.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/sample_report?sample_id=29357"
                          : "https://reports.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/sample_report?sample_id=29126"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sample Report
                    </Link>
                  </Button>
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
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Elegant */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-8">
                Excellence in
                <span className="block font-semibold">Every Detail</span>
              </h2>
              <p className="text-xl text-zinc-600 font-light leading-relaxed mb-12">
                Our commitment to precision, professionalism, and client satisfaction sets us apart in the home
                inspection industry.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Certified",
                    desc: "Fully licensed inspectors with multiple certifications and ongoing professional development.",
                  },
                  {
                    icon: Clock,
                    title: "Same-Day Reports",
                    desc: "Comprehensive inspection reports delivered within hours, not days.",
                  },
                  {
                    icon: Star,
                    title: "5-Star Service",
                    desc: "Consistently rated 5 stars by our satisfied clients across all platforms.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <item.icon className="h-6 w-6 text-zinc-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                      <p className="text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <Image
                src="/other_images/excellence.jpg"
                alt="Professional inspection process - Excellence in every detail"
                width={600}
                height={500}
                className="w-full h-auto shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Elegant */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              Our
              <span className="block font-semibold">Mission</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Goal Statement */}
            <div className="text-center">
              <blockquote className="text-2xl lg:text-3xl text-zinc-700 font-light leading-relaxed italic">
                "Our goal is to provide every client with an education on their home and peace of mind about their investment."
              </blockquote>
            </div>

            {/* Mission Statement */}
            <div className="bg-zinc-50 rounded-2xl p-12 lg:p-16">
              <p className="text-xl lg:text-2xl text-zinc-700 font-light leading-relaxed text-center">
                First Class Home Inspections is committed to providing thorough, professional inspections backed by 
                high-quality, easy-to-read reports. We prioritize integrity, client education, and ongoing support, 
                ensuring every inspection empowers our clients with the knowledge and confidence to make informed decisions. 
                We strive for excellence by exceeding industry standards and providing peace of mind, both during and 
                after the inspection process.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  desc: "Honest, transparent reporting with uncompromising ethics and professionalism in every inspection."
                },
                {
                  icon: FileCheck,
                  title: "Education",
                  desc: "Empowering clients with comprehensive knowledge about their property investment and maintenance needs."
                },
                {
                  icon: Star,
                  title: "Excellence",
                  desc: "Exceeding industry standards through meticulous attention to detail and continuous improvement."
                }
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-lg rounded-full mb-6 group-hover:shadow-xl transition-all duration-300">
                    <value.icon className="h-8 w-8 text-zinc-600 group-hover:text-blue-800 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">{value.title}</h3>
                  <p className="text-zinc-600 font-light leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              Trusted by
              <span className="block font-semibold">
                {selectedCategory === 'realtor' ? 'Real Estate Professionals' : 
                 selectedCategory === 'commercial' ? 'Business Owners' :
                 selectedCategory === 'residential' ? 'Homeowners' : 'Our Clients'}
              </span>
            </h2>
            
            {/* Google Reviews Badge */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">Google Reviews</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full px-6"
              >
                All Reviews
              </Button>
              <Button
                variant={selectedCategory === 'residential' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('residential')}
                className="rounded-full px-6"
              >
                <Home className="w-4 h-4 mr-2" />
                Residential
              </Button>
              <Button
                variant={selectedCategory === 'commercial' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('commercial')}
                className="rounded-full px-6"
              >
                <Building className="w-4 h-4 mr-2" />
                Commercial
              </Button>
              <Button
                variant={selectedCategory === 'realtor' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('realtor')}
                className="rounded-full px-6"
              >
                <Users className="w-4 h-4 mr-2" />
                Realtors
              </Button>
            </div>
          </div>

          {/* Highlighted Testimonial (if exists and matches category) */}
          {highlightedTestimonial && (selectedCategory === 'all' || highlightedTestimonial.category === selectedCategory) && (
            <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-br from-zinc-50 to-zinc-100 shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {[...Array(highlightedTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge className="bg-blue-800 text-white">Featured Review</Badge>
                </div>
                <blockquote className="text-lg text-zinc-800 font-light leading-relaxed mb-6 italic">
                  "{highlightedTestimonial.text}"
                </blockquote>
                <div className="border-t border-blue-200 pt-6">
                  <div className="font-semibold text-zinc-900 text-lg">{highlightedTestimonial.name}</div>
                  <Badge variant="secondary" className="mt-2 bg-white text-blue-700">
                    {highlightedTestimonial.category === 'residential' ? 'Homeowner' :
                     highlightedTestimonial.category === 'commercial' ? 'Business Owner' :
                     'Real Estate Professional'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Testimonials Display - Grid or Carousel */}
          {filteredTestimonials.length > 3 ? (
            <div className="relative overflow-hidden">
              <style jsx>{`
                @keyframes scroll-testimonials {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll-testimonials {
                  animation: scroll-testimonials 30s linear infinite;
                }
                .animate-scroll-testimonials:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="flex animate-scroll-testimonials">
                {/* First set of testimonials */}
                {filteredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-shrink-0 w-96 px-4">
                    <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-zinc-50 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-zinc-700 font-light leading-relaxed mb-6 italic line-clamp-6">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="border-t border-zinc-200 pt-6">
                          <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                          {testimonial.company && (
                            <div className="text-sm text-zinc-600">{testimonial.company}</div>
                          )}
                          <Badge variant="secondary" className="mt-2 bg-zinc-50 text-blue-700 text-xs">
                            {testimonial.category === 'residential' ? 'Homeowner' :
                             testimonial.category === 'commercial' ? 'Commercial Client' :
                             'Real Estate Professional'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {filteredTestimonials.map((testimonial) => (
                  <div key={`duplicate-${testimonial.id}`} className="flex-shrink-0 w-96 px-4">
                    <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-zinc-50 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-zinc-700 font-light leading-relaxed mb-6 italic line-clamp-6">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="border-t border-zinc-200 pt-6">
                          <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                          {testimonial.company && (
                            <div className="text-sm text-zinc-600">{testimonial.company}</div>
                          )}
                          <Badge variant="secondary" className="mt-2 bg-zinc-50 text-blue-700 text-xs">
                            {testimonial.category === 'residential' ? 'Homeowner' :
                             testimonial.category === 'commercial' ? 'Commercial Client' :
                             'Real Estate Professional'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-zinc-50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-zinc-700 font-light leading-relaxed mb-6 italic line-clamp-6">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="border-t border-zinc-200 pt-6">
                      <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                      {testimonial.company && (
                        <div className="text-sm text-zinc-600">{testimonial.company}</div>
                      )}
                      <Badge variant="secondary" className="mt-2 bg-zinc-50 text-blue-700 text-xs">
                        {testimonial.category === 'residential' ? 'Homeowner' :
                         testimonial.category === 'commercial' ? 'Commercial Client' :
                         'Real Estate Professional'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Ready to Schedule
                <span className="block font-semibold">Your Inspection?</span>
              </h2>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
                Take the first step towards peace of mind. Contact our professional team today for a comprehensive property
                inspection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-zinc-900 hover:bg-zinc-100 px-10 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {businessInfo.contact.phone}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-zinc-900 px-10 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#scheduler">
                    Schedule Online
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <Image
                src="/robbi_pic_1.jpg"
                alt="Professional home inspector ready to help"
                width={500}
                height={600}
                className="w-full h-auto shadow-2xl rounded-lg"
              />
            </div>
          </div>
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
