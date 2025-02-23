import { useState, useEffect } from "react"
import { ArrowRight, Menu, X, Image, UserCheck, Users, Clock, Globe, Lock, Shield } from "lucide-react"

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault()
      const target = e.target
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Preserve Your Memories, Securely</h1>
          <p className="text-xl md:text-2xl mb-8">
            TimeCaps: Your unified platform for storing and sharing life's precious moments.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center">
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Media Handling",
                description: "Upload and compress images, videos, and audio clips.",
                icon: Image,
              },
              {
                title: "User Authentication",
                description: "Seamless sign-up and login across all devices.",
                icon: UserCheck,
              },
              { title: "Collaboration Tools", description: "Real-time editing for live collaboration.", icon: Users },
              {
                title: "Future Messaging",
                description: "Schedule and send emails or messages to yourself or others.",
                icon: Clock,
              },
              {
                title: "Global Community Capsules",
                description: "Create capsules for global events where anyone can contribute.",
                icon: Globe,
              },
              { title: "Secret Capsules", description: "Capsules unlocked by solving puzzles or riddles.", icon: Lock },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
              >
                <feature.icon className="w-8 h-8 mr-4 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start w-120">
              <Shield className="w-8 h-8 mr-4 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security and Privacy</h3>
                <p className="text-gray-600">Immutable record-keeping and decentralized storage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="vision" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Vision & Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-6">
              At TimeCaps, we envision a world where memories are preserved securely and accessibly for generations to
              come.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to provide a comprehensive, user-friendly platform that empowers individuals and
              communities to capture, store, and share their most precious moments, ensuring that no memory is ever lost
              to the sands of time.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join TimeCaps Today</h2>
          <p className="text-xl mb-8">Start preserving your memories in a secure, unified platform.</p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">TimeCaps</h3>
              <p className="text-gray-400">Preserving memories, one capsule at a time.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#vision" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 16.979H7.005v-9.98h9.99v9.98zM9.503 7.006H7.005V4.508h2.498v2.498zm7.492 0h-2.498V4.508h2.498v2.498z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} TimeCaps. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
