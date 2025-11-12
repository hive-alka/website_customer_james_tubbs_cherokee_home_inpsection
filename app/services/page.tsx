import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Phone, Star, Zap, Shield, Award, Home, Building, FileCheck, Wrench, Search, Camera, Droplets, Settings, AlertTriangle, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import services from "../../data/services.json"
import businessInfo from "../../data/business-info.json"

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Inspection
              </span>{" "}
              Services
            </h1>
            <p className="text-lg text-zinc-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive inspection services for residential and commercial properties. We provide detailed reports
              to help you make informed decisions with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.services.map((service, index) => {
              // Define icons for each service
              const getServiceIcon = (serviceId: string) => {
                switch (serviceId) {
                  case 'single-family-inspection':
                    return Home;
                  case 'multi-family-inspection':
                    return Building;
                  case 'commercial-inspection':
                    return Building;
                  case 'pre-listing-inspection':
                    return FileCheck;
                  case 'new-construction':
                    return Wrench;
                  case 'specialty-inspections':
                    return Search;
                  default:
                    return Shield;
                }
              };

              // Define images for each service
              const getServiceImage = (serviceId: string) => {
                switch (serviceId) {
                  case 'single-family-inspection':
                    return '/other_images/single_family.jpg';
                  case 'multi-family-inspection':
                    return '/other_images/multi-unit.jpg';
                  case 'commercial-inspection':
                    return '/other_images/commercial.jpeg';
                  case 'pre-listing-inspection':
                    return '/other_images/for-sale.jpg';
                  default:
                    return '/other_images/single_family.jpg';
                }
              };

              const ServiceIcon = getServiceIcon(service.id);
              const serviceImage = getServiceImage(service.id);

              return (
                <Card key={service.id} className="modern-card hover-lift group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-800 via-zinc-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                  {/* Service Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={serviceImage}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl group-hover:text-blue-800 transition-colors mb-2">
                          {service.name}
                        </CardTitle>
                        <Badge className="bg-zinc-100 text-zinc-900 px-2 py-1 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-blue-800" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group/item">
                          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 group-hover/item:scale-110 transition-transform">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Button className="w-full btn-cool text-white font-semibold rounded-full text-base group" asChild>
                      <Link href="/contact#scheduler">
                        Schedule Now
                        <Award className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              );
            })}
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
            <Phone className="mr-2 h-5 w-5" />
            Schedule Now
          </Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}
