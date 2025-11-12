"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Sparkles } from "lucide-react"
import businessInfo from "../data/business-info.json"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-zinc-200"
          : isHomePage
            ? "bg-transparent"
            : "bg-white shadow-sm"
      }`}
    >
      {/* Top bar with gradient */}
      <div className="animated-bg text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center group">
                <div className="pulse-ring">
                  <Phone className="h-4 w-4 mr-2" />
                </div>
                <a href={`tel:${businessInfo.contact.phone}`} className="hover:text-blue-200 transition-colors">
                  {businessInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${businessInfo.contact.email}`} className="hover:text-blue-200 transition-colors">
                  {businessInfo.contact.email}
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
              <span className="text-shadow">
                Serving {businessInfo.serviceAreas.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.jpg"
                alt="Cherokee Home Inspection LLC Logo"
                width={360}
                height={120}
                className="h-20 w-auto hover:scale-105 transition-transform"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
            <Link href="/contact#scheduler">
              <Button className="btn-cool text-white font-semibold px-6 py-2 rounded-full">Schedule Inspection</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 p-2 rounded-lg hover:bg-zinc-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t glass-effect rounded-lg mb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link href="/contact#scheduler">
                <Button className="btn-cool text-white font-semibold mx-4 rounded-full">Schedule Inspection</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
