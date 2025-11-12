import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
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
              Schedule Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Inspection
              </span>
            </h1>
            <p className="text-2xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Book your home inspection online with our convenient scheduler. Choose your preferred date and time, and we'll take care of the rest.
            </p>
          </div>
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
                src="https://dashboard.hiveinspect.com/embed/schedule/5c8e26c3-d7ed-4260-abab-292d6fee8432?iframe=1"
                style={{border: 0, height: '1100px', width: '100%'}}
                title="Schedule Home Inspection"
                allow="geolocation"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Inspection?</h2>
          <p className="text-xl text-gray-100 mb-8">
            We offer emergency inspection services for urgent situations. Contact us immediately for same-day service
            availability.
          </p>
          <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-50">
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
            Schedule Now
          </a>
        </Button>
      </div>

      <Footer />
    </div>
  )
}
