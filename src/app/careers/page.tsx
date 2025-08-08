import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-20 md:pt-48 pb-16 md:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 lg:col-start-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Join our<br />exceptional team
                </h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Urban Property Group operates through integrated teams focused on
                  development, design, construction, property management (handled by
                  Urban Places), customer service, and aftercare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Opportunities Section */}
        <section className="pb-16 md:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Current Opportunities
            </h2>

            <div className="border-t border-b border-gray-200 py-14 md:py-24 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-2xl md:text-3xl text-gray-600 font-light">
                  We are not actively hiring for any roles but we always love to hear from talented candidates.
                </p>
                <p className="text-2xl md:text-3xl text-gray-600 font-light">
                  Email us at{" "}
                  <a
                    href="mailto:careers@urbanpropertygroup.com.au"
                    className="text-black hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    careers@urbanpropertygroup.com.au
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Join Urban Property Group?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Be part of a dynamic team that's shaping the future of property development in Australia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & Growth</h3>
                  <p className="text-gray-700">
                    Work on cutting-edge projects that push the boundaries of sustainable development and community building.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Culture</h3>
                  <p className="text-gray-700">
                    Join integrated teams where your expertise contributes to every stage of the development process.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
                  <p className="text-gray-700">
                    Advance your career with opportunities for learning, mentorship, and leadership in a growing company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
            <p className="text-xl mb-8 text-gray-300">
              We're always looking for exceptional talent to join our team. Get in touch to explore opportunities.
            </p>
            <a href="mailto:careers@urbanpropertygroup.com.au">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3">
                Send Your Resume
              </Button>
            </a>
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
