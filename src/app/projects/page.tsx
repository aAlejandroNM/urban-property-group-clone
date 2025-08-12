"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";
import CarouselProjects from "@/components/ui/carouselProjects";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "The Waterfront, CCQ",
      location: "Gosford, NSW",
      status: "NOW SELLING",
      image: "https://ext.same-assets.com/319956013/1658223507.jpeg",
      featured: true
    },
    {
      id: 2,
      name: "ESTE",
      location: "Little Bay, NSW",
      status: "NOW SELLING",
      image: "https://ext.same-assets.com/319956013/1019608060.jpeg",
      featured: true
    },
    {
      id: 3,
      name: "The Halston",
      location: "North Strathfield, NSW",
      status: "NOW SELLING",
      image: "https://ext.same-assets.com/319956013/1366628589.png",
      featured: true
    },
    {
      id: 4,
      name: "La Vera",
      location: "Macquarie Park, NSW",
      status: "NOW SELLING",
      image: "https://ext.same-assets.com/319956013/811950631.jpeg",
      featured: false
    },
    {
      id: 5,
      name: "Edmondson Park Terraces",
      location: "Edmondson Park, NSW",
      status: "UNDER CONSTRUCTION",
      image: "https://ext.same-assets.com/319956013/2679136212.jpeg",
      featured: false
    },
    {
      id: 6,
      name: "Granville",
      location: "Granville, NSW",
      status: "UNDER CONSTRUCTION",
      image: "https://ext.same-assets.com/319956013/966863394.jpeg",
      featured: false
    },
    {
      id: 7,
      name: "Fitzwilliam Street",
      location: "Parramatta, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/2623614807.jpeg",
      featured: false
    },
    {
      id: 8,
      name: "Mayfair, Penrith",
      location: "Penrith, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/4078786776.jpeg",
      featured: false
    },
    {
      id: 9,
      name: "Castle Hill",
      location: "Castle Hill, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/3097284660.jpeg",
      featured: false
    },
    {
      id: 10,
      name: "Smith Street",
      location: "Wollongong, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/883489614.jpeg",
      featured: false
    },
    {
      id: 11,
      name: "Edmondson Park Apartments, Site 4",
      location: "Edmondson Park, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/1480394322.jpeg",
      featured: false
    },
    {
      id: 12,
      name: "Edmondson Park Apartments, Site 5",
      location: "Edmondson Park, NSW",
      status: "COMING SOON",
      image: "https://ext.same-assets.com/319956013/331271993.jpeg",
      featured: false
    },
    {
      id: 13,
      name: "Circa Residences, Burwood",
      location: "Burwood, NSW",
      status: "COMPLETED",
      image: "https://ext.same-assets.com/319956013/3823522318.png",
      featured: false
    },
    {
      id: 14,
      name: "Lumina",
      location: "Penrith, NSW",
      status: "COMPLETED",
      image: "https://ext.same-assets.com/319956013/431250789.jpeg",
      featured: false
    },
    {
      id: 15,
      name: "Navali, Penrith",
      location: "Penrith, NSW",
      status: "COMPLETED",
      image: "https://ext.same-assets.com/319956013/522863361.jpeg",
      featured: false
    },
    {
      id: 16,
      name: "The Parq, Bexley",
      location: "Bexley, NSW",
      status: "COMPLETED",
      image: "https://ext.same-assets.com/319956013/3607541302.jpeg",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "NOW SELLING":
        return "text-green-600 font-medium";
      case "UNDER CONSTRUCTION":
        return "text-orange-600 font-medium";
      case "COMING SOON":
        return "text-blue-600 font-medium";
      case "COMPLETED":
        return "text-gray-600 font-medium";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar transparentOnHero={true} heroHeight={600} />

      {/* Hero Carousel Section */}
      <Reveal>
      <CarouselProjects
        projects={[
          {
            id: 1,
            name: "The Waterfront, CCQ",
            location: "Gosford, NSW",
            image: "https://ext.same-assets.com/319956013/1658223507.jpeg"
          },
          {
            id: 2,
            name: "ESTE",
            location: "Little Bay, NSW",
            image: "https://ext.same-assets.com/319956013/1019608060.jpeg"
          },
          {
            id: 3,
            name: "The Halston",
            location: "North Strathfield, NSW",
            image: "https://ext.same-assets.com/319956013/1366628589.png"
          },
          {
            id: 4,
            name: "La Vera",
            location: "Macquarie Park, NSW",
            image: "https://ext.same-assets.com/319956013/811950631.jpeg"
          },
          {
            id: 5,
            name: "Edmondson Park Terraces",
            location: "Edmondson Park, NSW",
            image: "https://ext.same-assets.com/319956013/2679136212.jpeg"
          }
        ]}
      />
      </Reveal>

        {/* Welcome Section */}

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
              <h2 className="text-5xl font-bold text-center text-black mb-16">
                Our Projects
              </h2>
          </Reveal>

            {/* Featured Projects Carousel */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project) => (
              <Reveal key={project.id} className="delay-100">
              <Card key={project.id} className="overflow-hidden border-0 shadow-lg group cursor-pointer">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 text-xs text-gray-600">
                    Artist's impression only*
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{project.name}</h3>
                  <p className="text-gray-500 mb-2">{project.location}</p>
                  <p className={getStatusColor(project.status)}>{project.status}</p>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>

          {/* View by Location Section */}
          <Reveal>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black mb-8">View by location</h3>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.073060824878!2d-73.34824462505628!3d5.5561886336478645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7d6072b25591%3A0xa1b4bf6452764811!2sViva%20Centro%20Comercial.!5e0!3m2!1ses-419!2sco!4v1754863017708!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Reveal>
                <h3 className="text-lg font-medium mb-4">Navigate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
                </Reveal>
              </div>

              <div>
                <Reveal>
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Suite 110, Level 1</p>
                  <p>180-186 Burwood Road</p>
                  <p>Burwood NSW 2134</p>
                  <p className="mt-4">(02) 9744 3333</p>
                  <p>reception@urbanpropertygroup.com.au</p>
                </div>
                </Reveal>
              </div>

              <div>
                <Reveal>
                <h3 className="text-lg font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">YouTube</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                </ul>
                </Reveal>
              </div>
            </div>

            {/* Newsletter Signup */}
            <Reveal>
            <div>
              <h3 className="text-lg font-medium mb-4">Get Urban Updates</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First name*</Label>
                    <Input
                      id="firstName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last name*</Label>
                    <Input
                      id="lastName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email address*</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the Privacy Policy and accept the Terms of Use
                  </label>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6">
                  Submit
                </Button>
              </form>
            </div>
            </Reveal>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <Reveal>
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>Urban Property Group acknowledges the Traditional Custodians of the land which our business operates. We pay our respects to Aboriginal and Torres Strait Islanders Elders past, present and future.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">URBAN</h1>
                <span className="ml-2 text-sm text-gray-400">PROPERTY</span>
              </div>
            </Reveal>
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
