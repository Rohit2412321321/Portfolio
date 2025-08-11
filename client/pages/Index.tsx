import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
  ArrowRight,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-primary">R</span>ohit
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-colors font-bold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary text-white text-sm font-bold"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition-colors font-bold"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors font-bold"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-primary transition-colors font-bold"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors font-bold"
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <a href="Portfolio.png" download="Portfolio.png" class="btn btn-primary">Download</a>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-primary transition-colors font-bold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left bg-primary text-white px-4 py-2 rounded-full text-sm w-fit font-bold"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-primary transition-colors font-bold"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors font-bold"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left hover:text-primary transition-colors font-bold"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors font-bold"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-muted-foreground mb-2">Hi I am</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="text-primary">Rohit Khanal</span>
                <br />
                <span className="text-white">UI & UX</span>
                <br />
                <span className="text-white">Designer</span>
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md">
                I'm a passionate UI/UX designer dedicated to creating intuitive,
                visually engaging, and user-focused digital experiences. With
                skills in wireframing, prototyping, and responsive design.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Hire Me
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary p-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F2309e3d1e7f74b258da02ab11183584a?format=webp&width=400"
                    alt="Rohit Khanal"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <a
                    href="https://www.facebook.com/rohit.khanal.9693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohit-khanal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary p-2 mx-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F2309e3d1e7f74b258da02ab11183584a?format=webp&width=400"
                  alt="Rohit Khanal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-8">
                I'm a passionate UI/UX designer dedicated to creating intuitive,
                visually engaging, and user-focused digital experiences. With
                skills in wireframing, prototyping, and responsive design.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">UX</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Website Design</span>
                    <span className="text-muted-foreground">88%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">App Design</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Graphic Design</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create mouth-watering conversion-focused food and beverage
              websites with best layouts, smooth navigation, and beautiful
              design that turn visitors into orders that help customers coming
              back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary text-xl font-bold">UI/UX</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX</h3>
              <p className="text-muted-foreground text-sm">
                Creating user-friendly UI/UX web designs and layouts.
              </p>
            </Card>

            <Card className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary text-xl font-bold">WD</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Design</h3>
              <p className="text-muted-foreground text-sm">
                Designing custom websites with optimal usability, beauty, and
                responsiveness.
              </p>
            </Card>

            <Card className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary text-xl font-bold">AD</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">App Design</h3>
              <p className="text-muted-foreground text-sm">
                Building beautiful and functional mobile app design interfaces.
              </p>
            </Card>

            <Card className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary text-xl font-bold">GD</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground text-sm">
                Crafting engaging visual designs that captivate and communicate.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create mouth-watering conversion-focused food and beverage
              websites with best layouts, smooth navigation, and beautiful
              design that turn visitors into orders that help customers coming
              back.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-full p-1">
              <button className="px-4 py-2 text-sm font-medium">All</button>
              <button className="px-4 py-2 text-sm font-medium">UI/UX</button>
              <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full">
                Web Design
              </button>
              <button className="px-4 py-2 text-sm font-medium">
                App Design
              </button>
              <button className="px-4 py-2 text-sm font-medium">
                Graphic Design
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2Fe37ea809934c440fba78590495f8ded3?format=webp&width=400"
                  alt="Agency Landing Page Design"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Agency Landing Page Design</h3>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F0002175364494ee7b63b80eeea878ffa?format=webp&width=400"
                  alt="Cycling Landing Page Design"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Cycling Landing Page Design</h3>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F59bf85bd6ded495a98485f165cf86535?format=webp&width=400"
                  alt="Ecom Web Page Design"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Ecom Web Page Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create mouth-watering conversion-focused food and beverage
              websites with best layouts, smooth navigation, and beautiful
              design that turn visitors into orders that help customers coming
              back.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border border-border bg-card">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Working with this designer was an absolutely fantastic
                    experience. The design was different perfectly beyond
                    expectations. The attention to detail was remarkable with a
                    clean, modern layout. The result was truly amazing product
                    image."
                  </p>
                  <div>
                    <h4 className="font-semibold">Name</h4>
                    <p className="text-muted-foreground text-sm">CEO</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Lets Design Together</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex">
              <Input
                placeholder="Enter Your Email"
                className="flex-1 bg-background border-border"
              />
              <Button className="ml-2 bg-primary hover:bg-primary/90 text-white">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-primary">L</span>ets Connect there
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/rohit.khanal.9693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-khanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Navigation</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>About Us</div>
                  <div>Service</div>
                  <div>Resume</div>
                  <div>Project</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">Contact</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>+977-9860484468</div>
                  <div>Khanalrohit67@gmail.com.com</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  Get the latest information
                </h3>
                <div className="flex">
                  <Input
                    placeholder="Email Address"
                    className="flex-1 bg-background border-border text-xs"
                  />
                  <Button className="ml-2 bg-primary hover:bg-primary/90 text-white text-xs">
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <div>Copyright 2023 Rohit Khanal. All Rights Reserved.</div>
            <div className="mt-2">User Terms & Conditions | Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
