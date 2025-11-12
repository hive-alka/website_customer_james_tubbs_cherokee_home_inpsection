import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"
import businessInfo from "../data/business-info.json"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-zinc-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main 3-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Column 1: Company & Contact */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">{businessInfo.name}</h3>
            <p className="text-sm text-zinc-600 mb-4">{businessInfo.tagline}</p>

            <div className="space-y-2 text-sm">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="flex items-center text-zinc-600 hover:text-blue-600 transition-colors group"
              >
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                <span className="font-medium">{businessInfo.contact.phone}</span>
              </a>
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-center text-zinc-600 hover:text-blue-600 transition-colors group"
              >
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                <span>{businessInfo.contact.email}</span>
              </a>
              <div className="flex items-start text-zinc-600">
                <MapPin className="h-4 w-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{businessInfo.address.full}</span>
              </div>
            </div>

            {/* Social Media - Icon Only */}
            <div className="flex space-x-3 mt-5">
              <a
                href="https://www.facebook.com/FCHILLC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/robbie-risley-78195520a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/first.class.home.inspections?igsh=Y2JxbDhlMGNhMjMz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-zinc-600 hover:text-blue-600 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Info */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 mb-4">Business Info</h4>

            {/* Hours - Compact */}
            <div className="text-sm text-zinc-600 mb-4">
              <span className="font-semibold text-zinc-900">Hours:</span> Mon-Sat 8AM-10PM
            </div>

            {/* Service Areas */}
            <div className="text-sm text-zinc-600">
              <span className="font-semibold text-zinc-900">Service Areas:</span> {businessInfo.serviceAreas.join(", ")}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {businessInfo.name}. Powered by{" "}
            <a
              href="https://www.hiveinspect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors underline"
            >
              Hive
            </a>
            {" "}- AI Copilot for Home Inspectors.
          </p>
        </div>
      </div>
    </footer>
  )
}
