import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Urban Property Group complies with the Australian Privacy Principles contained
              in the Privacy Act 1988 to protect the personal information Urban Property
              Group holds about individuals.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Urban Property Group's policy is to only collect personal information which is
              reasonably necessary for its dealings with the relevant individual. We take
              reasonable steps to protect personal information from unauthorised access,
              modification, misuse, interference and loss.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-12">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Urban Property Group's Privacy Policy
              </h2>
              <p className="text-sm text-gray-500 mb-6">Updated March 2024</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h3>
              <p className="text-gray-700 mb-4">
                Urban Property Group is an Australian property group with integrated development
                and asset management capabilities. Our operations are principally located in
                Sydney, and our key activities include asset management and development of
                commercial, retail and residential assets.
              </p>
              <p className="text-gray-700">
                This Policy details how Urban Property Group handles personal information in
                accordance with the Privacy Act and Privacy Principles.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Collection of Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that is reasonably necessary for our business operations.
                Examples include when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Purchase or express interest in an Urban Property Group home or apartment</li>
                <li>Register for newsletters, programs, or promotions</li>
                <li>Visit our sites, offices or managed buildings</li>
                <li>Use our websites, social media or online services</li>
                <li>Seek employment with Urban Property Group</li>
                <li>Otherwise interact with Urban Property Group</li>
              </ul>
              <p className="text-gray-700">
                Types of information we collect include personal details, contact information,
                financial information, professional details, and information about your
                interactions with our services.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Use and Disclosure of Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We use personal information for purposes including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Managing our relationship with you</li>
                <li>Providing products or services that you have requested</li>
                <li>Communicating with you</li>
                <li>Managing and enhancing our products and services</li>
                <li>Providing marketing information about relevant products and services</li>
                <li>Complying with regulatory and legal obligations</li>
              </ul>
              <p className="text-gray-700">
                We may disclose your personal information to contractors, consultants, and
                service providers who assist us in our business operations, but only in
                accordance with the Australian Privacy Principles.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. Security of Personal Information
              </h3>
              <p className="text-gray-700">
                Urban Property Group takes reasonable steps to protect personal information
                from misuse, interference, loss, and unauthorised access. We maintain physical
                security measures and use encryption and other technologies to ensure secure
                transmission of information.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. Access to Your Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                You are entitled to access your personal information held by Urban Property Group.
                To request access, please contact our Privacy Officer using the details below.
              </p>
              <p className="text-gray-700">
                This service is free of charge unless the request requires additional preparation
                time, in which case we will provide a reasonable estimate of costs.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                6. Complaints
              </h3>
              <p className="text-gray-700 mb-4">
                You can make a complaint to Urban Property Group if you believe we have breached
                our obligations under the Privacy Act. Any complaint should be made in writing
                using the contact details below.
              </p>
              <p className="text-gray-700 mb-4">
                We will acknowledge receipt of your complaint within a week and investigate
                your complaint promptly. In most cases, we will investigate and respond to
                a complaint within 30 days.
              </p>
              <p className="text-gray-700">
                If you are not satisfied with our response, you can refer your complaint to
                the Office of the Australian Information Commissioner (OAIC) at 1300 363 992
                or www.oaic.gov.au.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                7. Changes to This Policy
              </h3>
              <p className="text-gray-700 mb-4">
                We may update this Policy from time to time to reflect current information
                handling practices or changes to our operations. When we do so, the updated
                Policy will be available on our website.
              </p>
              <p className="text-gray-700">
                We recommend that you regularly visit our website and review this Policy.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or wish to make a complaint,
                please contact our Privacy Officer:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Urban Property Group</strong></p>
                <p className="text-gray-700">Suite 110, Level 1</p>
                <p className="text-gray-700">180-186 Burwood Road</p>
                <p className="text-gray-700">Burwood NSW 2134</p>
                <p className="text-gray-700 mt-2">
                  Phone: <a href="tel:(02) 9744 3333" className="text-black hover:underline">(02) 9744 3333</a>
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:reception@urbanpropertygroup.com.au" className="text-black hover:underline">
                    reception@urbanpropertygroup.com.au
                  </a>
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <section className="border-t pt-8">
              <p className="text-sm text-gray-500">
                This Policy was last approved and adopted by Urban Property Group on 18 March 2024.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
                <Link href="#" className="block text-gray-300 hover:text-white">Terms & Conditions</Link>
                <Link href="#" className="block text-gray-300 hover:text-white">Cookie Declaration</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Suite 110, Level 1</p>
                <p>180-186 Burwood Road</p>
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
