import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Download,
  ArrowRight,
  Star,
  Menu,
  X,
  Sun,
  Moon,
  ChevronUp,
  Send,
  Filter,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fullText = "UI & UX Designer";

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setTypedText("");
            setIsTyping(true);
          }, 3000);
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isTyping]);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b4f8?w=60&h=60&fit=crop&crop=face",
      text: "Working with Rohit was an absolutely fantastic experience. The design was different perfectly beyond expectations. The attention to detail was remarkable with a clean, modern layout.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      text: "Exceptional UI/UX design skills! Rohit delivered a user-friendly interface that significantly improved our user engagement and conversion rates.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      text: "Professional, creative, and reliable. The project was delivered on time with stunning visuals that perfectly captured our brand essence.",
      rating: 5,
    },
  ];

  // Projects data with categories
  const projects = [
    {
      title: "Agency Landing Page Design",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2Fe37ea809934c440fba78590495f8ded3?format=webp&width=400",
      category: "Web Design",
    },
    {
      title: "Cycling Landing Page Design",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F0002175364494ee7b63b80eeea878ffa?format=webp&width=400",
      category: "App Design",
    },
    {
      title: "Ecom Web Page Design",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F59bf85bd6ded495a98485f165cf86535?format=webp&width=400",
      category: "Web Design",
    },
    {
      title: "Mobile App UI",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      category: "App Design",
    },
    {
      title: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=300&fit=crop",
      category: "Graphic Design",
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Web Design",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg z-40 hover:bg-primary/90 transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="bg-background text-foreground">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary">R</span>ohit
              </motion.div>
              <nav className="hidden md:flex items-center space-x-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition-colors font-bold"
                >
                  Home
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary text-white text-sm font-bold"
                >
                  About Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors font-bold"
                >
                  Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-primary transition-colors font-bold"
                >
                  Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-primary transition-colors font-bold"
                >
                  Testimonials
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors font-bold"
                >
                  Contact
                </motion.button>
              </nav>

              <div className="flex items-center space-x-4">
                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
                >
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* CV Download */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://cdn.builder.io/o/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F7d58f9c9e8c048f19f32153a36673cbc?alt=media&token=7730a4db-813c-4ce4-9bbe-f7fc7dbbc28d&apiKey=2ccf64b05f7a4d14ae119a8aeb87e8e5"
                  download="Rohit_Khanal_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
                >
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download CV
                </motion.a>

                {/* Mobile menu button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="x"
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        exit={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90 }}
                        animate={{ rotate: 0 }}
                        exit={{ rotate: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pb-4"
                >
                  <nav className="flex flex-col space-y-4">
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("home")}
                      className="text-left hover:text-primary transition-colors font-bold"
                    >
                      Home
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("about")}
                      className="text-left bg-primary text-white px-4 py-2 rounded-full text-sm w-fit font-bold"
                    >
                      About Me
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("services")}
                      className="text-left hover:text-primary transition-colors font-bold"
                    >
                      Services
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("projects")}
                      className="text-left hover:text-primary transition-colors font-bold"
                    >
                      Projects
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("testimonials")}
                      className="text-left hover:text-primary transition-colors font-bold"
                    >
                      Testimonials
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection("contact")}
                      className="text-left hover:text-primary transition-colors font-bold"
                    >
                      Contact
                    </motion.button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="pt-24 pb-16 px-6 min-h-screen flex items-center"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <motion.div
                variants={itemVariants}
                className="lg:w-1/2 mb-8 lg:mb-0"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground mb-2"
                >
                  Hi I am
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl lg:text-6xl font-bold mb-4"
                >
                  <span className="text-primary">Rohit Khanal</span>
                  <br />
                  <span className="text-white">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-1 h-12 bg-primary ml-1"
                    />
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground mb-8 max-w-md"
                >
                  I'm a passionate UI/UX designer dedicated to creating
                  intuitive, visually engaging, and user-focused digital
                  experiences. With skills in wireframing, prototyping, and
                  responsive design.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    Hire Me
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="lg:w-1/2 flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary p-2"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F2309e3d1e7f74b258da02ab11183584a?format=webp&width=400"
                      alt="Rohit Khanal"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.facebook.com/rohit.khanal.9693"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.instagram.com/rohitk1o/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.linkedin.com/in/rohit-khanal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          ref={aboutRef}
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="py-16 px-6 bg-card/30"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={itemVariants} className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary p-2 mx-auto"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2ccf64b05f7a4d14ae119a8aeb87e8e5%2F2309e3d1e7f74b258da02ab11183584a?format=webp&width=400"
                    alt="Rohit Khanal"
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants} className="lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl font-bold mb-6"
                >
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-muted-foreground mb-8"
                >
                  I'm a passionate UI/UX designer dedicated to creating
                  intuitive, visually engaging, and user-focused digital
                  experiences. With skills in wireframing, prototyping, and
                  responsive design.
                </motion.p>

                <div className="space-y-6">
                  {[
                    { skill: "UX", percentage: 92 },
                    { skill: "Website Design", percentage: 88 },
                    { skill: "App Design", percentage: 85 },
                    { skill: "Graphic Design", percentage: 90 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      initial={{ opacity: 0, x: -50 }}
                      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.skill}</span>
                        <span className="text-muted-foreground">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            aboutInView ? { width: `${item.percentage}%` } : {}
                          }
                          transition={{
                            delay: 0.8 + index * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="py-16 px-6"
        >
          <div className="container mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We create mouth-watering conversion-focused food and beverage
                websites with best layouts, smooth navigation, and beautiful
                design that turn visitors into orders that help customers coming
                back.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: "UI/UX",
                  title: "UI/UX",
                  desc: "Creating user-friendly UI/UX web designs and layouts.",
                },
                {
                  icon: "WD",
                  title: "Web Design",
                  desc: "Designing custom websites with optimal usability, beauty, and responsiveness.",
                },
                {
                  icon: "AD",
                  title: "App Design",
                  desc: "Building beautiful and functional mobile app design interfaces.",
                },
                {
                  icon: "GD",
                  title: "Graphic Design",
                  desc: "Crafting engaging visual designs that captivate and communicate.",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 border border-border bg-card hover:bg-card/80 transition-all duration-300 rounded-lg cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors"
                  >
                    <div className="text-primary text-xl font-bold">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          className="py-16 px-6 bg-card/30"
        >
          <div className="container mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">My Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We create mouth-watering conversion-focused food and beverage
                websites with best layouts, smooth navigation, and beautiful
                design that turn visitors into orders that help customers coming
                back.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <div className="flex bg-muted rounded-full p-1">
                {[
                  "All",
                  "UI/UX",
                  "Web Design",
                  "App Design",
                  "Graphic Design",
                ].map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      activeFilter === filter
                        ? "bg-primary text-white"
                        : "hover:bg-muted-foreground/10"
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.title}-${activeFilter}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary/70 mt-1">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          ref={testimonialsRef}
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          className="py-16 px-6"
        >
          <div className="container mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We create mouth-watering conversion-focused food and beverage
                websites with best layouts, smooth navigation, and beautiful
                design that turn visitors into orders that help customers coming
                back.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 border border-border bg-card rounded-lg"
                >
                  <div className="flex items-start space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex mb-3"
                      >
                        {[
                          ...Array(testimonials[currentTestimonial].rating),
                        ].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground mb-4"
                      >
                        "{testimonials[currentTestimonial].text}"
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="font-semibold">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          variants={containerVariants}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          className="py-16 px-6 bg-card/30"
        >
          <div className="container mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let's Design Together</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
                mauris est risus lectus. Phasellus consequat urna tellus
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-md mx-auto">
              <div className="flex">
                <Input
                  placeholder="Enter Your Email"
                  className="flex-1 bg-background border-border"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded font-medium"
                >
                  <Send className="w-4 h-4 mr-2 inline" />
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-8 px-6 bg-background border-t border-border"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="mb-4 lg:mb-0">
                <div className="text-2xl font-bold mb-2">
                  <span className="text-primary">L</span>ets Connect there
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="https://www.facebook.com/rohit.khanal.9693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    href="https://www.instagram.com/rohitk1o/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="https://www.linkedin.com/in/rohit-khanal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-sm"
              >
                <div>
                  <h3 className="font-semibold mb-3 text-primary">
                    Navigation
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      About Us
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      Service
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      Resume
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      Project
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-primary">Contact</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>+977-9860484468</div>
                    <div>Khanalrohit67@gmail.com</div>
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-2 bg-primary hover:bg-primary/90 text-white text-xs px-3 py-1 rounded"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm"
            >
              <div>Copyright 2023 Rohit Khanal. All Rights Reserved.</div>
              <div className="mt-2">
                User Terms & Conditions | Privacy Policy
              </div>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
