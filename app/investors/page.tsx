import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Eye, 
  BarChart3, 
  Building2, 
  FileCheck, 
  Camera, 
  Hammer, 
  RefreshCw,
  Target,
  DollarSign,
  AlertTriangle,
  HelpCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import businessInfo from "../../data/business-info.json"

export default function InvestorsPage() {
  const inspectionStages = [
    {
      title: "Pre-Purchase Due Diligence",
      icon: Eye,
      timing: "Before Acquisition",
      benefits: [
        "Accurate repair cost estimates for negotiation",
        "Identify deal-breakers before closing",
        "Budget planning for renovations",
        "Risk assessment and mitigation"
      ],
      description: "Comprehensive property evaluation to inform your investment decision and negotiation strategy."
    },
    {
      title: "Pre-Renovation Planning",
      icon: BarChart3,
      timing: "Before Construction Begins",
      benefits: [
        "Detailed baseline documentation",
        "Identify hidden issues before they become costly",
        "Prioritize renovation phases",
        "Create accurate project timelines"
      ],
      description: "Thorough assessment to create a strategic renovation plan and avoid costly surprises."
    },
    {
      title: "Draw/Phase Inspections",
      icon: Hammer,
      timing: "During Construction",
      benefits: [
        "Contractor accountability and quality control",
        "Progress verification for lender draws",
        "Code compliance monitoring",
        "Early detection of workmanship issues"
      ],
      description: "Regular inspections to ensure quality work and protect your investment throughout the renovation process."
    },
    {
      title: "Pre-Sale/Rental Inspections",
      icon: Target,
      timing: "Before Market Entry",
      benefits: [
        "Final quality assurance",
        "Address any remaining issues",
        "Maximize property value",
        "Reduce post-sale liability"
      ],
      description: "Final inspection to ensure your property is market-ready and maximize your return on investment."
    }
  ]

  const specializedServices = [
    {
      title: "2D & 3D Interior Mapping",
      icon: Camera,
      image: "/investor/plan.png",
      description: "Detailed floor plans and 3D visualizations for renovation planning and marketing materials.",
      features: [
        "Accurate room measurements and layouts",
        "3D virtual tours for remote viewing",
        "Before/after documentation",
        "Marketing-ready visual assets"
      ]
    },
    {
      title: "Draw/ Phase Documentation",
      icon: FileCheck,
      image: "/investor/draw.jpg",
      description: "Comprehensive photo and video documentation throughout your renovation project.",
      features: [
        "Time-stamped progress photos",
        "Detailed work completion reports",
        "Before/during/after comparisons",
        "Compliance verification documentation"
      ]
    },
    {
      title: "Re-Inspections & Follow-ups",
      icon: RefreshCw,
      image: "/investor/reinspection.png",
      description: "Follow-up inspections to verify contractor corrections and ongoing property maintenance.",
      features: [
        "Correction verification inspections",
        "Periodic maintenance assessments",
        "Tenant move-in/move-out inspections",
        "Insurance claim documentation"
      ]
    },
    {
      title: "Custom Inspection Services",
      icon: Building2,
      image: null,
      description: "Tailored inspection solutions designed specifically for your unique investment requirements.",
      features: [
        "Customized inspection protocols",
        "Specialized reporting formats",
        "Flexible scheduling options",
        "Industry-specific assessments"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="animated-bg text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow">
              <span className="block">Inspection Services</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                For Investors
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Strategic inspection services designed specifically for real estate investors. From due diligence to project completion, 
              we provide the insights and documentation you need to maximize returns and minimize risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-none font-medium tracking-wide transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                {businessInfo.contact.phone}
              </Button>

            </div>
          </div>
        </div>
      </section>

      

      {/* Specialized Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Specialized
              <span className="block font-semibold">Investor Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Beyond traditional inspections, we offer specialized services designed to support your investment goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <HelpCircle className="h-16 w-16 text-slate-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
                Protect Your
                <span className="block font-semibold">Investment ROI</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                Professional inspections aren't just about identifying problems—they're about maximizing your returns 
                and minimizing risks throughout your investment journey.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: DollarSign,
                    title: "Accurate Cost Estimation",
                    desc: "Precise repair estimates help you negotiate better purchase prices and budget effectively for renovations.",
                  },
                  {
                    icon: Shield,
                    title: "Risk Mitigation",
                    desc: "Early identification of major issues prevents costly surprises that can derail your project timeline and budget.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Contractor Accountability",
                    desc: "Regular progress inspections ensure quality work and help maintain project schedules and budgets.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-sm">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/other_images/commercial.jpeg"
                alt="Real estate investment property inspection"
                width={600}
                height={500}
                className="w-full h-auto shadow-xl rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-slate-100 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">25%</div>
                  <div className="text-sm text-slate-600">Average ROI Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Fixed Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium tracking-wide"
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
