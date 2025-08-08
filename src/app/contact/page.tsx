import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/ui/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="border-l-4 border-gray-300 pl-8">
                <h1 className="text-4xl font-bold text-black mb-12">Get in touch</h1>

                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First name*</Label>
                      <Input
                        id="firstName"
                        className="mt-1 border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last name*</Label>
                      <Input
                        id="lastName"
                        className="mt-1 border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email address*</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1 border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0"
                      placeholder=""
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1 border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0"
                      placeholder=""
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <Label htmlFor="enquiryType" className="text-sm font-medium text-gray-700">Enquiry Type</Label>
                    <select
                      id="enquiryType"
                      className="mt-1 w-full border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 py-2"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="general">General Enquiry</option>
                      <option value="sales">Sales Enquiry</option>
                      <option value="aftercare">Aftercare</option>
                      <option value="media">Media</option>
                    </select>
                  </div>

                  {/* Country and Postcode */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country</Label>
                      <select
                        id="country"
                        className="mt-1 w-full border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 py-2"
                      >
                        <option value="australia">Australia</option>
                        <option value="new-zealand">New Zealand</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="postcode" className="text-sm font-medium text-gray-700">Postcode</Label>
                      <Input
                        id="postcode"
                        className="mt-1 border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 px-0"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-1 border-2 border-gray-300 rounded-none bg-transparent focus:border-black focus:ring-0 resize-none"
                      placeholder="Message"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="privacy" className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-gray-700">
                        I agree to the <a href="#" className="underline">Privacy Policy</a> and accept the <a href="#" className="underline">Terms of Use</a>
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="newsletter" className="mt-1" />
                      <label htmlFor="newsletter" className="text-sm text-gray-700">
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-base">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black text-white p-8 rounded-lg">

                {/* Head Office */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">HEAD OFFICE</h3>
                  <div className="space-y-1 text-sm">
                    <p>Suite 110, Level 1</p>
                    <p>180-186 Burwood Road</p>
                    <p>Burwood NSW 2134</p>
                  </div>
                  <div className="mt-4 space-y-1 text-sm">
                    <p>(02) 9744 3333</p>
                    <p>reception@urbanpropertygroup.com.au</p>
                  </div>
                </div>

                {/* Media */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">MEDIA</h3>
                  <p className="text-sm">media@urbanpropertygroup.com.au</p>
                </div>

                {/* Sales */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">SALES</h3>
                  <div className="space-y-1 text-sm">
                    <p>(02) 9744 3333</p>
                    <p>enquiries@urbanpropertygroup.com.au</p>
                  </div>
                </div>

                {/* Aftercare */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">AFTERCARE</h3>
                  <div className="space-y-1 text-sm">
                    <p>(02) 9744 3333</p>
                    <p>repairs@urbanpropertygroup.com.au</p>
                  </div>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">FOLLOW US</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span>→</span>
                      <a href="#" className="hover:text-gray-300">Instagram</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>→</span>
                      <a href="#" className="hover:text-gray-300">Facebook</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>→</span>
                      <a href="#" className="hover:text-gray-300">YouTube</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>→</span>
                      <a href="#" className="hover:text-gray-300">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Navigate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Suite 110, Level 1</p>
                  <p>180-186 Burwood Road</p>
                  <p>Burwood NSW 2134</p>
                  <p className="mt-4">(02) 9744 3333</p>
                  <p>reception@urbanpropertygroup.com.au</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">YouTube</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-medium mb-4">Get Urban Updates</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="footerFirstName" className="text-gray-300">First name*</Label>
                    <Input
                      id="footerFirstName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="footerLastName" className="text-gray-300">Last name*</Label>
                    <Input
                      id="footerLastName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="footerEmail" className="text-gray-300">Email address*</Label>
                  <Input
                    id="footerEmail"
                    type="email"
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="footerTerms" className="mt-1" />
                  <label htmlFor="footerTerms" className="text-sm text-gray-300">
                    I agree to the Privacy Policy and accept the Terms of Use
                  </label>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>Urban Property Group acknowledges the Traditional Custodians of the land which our business operates. We pay our respects to Aboriginal and Torres Strait Islanders Elders past, present and future.</p>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">URBAN</h1>
                <span className="ml-2 text-sm text-gray-400">PROPERTY</span>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-4">
              © Urban Property Group 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
