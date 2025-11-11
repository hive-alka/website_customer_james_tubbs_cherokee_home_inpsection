import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Star, Award, Shield, Facebook, Edit, Linkedin, Instagram } from "lucide-react"
import businessInfo from "../data/business-info.json"
import certifications from "../data/certifications.json"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 gradient-text">{businessInfo.name}</h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">{businessInfo.tagline}</p>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-blue-100">{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {businessInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/FCHILLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/robbie-risley-78195520a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href="https://www.instagram.com/first.class.home.inspections?igsh=Y2JxbDhlMGNhMjMz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Edit className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Services - Enhanced */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Single Family Home Inspection",
                "Multi-Family Property Inspection",
                "Commercial Inspections",
                "Pre-Listing Inspections"
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours - Enhanced */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-400" />
              Business Hours
            </h3>
            <div className="space-y-2 text-blue-100 mb-4">
              <div className="flex justify-between">
                <span>Monday-Friday:</span>
                <span className="font-medium">{businessInfo.hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">Call to inquire</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Call to inquire</span>
              </div>
            </div>
            <div className="text-xs text-blue-200 leading-relaxed">
              <span className="font-medium">Flexible Scheduling:</span> We accommodate special days and times for busy schedules and out-of-town clients.
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                Service Areas
              </h4>
              <p className="text-sm text-blue-200 leading-relaxed">{businessInfo.serviceAreas.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Certifications - Enhanced */}
        <div className="border-t border-white/20 mt-12 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 mr-3 text-yellow-400" />
              Licensed & Certified
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-lg w-full">
                {certifications.certifications.map((cert, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 p-4 rounded-xl mb-3 group-hover:bg-white/20 transition-colors">
                      <div className="text-xs text-blue-200 font-medium">{cert.name}</div>
                      <div className="text-xs text-blue-300 mt-2">
                        {cert.name.includes("InterNACHI") && "InterNACHI-20030105"}
                        {cert.name.includes("Commercial") && "CCPIA-002502"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Enhanced */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} {businessInfo.name}. Powered by <a href="https://www.hiveinspect.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors underline">Hive</a> - AI Copilot for Home Inspectors.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-sm text-blue-200">Licensed & Insured</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm text-blue-200">{certifications.insurance.liability} Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
