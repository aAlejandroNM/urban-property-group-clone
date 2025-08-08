import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/319956013/2439084727.jpeg')"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Comprehensive property development solutions from conception to completion
              </p>
            </div>
          </div>
        </section>

        {/* Development Planning Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://ext.same-assets.com/319956013/1100128711.png"
                  alt="Development Planning"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Development Planning & Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Every successful property development begins with thorough planning and strategic consultation.
                  Our experienced team guides clients through every aspect of the development process, ensuring
                  projects are delivered on time, within budget, and to the highest standards.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Site Analysis & Feasibility</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Planning Applications</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Financial Modeling</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Design Coordination</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Risk Assessment</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Market Research</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Development Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <img
                  src="https://ext.same-assets.com/319956013/964185830.png"
                  alt="Property Development"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Property Development & Construction
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  From ground-breaking to final handover, Urban Property Group manages every aspect
                  of the construction process. Our integrated approach ensures seamless delivery of
                  high-quality residential, mixed-use, and commercial developments across Australia.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Residential Apartments</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Mixed-Use Developments</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Commercial Projects</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Build-to-Rent</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Retail Spaces</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Infrastructure</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales & Marketing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://ext.same-assets.com/319956013/1053349498.png"
                  alt="Sales and Marketing"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Sales & Marketing Services
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our comprehensive sales and marketing approach ensures maximum market penetration
                  and sales success. From brand development to customer acquisition, we provide
                  end-to-end support to drive project success and maximize return on investment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Brand Strategy & Positioning</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Digital Marketing</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Sales Team Management</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Display Suite Development</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Customer Relationship Management</h3>
                    <h3 className="font-semibold text-gray-900 border-b-2 border-black pb-2 mb-4">Aftercare Services</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Development Journey?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact our expert team to discuss how we can bring your property development vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigate</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
                <Link href="/careers" className="block text-gray-300 hover:text-white">Careers</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-gray-300 hover:text-white">Privacy Policy</Link>
                <a href="#" className="block text-gray-300 hover:text-white">Terms & Conditions</a>
                <a href="#" className="block text-gray-300 hover:text-white">Cookie Declaration</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Suite 110, Level 1</p>
                <p>180-186</p>
                <p>Burwood Road</p>
                <p>Burwood NSW 2134</p>
                <p>(02) 9744 3333</p>
                <p>reception@urbanpropertygroup.com.au</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="block text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="block text-gray-300 hover:text-white">YouTube</a>
                <a href="#" className="block text-gray-300 hover:text-white">LinkedIn</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Get Urban Updates</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="Your First Name" className="px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400" />
                  <input type="text" placeholder="Your Last Name" className="px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400" />
                </div>
                <input type="email" placeholder="Your email address" className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400" />
                <div className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-gray-400">I agree to the Privacy Policy and accept the Terms of Use</label>
                </div>
                <button type="submit" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                Urban Property Group acknowledges the Traditional Custodians of the land which our business operates. We pay our respects to Aboriginal and Torres Strait Islanders Elders past, present and future.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="text-2xl font-bold">URBAN <span className="text-gray-400">PROPERTY</span></div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">© Urban Property Group 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
