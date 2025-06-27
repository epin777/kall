"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Palette, Sparkles, Zap, Heart } from "lucide-react"
import Image from "next/image"


export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    "Adobe Photoshop",
    "Illustrator",
    "InDesign",
    "Figma",
    "Sketch",
    "Brand Identity",
    "Logo Design",
    "Web Design",
    "Print Design",
    "Typography",
  ]

  const projects = [
    {
      title: "Illustration Series",
      category: "Illustration",
      description: "Complete brand identity for a tech startup including logo, colors, and guidelines.",
      image: "/illustration.jpg?height=300&width=400",
    },
    {
      title: "Website UI/UX Design",
      category: "Web Design",
      description: "Modern, responsive website design with focus on user experience.",
      image: "/web_design.jpg?height=300&width=400",
    },
    {
      title: "Sticker Pack Design",
      category: "Print Design",
      description: "Fun and vibrant sticker pack.",
      image: "/sticker_pack.jpg?height=300&width=400",
    },
    {
      title: "Poster Campaign",
      category: "Print Design",
      description: "Bold and eye-catching poster design for a music festival.",
      image: "/poster.jpg?height=300&width=400",
    },
    {
      title: "Logo Design",
      category: "Branding",
      description: "Creative logo design.",
      image: "/logo'.jpg?height=300&width=400",
    },
    {
      title: "Social Media Graphics",
      category: "Digital Design",
      description: "Engaging social media templates and graphics suite.",
      image: "/stip.jpg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Kallista Abigail
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Portfolio", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div
          className={`text-center transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Palette className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Creative
            </span>
            <br />
            <span className="text-white">Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bringing ideas to life through vibrant colors, bold designs, and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg"
              onClick={() => {
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Work
            </Button>
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-20 left-20 text-yellow-400 animate-bounce" size={24} />
          <Zap className="absolute top-40 right-32 text-blue-400 animate-pulse" size={28} />
          <Heart className="absolute bottom-32 left-32 text-red-400 animate-ping" size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate graphic designer with over 3 years of experience creating stunning visual experiences.
                My work spans across branding, web design, print media, and digital art.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                I believe in the power of color, creativity, and innovation to tell compelling stories and create
                memorable brand experiences that resonate with audiences.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">30+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <Image
                    src="/kallista.jpg?height=550&width=350"
                    alt="Designer"
                    width={550}
                    height={750}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
        My Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-700 hover:border-transparent hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-cyan-500/20 transition-all duration-300 group cursor-pointer transform hover:scale-105"
            onClick={() => {
          setSelectedProject(project)
          setShowModal(true)
            }}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            setSelectedProject(project)
            setShowModal(true)
          }
            }}
          >
            <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={project.image || "/kallista.jpg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">{project.category}</Badge>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
        {/* Modal for full image */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <div className="relative bg-black rounded-xl shadow-lg max-w-sm w-full p-2">
          <button
            className="absolute top-1 right-1 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <Image
            src={selectedProject.image || "/kallista.jpg"}
            alt={selectedProject.title}
            width={320}
            height={220}
            className="w-full h-auto rounded-lg object-contain"
            priority
          />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">{selectedProject.title}</h3>
            <p className="text-gray-400">{selectedProject.description}</p>
          </div>
        </div>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-110"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
        Let's Create Together
          </h2>
          <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-pink-500" size={24} />
            <span className="text-gray-300">kallistaabigail00@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-500" size={24} />
            <span className="text-gray-300">+62 812-8202-1828</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-green-500" size={24} />
            <span className="text-gray-300">Jakarta, ID</span>
          </div>
            </div>
            <div className="flex space-x-4 mt-8">
          {/* <Button
            size="icon"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Github size={20} />
          </Button> */}
          <a
            href="https://www.linkedin.com/in/kallista-abigail-103526315/?originalSubdomain=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="icon"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <Linkedin size={20} />
            </Button>
          </a>
            <a
            href="https://www.instagram.com/kallistaabigail/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button
              size="icon"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Instagram size={20} />
            </Button>
            </a>
            </div>
          </div>
          {/* <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <form
          className="space-y-6"
          action="https://formspree.io/f/xnqewwqk"
          method="POST"
          target="_blank"
            >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-pink-500 focus:outline-none text-white"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-pink-500 focus:outline-none text-white"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-pink-500 focus:outline-none text-white resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg text-lg"
          >
            Send Message
          </Button>
            </form>
          </div> */}
        </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Kallista Abigail. Made with <Heart className="inline w-4 h-4 text-red-500" /> and lots of creativity.
          </p>
        </div>
      </footer>
    </div>
  )
}
