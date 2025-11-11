import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Star, MessageSquare } from "lucide-react"
import businessInfo from "../../data/business-info.json"

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Touch
              </span>{" "}
              Today
            </h1>
            <p className="text-2xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Ready to schedule your inspection? Get in touch with us today. We're here to answer your questions and
              provide expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row - Contact Information and Service Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-zinc-900 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Call or Text</h3>
                    <a href={`tel:${businessInfo.contact.phone}`} className="text-zinc-900 hover:underline">
                      {businessInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-zinc-900 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href={`mailto:${businessInfo.contact.email}`} className="text-zinc-900 hover:underline">
                      {businessInfo.contact.email}
                    </a>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-zinc-900 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-700">{businessInfo.address.full}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We proudly serve the following areas:</p>
                <div className="grid grid-cols-2 gap-3">
                  {businessInfo.serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2 flex-shrink-0"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - Business Hours (Full Width) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-6 w-6 text-zinc-900 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-zinc-900">{businessInfo.hours.monday}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Saturday</span>
                      <span className="font-semibold text-zinc-900">Call to inquire</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="font-semibold text-zinc-900">Call to inquire</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-zinc-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-zinc-900">Flexible Scheduling:</span> We can often accommodate special days and times to fit busy schedules and out-of-town clients. Call or text us to discuss your needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Online Scheduler Section */}
      <section id="scheduler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Schedule Your Inspection Online
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our convenient online scheduler to book your inspection at a time that works for you. 
              Select your service, choose your preferred date and time, and we'll handle the rest.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <span className="font-semibold text-yellow-800">Not seeing a time that accommodates your schedule or a service you need?</span>{" "}
              Just call and we'll make it happen!
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto shadow-lg">
            <CardContent className="p-0">
              <iframe 
                src='https://app.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/schedule?iframe=1' 
                style={{border: 0, height: '700px', width: '100%'}}
                title="Schedule Your Home Inspection"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Inspection?</h2>
          <p className="text-xl text-zinc-100 mb-8">
            We offer emergency inspection services for urgent situations. Contact us immediately for same-day service
            availability.
          </p>
          <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-50">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Line: {businessInfo.contact.phone}
          </Button>
        </div>
      </section>

      {/* Fixed Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium tracking-wide"
          asChild
        >
          <a href="#scheduler">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Now
          </a>
        </Button>
      </div>

      <Footer />
    </div>
  )
}
