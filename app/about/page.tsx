"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Phone, Wrench, Zap, Hammer, Home, Paintbrush, Droplets, Flame, ShieldCheck, Drill, Settings, Mail, MapPin, Award, Building, TestTube, Sun, Wind, Trees } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import about from "../../data/about.json"
import businessInfo from "../../data/business-info.json"
import certifications from "../../data/certifications.json"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="animated-bg text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Team
              </span>{" "}
              Behind Quality
            </h1>
            <p className="text-2xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Serving the {businessInfo.address.city} area since {businessInfo.established} with integrity,
              professionalism, and unmatched attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">{about.company.story}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-8">{about.company.mission}</p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-zinc-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-zinc-900">{businessInfo.inspectionsCompleted}</div>
                  <div className="text-sm text-gray-600">Inspections Completed</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-zinc-900">
                    {new Date().getFullYear() - Number.parseInt(businessInfo.established)}+
                  </div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/cherokee_van.jpg"
                alt="Cherokee Home Inspection LLC - Professional Service"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Promise to Every Client */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              My Promise to
              <span className="block font-semibold">Every Client</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 text-center">I WILL NOT BE AN ALARMIST</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Some inspectors' demeanors and reports can create unnecessary alarm. I adhere strictly to industry 
                  standards and remain factual and professional, providing detailed explanations of any defects. 
                  Every issue has a solution. My goal is to educate you so that you understand and feel confident 
                  in your decisions – that is Peace of Mind!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 text-center">I WILL EXPLAIN WHAT I OBSERVE</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Facing defects can be daunting. I'll guide you through each issue, discuss repair options, and 
                  connect you with trusted contractors when needed. I'm passionate about teaching you about your 
                  home's systems and their deficiencies and answering all of your questions. I'm here for you and 
                  your realtor throughout and beyond the inspection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 text-center">I WILL RESPECT YOUR TIME</h3>
                <p className="text-zinc-600 leading-relaxed">
                  I recognize the urgency of real estate transactions. You'll receive a comprehensive, 
                  easy-to-read report within 24 hours, guaranteed!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-zinc-50 border border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">THE GOLDEN RULE</h3>
                <h4 className="text-lg font-semibold text-blue-700 mb-4 text-center">
                  I TREAT EVERY INSPECTION AS IF IT WERE MY OWN
                </h4>
                <p className="text-blue-700 leading-relaxed">
                  I'm dedicated to delivering thorough inspections and detailed reports, ensuring you can make 
                  informed decisions and negotiate effectively. I will go the extra mile and strive for excellence 
                  for you and every client, every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.company.values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-zinc-900 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Network */}
      <section className="py-20 bg-gradient-to-br from-zinc-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              Trusted Partner
              <span className="block font-semibold">Network</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed font-light">
              We maintain a robust network of trusted contractors and specialists that we can refer to our clients. 
              When issues are discovered during your inspection, we connect you with reliable professionals 
              who can provide quality solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Droplets, name: "Plumbers", color: "zinc-500" },
              { icon: Zap, name: "Electricians", color: "yellow-500" },
              { icon: Hammer, name: "Carpenters", color: "amber-600" },
              { icon: Home, name: "Roofers", color: "zinc-600" },
              { icon: Paintbrush, name: "Painters", color: "zinc-500" },
              { icon: Flame, name: "HVAC", color: "orange-500" },
              { icon: ShieldCheck, name: "Structural", color: "green-600" },
              { icon: Wrench, name: "General", color: "blue-700" },
              { icon: Drill, name: "Drywall", color: "rose-500" },
              { icon: Settings, name: "Appliance", color: "cyan-600" }
            ].map((contractor, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-tranzinc-y-2 hover:scale-105 border border-zinc-200 hover:border-blue-300 cursor-pointer overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon container */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors duration-300 group-hover:rotate-12 transform transition-transform">
                      <contractor.icon className={`h-8 w-8 text-${contractor.color} group-hover:text-blue-800 transition-colors duration-300`} />
                    </div>
                    
                    <h3 className="text-sm font-semibold text-zinc-700 group-hover:text-blue-700 transition-colors duration-300 text-center">
                      {contractor.name}
                    </h3>
                  </div>

                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-zinc-700 font-medium">All partners are vetted, licensed, and insured professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications and Qualifications</h2>
            <p className="text-lg text-gray-600">We maintain the highest professional standards</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
              {certifications.certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 font-medium">{cert.organization}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Logos Carousel */}
          <div className="mt-16 mb-16 overflow-hidden">
            
            <div className="relative">
              <div className="flex animate-scroll space-x-8">
                {/* First set of logos */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                  <div key={num} className="flex-shrink-0 w-50 h-40 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={`/service_logos/${num}.jpg`}
                      alt={`Professional service tool ${num}`}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                  <div key={`duplicate-${num}`} className="flex-shrink-0 w-60 h-60 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={`/service_logos/${num}.jpg`}
                      alt={`Professional service tool ${num}`}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Card className="bg-gradient-to-br from-zinc-50 to-zinc-100 border-2 border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-tranzinc-y-1">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-blue-700 font-semibold mb-6 text-lg">Protected for Your Peace of Mind</p>
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-gray-800 font-semibold text-lg">
                      {certifications.insurance.liability}
                    </p>
                    <p className="text-gray-600 text-sm">General Liability Coverage</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-gray-800 font-semibold text-lg">
                      {certifications.insurance.errors_omissions}
                    </p>
                    <p className="text-gray-600 text-sm">Errors & Omissions Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
