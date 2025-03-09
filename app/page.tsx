"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TextReveal from "@/components/text-reveal"
import ImageReveal from "@/components/image-reveal"
import ParallaxSection from "@/components/parallax-section"
import ScrollingText from "@/components/scrolling-text"
import ParallaxBackground from "@/components/parallax-background"
import MouseParallax from "@/components/mouse-parallax"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("philosophy")
  const containerRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 100])

  return (
    <main ref={containerRef} className="bg-[#F5F7F9] text-[#0F172A] min-h-screen overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <ParallaxBackground />

        <MouseParallax className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0891B2]/10 to-transparent opacity-70"></div>
          <motion.div
            className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-[#0891B2]/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[15%] w-72 h-72 rounded-full bg-[#06b6d4]/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          />
        </MouseParallax>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity, y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-16 h-px bg-[#0F172A] opacity-50"></div>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto mt-24 px-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="font-serif text-4xl md:text-7xl mb-8 leading-tight tracking-tight">
            Crafting extraordinary <span className="text-[#0891B2]">travel experiences</span> through authentic
            connections
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
            We design immersive journeys that transform how you see the world, creating moments of wonder and discovery
            in carefully curated destinations.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0F172A] hover:bg-[#0891B2] hover:text-white hover:border-[#0891B2] transition-all duration-300"
          >
            <Link href="/destinations">
              Explore our journeys
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm uppercase tracking-widest mb-2 opacity-60">Scroll to explore</span>
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              <circle cx="20" cy="20" r="19.5" stroke="#0F172A" strokeOpacity="0.3" />
              <path d="M20 12V28M20 28L14 22M20 28L26 22" stroke="#0F172A" strokeWidth="1.5" />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <ParallaxSection bgColor="bg-[#F5F7F9]" bgImage="/images/subtle-pattern.png">
        <div className="max-w-5xl mx-auto px-4">
          <TextReveal>
            <div className="mb-24 text-center">
              <div className="w-16 h-px bg-[#0F172A] opacity-50 mx-auto mb-16"></div>
              <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Our Philosophy</h2>
              <p className="text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
                We believe travel should be transformative, not transactional. Every journey we craft is an opportunity
                to connect with cultures, landscapes, and traditions in meaningful ways.
              </p>
            </div>
          </TextReveal>

          <Tabs defaultValue="philosophy" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-16 bg-transparent h-auto">
              <TabsTrigger
                value="philosophy"
                className={`data-[state=active]:border-b-2 data-[state=active]:border-[#0891B2] data-[state=active]:text-[#0891B2] border-b border-[#0F172A]/10 pb-2 font-serif text-lg transition-all`}
              >
                Philosophy
              </TabsTrigger>
              <TabsTrigger
                value="connections"
                className={`data-[state=active]:border-b-2 data-[state=active]:border-[#0891B2] data-[state=active]:text-[#0891B2] border-b border-[#0F172A]/10 pb-2 font-serif text-lg transition-all`}
              >
                Connections
              </TabsTrigger>
              <TabsTrigger
                value="experiences"
                className={`data-[state=active]:border-b-2 data-[state=active]:border-[#0891B2] data-[state=active]:text-[#0891B2] border-b border-[#0F172A]/10 pb-2 font-serif text-lg transition-all`}
              >
                Experiences
              </TabsTrigger>
              <TabsTrigger
                value="sustainability"
                className={`data-[state=active]:border-b-2 data-[state=active]:border-[#0891B2] data-[state=active]:text-[#0891B2] border-b border-[#0F172A]/10 pb-2 font-serif text-lg transition-all`}
              >
                Sustainability
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TabsContent value="philosophy" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                      <h3 className="font-serif text-2xl mb-4 text-[#0F172A]">Our Guiding Principles</h3>
                      <p className="opacity-80 leading-relaxed mb-6">
                        We believe that travel should be a transformative experience that connects you deeply with the
                        places you visit and the people you meet. Our journeys are designed to create meaningful
                        connections and lasting memories.
                      </p>
                      <p className="opacity-80 leading-relaxed">
                        Every itinerary is crafted with intention, balancing carefully curated experiences with space
                        for spontaneity and discovery.
                      </p>
                    </div>
                    <MouseParallax strength={0.03} className="aspect-[4/3] relative overflow-hidden rounded-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                        alt="Our philosophy"
                        fill
                        className="object-cover"
                      />
                    </MouseParallax>
                  </div>
                </TabsContent>

                <TabsContent value="connections" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 aspect-[4/3] relative overflow-hidden rounded-sm">
                      <MouseParallax strength={0.03}>
                        <Image
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
                          alt="Authentic connections"
                          fill
                          className="object-cover"
                        />
                      </MouseParallax>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="font-serif text-2xl mb-4 text-[#0F172A]">Authentic Connections</h3>
                      <p className="opacity-80 leading-relaxed mb-6">
                        We foster genuine relationships with local communities, artisans, and experts who share their
                        knowledge and passion, creating experiences that go beyond the surface.
                      </p>
                      <p className="opacity-80 leading-relaxed">
                        These connections allow our travelers to experience destinations through the eyes of those who
                        know them best, revealing layers of culture and tradition that most visitors never see.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experiences" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                      <h3 className="font-serif text-2xl mb-4 text-[#0F172A]">Curated Experiences</h3>
                      <p className="opacity-80 leading-relaxed mb-6">
                        Each element of our journeys is thoughtfully selected to create a cohesive narrative that
                        reveals the essence of a place, from accommodations to activities to dining.
                      </p>
                      <p className="opacity-80 leading-relaxed">
                        We seek out the exceptional—whether that's a meal prepared by a renowned local chef, a private
                        viewing of an artist's studio, or a guided walk through a neighborhood rarely visited by
                        tourists.
                      </p>
                    </div>
                    <MouseParallax strength={0.03} className="aspect-[4/3] relative overflow-hidden rounded-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
                        alt="Curated experiences"
                        fill
                        className="object-cover"
                      />
                    </MouseParallax>
                  </div>
                </TabsContent>

                <TabsContent value="sustainability" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 aspect-[4/3] relative overflow-hidden rounded-sm">
                      <MouseParallax strength={0.03}>
                        <Image
                          src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2070&auto=format&fit=crop"
                          alt="Sustainability commitment"
                          fill
                          className="object-cover"
                        />
                      </MouseParallax>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="font-serif text-2xl mb-4 text-[#0F172A]">Sustainability Commitment</h3>
                      <p className="opacity-80 leading-relaxed mb-6">
                        We are committed to responsible travel practices that respect and preserve the environments,
                        cultures, and communities we visit. This commitment informs every aspect of our journey design.
                      </p>
                      <p className="opacity-80 leading-relaxed">
                        From partnering with locally-owned accommodations to supporting conservation initiatives and
                        cultural preservation projects, we strive to ensure that our presence contributes positively to
                        the places we love.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </ParallaxSection>

      {/* Scrolling Text */}
      <ScrollingText
        text="DISCOVER • EXPLORE • EXPERIENCE • CONNECT • IMMERSE • TRANSFORM • JOURNEY"
        speed={-20}
        className="py-8 bg-[#0891B2] text-white overflow-hidden"
      />

      {/* Featured Destinations */}
      <section className="py-32 px-4 bg-[#E0F2FE] relative overflow-hidden">
        <MouseParallax className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2074&auto=format&fit=crop"
            alt="Map background"
            fill
            className="object-cover opacity-5"
          />
          <motion.div
            className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-[#0891B2]/5 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-[#06b6d4]/5 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
          />
        </MouseParallax>

        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <div className="mb-24 text-center">
              <div className="w-16 h-px bg-[#0F172A] opacity-50 mx-auto mb-16"></div>
              <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Featured Destinations</h2>
              <p className="text-lg opacity-80 leading-relaxed max-w-3xl mx-auto">
                Discover our carefully selected destinations, each offering unique experiences that capture the essence
                of place and culture.
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ImageReveal>
              <div className="group cursor-pointer">
                <MouseParallax strength={0.02} className="aspect-[3/4] relative mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop"
                    alt="Santorini, Greece"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center text-white border border-white/50 rounded-full py-1 px-3 text-sm">
                      Explore
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </MouseParallax>
                <h3 className="font-serif text-2xl mb-2">Santorini, Greece</h3>
                <p className="opacity-70 mb-4 text-[#0F172A]">Iconic blue domes and breathtaking views</p>
                <Link
                  href="/destinations/santorini"
                  className="inline-flex items-center text-[#0891B2] hover:opacity-70 transition-opacity"
                >
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ImageReveal>

            <ImageReveal delay={0.2}>
              <div className="group cursor-pointer">
                <MouseParallax strength={0.02} className="aspect-[3/4] relative mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1469&auto=format&fit=crop"
                    alt="Maldives"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center text-white border border-white/50 rounded-full py-1 px-3 text-sm">
                      Explore
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </MouseParallax>
                <h3 className="font-serif text-2xl mb-2">Maldives</h3>
                <p className="opacity-70 mb-4 text-[#0F172A]">Pristine beaches and crystal-clear waters</p>
                <Link
                  href="/destinations/maldives"
                  className="inline-flex items-center text-[#0891B2] hover:opacity-70 transition-opacity"
                >
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ImageReveal>

            <ImageReveal delay={0.4}>
              <div className="group cursor-pointer">
                <MouseParallax strength={0.02} className="aspect-[3/4] relative mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                    alt="New Zealand"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center text-white border border-white/50 rounded-full py-1 px-3 text-sm">
                      Explore
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </MouseParallax>
                <h3 className="font-serif text-2xl mb-2">New Zealand</h3>
                <p className="opacity-70 mb-4 text-[#0F172A]">Dramatic landscapes and outdoor adventures</p>
                <Link
                  href="/destinations/new-zealand"
                  className="inline-flex items-center text-[#0891B2] hover:opacity-70 transition-opacity"
                >
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ImageReveal>
          </div>

          <div className="text-center mt-24">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0F172A] hover:bg-[#0891B2] hover:text-white hover:border-[#0891B2] transition-all duration-300"
            >
              <Link href="/destinations">
                View all destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <ParallaxSection bgColor="bg-[#F5F7F9]">
        <section className="py-32 px-4 bg-[#0891B2]/5 relative overflow-hidden">
          <MouseParallax className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              alt="Beach background"
              fill
              className="object-cover opacity-5"
            />
            <motion.div
              className="absolute top-[30%] right-[20%] w-64 h-64 rounded-full bg-[#0891B2]/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </MouseParallax>

          <div className="max-w-4xl mx-auto">
            <TextReveal>
              <div className="text-center mb-16">
                <div className="w-16 h-px bg-[#0F172A] opacity-50 mx-auto mb-16"></div>
                <h2 className="font-serif text-3xl md:text-5xl mb-12 leading-tight">Traveler Stories</h2>
              </div>
            </TextReveal>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute -top-8 -left-8 text-8xl text-[#0891B2] opacity-20 font-serif">"</div>
              <blockquote className="font-serif text-2xl md:text-3xl mb-8 leading-relaxed text-center relative z-10">
                The attention to detail and the authentic experiences curated by this team transformed our journey into
                something truly extraordinary. Every moment felt intentional and meaningful.
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    alt="Emma Thompson"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <cite className="not-italic font-medium">Emma Thompson</cite>
                <span className="text-sm opacity-70">London, United Kingdom</span>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Full-width Image Section */}
      <section className="h-[50vh] md:h-[70vh] relative overflow-hidden">
        <MouseParallax strength={0.05} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=2033&auto=format&fit=crop"
              alt="Ocean sunset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
          </motion.div>
        </MouseParallax>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center text-white max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              "The world is a book, and those who do not travel read only one page."
            </h2>
            <p className="text-lg opacity-90">— Saint Augustine</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-[#0F172A] text-[#F5F7F9] relative overflow-hidden">
        <MouseParallax className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Ocean waves"
            fill
            className="object-cover opacity-10"
          />
          <motion.div
            className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-[#0891B2]/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-[#06b6d4]/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          />
        </MouseParallax>

        <div className="max-w-3xl mx-auto">
          <TextReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-px bg-[#F5F7F9] opacity-50 mx-auto mb-16"></div>
              <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Begin Your Journey</h2>
              <p className="text-lg opacity-80 leading-relaxed max-w-2xl mx-auto mb-12">
                Let us craft a personalized travel experience that speaks to your passions and curiosities.
              </p>
              <Button
                asChild
                className="rounded-full bg-[#0891B2] hover:bg-[#0891B2]/80 text-white border-none transition-all duration-300"
              >
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TextReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

