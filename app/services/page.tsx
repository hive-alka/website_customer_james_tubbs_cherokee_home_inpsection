import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive inspection services for residential and commercial properties. We provide detailed reports
              to help you make informed decisions with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

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
                        <CardTitle className="text-xl md:text-2xl group-hover:text-blue-600 transition-colors mb-2">
                          {service.name}
                        </CardTitle>
                        <Badge className="bg-blue-100 text-blue-900 px-2 py-1 text-sm">
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
                      <Zap className="h-4 w-4 mr-2 text-blue-600" />
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

                  <div className="flex gap-3">
                    <Button className="flex-1 btn-cool text-white font-semibold rounded-full text-base group" asChild>
                      <Link href="/contact#scheduler">
                        Schedule Now
                        <Award className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 gradient-border font-semibold rounded-full text-base hover:bg-blue-50"
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
                            : service.id === 'pre-listing-inspection'
                            ? "https://app.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71?slug=my-inspection-company-80e1c9ee71"
                            : service.id === 'radon-testing'
                            ? "https://estategpt-customer-website-data.s3.amazonaws.com/robbie-firstclasshomeinspections/Sample%20Radon%20Test%20Report.pdf"
                            : service.id === 'termite-inspection'
                            ? "https://estategpt-customer-website-data.s3.amazonaws.com/robbie-firstclasshomeinspections/termite_inspection_report-45242d7ec5958010853b69fb41d5025c.pdf"
                            : "https://reports.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71/sample_report?sample_id=29126"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sample Report
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

      {/* Sample Reports Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More{" "}
              <span className="text-blue-600">Sample Reports</span>
            </h2>Similarly in the home page. 
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Review our detailed inspection reports to understand what you can expect from our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wood Destroying Insect Report */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wood Destroying Insect</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  See a complete NPMA-33 form inspection report for termites and other wood-destroying insects
                </p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full"
                  asChild
                >
                  <Link 
                    href="https://estategpt-customer-website-data.s3.amazonaws.com/robbie-firstclasshomeinspections/termite_inspection_report-45242d7ec5958010853b69fb41d5025c.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sample Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Radon Testing Report */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Radon Testing</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Review a comprehensive radon testing report showing measurement procedures and results
                </p>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full"
                  asChild
                >
                  <Link 
                    href="https://estategpt-customer-website-data.s3.amazonaws.com/robbie-firstclasshomeinspections/Sample%20Radon%20Test%20Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sample Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* More Sample Reports */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">More Samples</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Browse additional sample reports across all our inspection services and specialties
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full"
                  asChild
                >
                  <Link 
                    href="https://app.spectora.com/home-inspectors/my-inspection-company-80e1c9ee71?slug=my-inspection-company-80e1c9ee71"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse All Samples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Testing & 
              <span className="text-blue-600"> Specialty Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing services to ensure your home's safety and your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Radon Testing */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/radon.png"
                  alt="Radon Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Radon Testing</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Ensure your property is free from dangerous radon gas, a leading cause of lung cancer.
                </p>
                <Badge className="bg-orange-100 text-orange-800 text-xs px-2 py-1">
                  Essential Safety
                </Badge>
              </CardContent>
            </Card>

            {/* Wood-Destroying Insect Inspections */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/termite.png"
                  alt="Wood-Destroying Insect Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wood-Destroying Insect (WDI)</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Protect from termites, carpenter ants, bees, and beetles. NPMA-33 form for FHA, VA, USDA loans.
                </p>
                <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1">
                  Structure Guard
                </Badge>
              </CardContent>
            </Card>

            {/* Sewer Camera Inspections */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-slate-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/sewer_cam.png"
                  alt="Sewer Camera Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sewer Camera Inspections</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Evaluate sewer lines to detect clogs, damage, or issues before costly repairs.
                </p>
                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1">
                  Preventive Care
                </Badge>
              </CardContent>
            </Card>

            {/* Water Quality Testing */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/water.png"
                  alt="Water Quality Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Water Quality Testing</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Verify water safety from basic FHA/VA tests to advanced Health Scans for wells and ponds.
                </p>
                <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">
                  Health Protection
                </Badge>
              </CardContent>
            </Card>

            {/* Environmental Testing */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-amber-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/mold.png"
                  alt="Environmental Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental Testing</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Air quality, mold, and asbestos testing with trusted partners for accurate results.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1">
                  Air Quality
                </Badge>
              </CardContent>
            </Card>

            {/* PSMA Septic Inspections */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/psma.jpeg"
                  alt="PSMA Septic Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">PSMA Septic Inspections</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Comprehensive invasive inspections of private septic systems beyond basic dye-tests.
                </p>
                <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">
                  System Critical
                </Badge>
              </CardContent>
            </Card>

            {/* Pre-Drywall Inspections */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/drywall.png"
                  alt="Pre-Drywall Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Drywall Inspections</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  New construction inspection of framing, electrical, plumbing, HVAC before drywall installation.
                </p>
                <Badge className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1">
                  New Construction
                </Badge>
              </CardContent>
            </Card>

            {/* New Home Warranty Inspections */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
              <div className="relative h-32 w-full">
                <Image
                  src="/addon_services/home-warranty.jpg"
                  alt="New Home Warranty Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">New Home Warranty</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Pre-warranty expiration inspection to identify builder-covered issues for repairs.
                </p>
                <Badge className="bg-pink-100 text-pink-800 text-xs px-2 py-1">
                  Warranty Guard
                </Badge>
              </CardContent>
            </Card>

            {/* Custom Services */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Need Something Else?</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Custom inspection services tailored to your specific needs. Just ask!
                </p>
                <Badge className="bg-teal-100 text-teal-800 text-xs px-2 py-1">
                  Custom Solutions
                </Badge>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Service Areas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We proudly serve homeowners, investors, and real estate professionals throughout Western Pennsylvania with comprehensive inspection services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/pa.png"
                    alt="Western Pennsylvania Service Area Map"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                    <span className="text-sm font-medium text-gray-700">Western Pennsylvania</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas List */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Primary Service Areas
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Mercer",
                    "Venango",
                    "Clarion",
                    "Jefferson",
                    "Lawrence",
                    "Beaver",
                    "Butler",
                    "Armstrong",
                    "Indiana",
                    "Washington",
                    "Allegheny",
                    "Westmoreland",
                    "Greene",
                    "Fayette",
                    "Somerset"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-900">Outside our primary areas?</strong> We may still be able to serve you! 
                        Additional travel fees may apply for locations beyond our standard service radius. 
                        <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                          Contact us to discuss
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
            Need a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Custom</span>{" "}
            Inspection Package?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            We can customize our services to meet your specific needs. Contact us to discuss your requirements and get a
            personalized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/20 font-bold px-8 py-3 rounded-full text-lg group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call {businessInfo.contact.phone}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact#scheduler">
                Schedule Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
