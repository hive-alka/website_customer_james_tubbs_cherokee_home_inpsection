"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import businessInfo from "../../data/business-info.json"
import faqData from "../../data/faq.json"

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (faqId: number) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

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
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Questions
              </span>
            </h1>
            <p className="text-2xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our home inspection services, process, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Elegant Single Column Design */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
              Everything You Need
              <span className="block font-semibold">to Know</span>
            </h2>
            <p className="text-xl text-zinc-600 font-light leading-relaxed">
              Get clear, detailed answers to help you understand our inspection process and make informed decisions
            </p>
          </div>

          <div className="space-y-4">
            {faqData.faqs.map((faq, index) => (
              <Collapsible key={faq.id} open={openFaq === faq.id} onOpenChange={() => toggleFaq(faq.id)}>
                <CollapsibleTrigger className="w-full bg-white border border-zinc-200 rounded-xl p-6 text-left hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-zinc-100 to-zinc-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-800 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-800 transition-colors pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
                      <ChevronDown 
                        className={`w-4 h-4 text-zinc-500 group-hover:text-blue-800 transition-all duration-300 ${
                          openFaq === faq.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white border-x border-b border-zinc-200 rounded-b-xl">
                  <div className="px-6 pb-6">
                    <div className="pl-12 pt-4 border-t border-zinc-100">
                      <p className="text-zinc-600 leading-relaxed">
                        {faq.answer.includes('Call now') ? (
                          <>
                            {faq.answer.split('Call now')[0]}
                            <a 
                              href={`tel:${businessInfo.contact.phone}`}
                              className="text-blue-800 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
                            >
                              Call now
                            </a>
                            {faq.answer.split('Call now')[1]}
                          </>
                        ) : faq.answer.includes('About Me') ? (
                          <>
                            {faq.answer.split('About Me')[0]}
                            <Link 
                              href="/about"
                              className="text-blue-800 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
                            >
                              About Me
                            </Link>
                            {faq.answer.split('About Me')[1]}
                          </>
                        ) : (
                          faq.answer
                        )}
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Still Have Questions?</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help you with any specific questions about your inspection needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 font-medium tracking-wide transition-all duration-300"
                  asChild
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {businessInfo.contact.phone}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-zinc-50 px-8 py-3 font-medium tracking-wide transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
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
