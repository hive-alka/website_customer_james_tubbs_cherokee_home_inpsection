import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA Content */}
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
            Ready to Schedule <span className="font-semibold text-blue-600">Your Inspection?</span>
          </h2>
          <p className="text-xl text-zinc-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Take the first step towards peace of mind.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact#scheduler">
                Schedule Your Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
