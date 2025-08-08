import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";

export default function AboutPage() {
  const teamMembers = [
    { name: "George Elias", role: "Founder", image: "https://ext.same-assets.com/319956013/3094447056.jpeg" },
    { name: "John Brogden AM", role: "Chair, Urban Advisory Board", image: "https://ext.same-assets.com/319956013/3688405086.jpeg" },
    { name: "Julie Bindon", role: "Member, Urban Advisory Board", image: "https://ext.same-assets.com/319956013/2823347607.jpeg" },
    { name: "Patrick Elias", role: "CEO", image: "https://ext.same-assets.com/319956013/3878113107.jpeg" },
    { name: "Mark Elias", role: "Co-CEO", image: "https://ext.same-assets.com/319956013/2934608637.jpeg" },
    { name: "Kristina Cejka", role: "Head of People & Culture", image: "https://ext.same-assets.com/319956013/4215812109.jpeg" },
    { name: "Tom McIvor", role: "Sales Director", image: "https://ext.same-assets.com/319956013/3840092888.jpeg" },
    { name: "Roy Massoud", role: "Construction Director", image: "https://ext.same-assets.com/319956013/83485448.png" },
    { name: "Viona Lim", role: "Group Financial Controller", image: "https://ext.same-assets.com/319956013/2939098384.jpeg" },
    { name: "Nick Gaudry", role: "General Manager", image: "https://ext.same-assets.com/319956013/4264330155.jpeg" },
    { name: "Chris Ferreira", role: "Head of Planning", image: "https://ext.same-assets.com/319956013/830942521.jpeg" },
    { name: "Michael Boutros", role: "Construction Manager", image: "https://ext.same-assets.com/319956013/2168410575.jpeg" },
    { name: "Simon Doyle", role: "General Counsel", image: "https://ext.same-assets.com/319956013/4018985217.jpeg" },
    { name: "George Massoud", role: "Design Director", image: "https://ext.same-assets.com/319956013/876582687.jpeg" },
    { name: "Grace Bogomiagkov", role: "Asset & Completion Manager", image: "https://ext.same-assets.com/319956013/4117116177.jpeg" },
    { name: "Tony Jreige", role: "Head of Development Delivery", image: "https://ext.same-assets.com/319956013/331448573.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
                  Fully integrated. Personally committed. Built for real life.
                </h1>
              </div>
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/319956013/262662780.jpeg"
                  alt="Modern living space"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  We build places that feel like home and neighbourhoods that bring people together.
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Our homes are smart, well-built, and designed to last. We think about how they look, how they work, and how they connect with the people and places around them.
                </p>
                <p className="text-lg font-medium text-black">
                  No shortcuts. No compromises.
                </p>
              </div>
              <div>
                {/* This could be another image or content */}
              </div>
            </div>
          </div>
        </section>

        {/* The Urban Way Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-black mb-16">The Urban Way</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Quality in Every Home */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-6">Quality in Every Home.</h3>
                <p className="text-gray-700">
                  From first homes to luxury living, affordable options to specialist housing, every Urban home is thoughtfully designed and built to last. Because everyone deserves a place they're proud to call home.
                </p>
              </div>

              {/* Connected Living */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-6">Connected Living, Made Easy.</h3>
                <p className="text-gray-700">
                  We build homes close to transport, shops, and services - making everyday life easier. Our communities are vibrant, sustainable, and thoughtfully designed to help you feel at home from day one.
                </p>
              </div>

              {/* Smart Delivery */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-6">Smart Delivery. Personal Touch.</h3>
                <p className="text-gray-700">
                  We manage every step of the journey, from land to handover, with the experience of a skilled team and the care of a family-run business. Our integrated model means faster decisions, stronger delivery, and homes built with purpose, pride, and no shortcuts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Large Building Image */}
        <section className="py-0">
          <div className="w-full">
            <img
              src="https://ext.same-assets.com/319956013/163485647.jpeg"
              alt="Urban development"
              className="w-full h-96 md:h-[32rem] object-cover"
            />
          </div>
        </section>

        {/* Achievement Sections */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* 40 Years */}
              <div>
                <h3 className="text-2xl font-bold mb-4">We've operated for nearly 40 years.</h3>
                <h4 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">WHAT THIS MEANS FOR YOU</h4>
                <p className="text-gray-300 text-sm">
                  Since 1987, we've built a diverse range of properties in Australia, and with every brick laid we've grown our reputation for excellence in every aspect of construction and development.
                </p>
              </div>

              {/* iCIRT Rating */}
              <div>
                <h3 className="text-2xl font-bold mb-4">We are proudly iCIRT rated developers & builders.</h3>
                <h4 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">WHAT THIS MEANS FOR YOU</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We are proud to be a leading developer and builder who has been independently rated by Equifax Independent Construction Industry Rating Tool (iCIRT) and pleased to be one of the first Developers to receive an as-built BTI rating from KPMG Origins, an independent assessor of "trustworthy buildings."
                </p>
                <a href="#" className="text-blue-400 text-sm hover:underline">→ Learn more about iCIRT ratings</a>
              </div>

              {/* Latent Defects Insurance */}
              <div>
                <h3 className="text-2xl font-bold mb-4">We offer Latent Defects Insurance.</h3>
                <h4 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">WHAT THIS MEANS FOR YOU</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We are proud to be the first developer/builder in Australia to act on the government's call to action and take up Latent Defects Insurance. Our customer first philosophy to development makes Latent Defects Insurance an important addition to our development product.
                </p>
                <a href="#" className="text-blue-400 text-sm hover:underline">→ Learn more about LDI</a>
              </div>
            </div>
          </div>
        </section>

        {/* Every Step Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black mb-16">Every Step, Expertly Handled.</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="https://ext.same-assets.com/319956013/4181400421.jpeg"
                  alt="Urban building development"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Acquisition</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Planning</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Design</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Construction</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Property Management</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
                <div className="border-b border-gray-200 py-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-xl font-bold text-black">Aftercare</span>
                    <span className="text-2xl text-gray-400">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* U-Crew Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">Meet our U-Crew.</h2>
                <p className="text-lg text-gray-700">
                  Our in-house maintenance team keeps Urban buildings performing at their best. With skills in carpentry, waterproofing, and general repairs, they respond quickly to fix issues and keep our spaces safe, functional, and well maintained.
                </p>
              </div>
              <div>
                <img
                  src="https://ext.same-assets.com/319956013/1505342664.webp"
                  alt="U-Crew maintenance team"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-black mb-16">Our Team. Your Assurance.</h2>

            <div className="mb-12">
              <h3 className="text-lg font-medium text-gray-500 mb-8">Leadership Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-bold text-black text-sm">{member.name}</h4>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-gray-500 mb-12 tracking-wide">TOGETHER, WE BUILD BETTER.</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <img
                src="https://ext.same-assets.com/319956013/3120195480.png"
                alt="Partner logo"
                className="h-16 object-contain"
              />
              <img
                src="https://ext.same-assets.com/319956013/2524258840.png"
                alt="Partner logo"
                className="h-16 object-contain"
              />
              <img
                src="https://ext.same-assets.com/319956013/3120195480.png"
                alt="Partner logo"
                className="h-16 object-contain"
              />
              <img
                src="https://ext.same-assets.com/319956013/2524258840.png"
                alt="Partner logo"
                className="h-16 object-contain"
              />
            </div>
          </div>
        </section>

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
