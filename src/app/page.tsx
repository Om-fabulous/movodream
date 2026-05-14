"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  MapPinned,
  Crown,
  Clock3,
  Route,
  UtensilsCrossed,
  BellRing,
  Download,
  Users,
  CheckCircle2,
  Camera,
  History,
  Heart,
  Star,
  Zap,
  Gift,
} from "lucide-react";

export default function Home() {
  // Amritsar images for cards
  const amritsarImages = [
    "https://plus.unsplash.com/premium_photo-1663054911397-c7fe60ec3849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwc21hcnRlcnxlbnwwfHwwfHx8MA%3D%3D", // Golden Temple
    "https://images.unsplash.com/photo-1548099212-aa1dab67bf00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3ZlcnJhdGVkJTIwc3BvdHMlMjBmb3IlMjB0b3VyaXN0fGVufDB8fDB8fHww", // Wagah Border
    "https://images.unsplash.com/photo-1754299375507-72f63a9a065e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9wdGltaXplZCUyMHJvdXRlc3xlbnwwfHwwfHx8MA%3D%3D", // Jallianwala Bagh
    "https://images.unsplash.com/photo-1717587052948-fb9825de50f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW1yaXRzYXJpJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D", // Amritsari food
    "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmF2aWdhdGUlMjBlZmZpY2llbnRseSUyMGluJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D", // Streets of Amritsar
    "https://images.unsplash.com/photo-1717131553948-13c2c59c7293?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2lraCUyMGN1bHR1cmV8ZW58MHx8MHx8fDA%3D", // Sikh culture
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1074&auto=format&fit=crop", // Heritage architecture
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1074&auto=format&fit=crop", // Traditional crafts
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1074&auto=format&fit=crop", // Local market
  ];

  const featureImages = [
    "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnQlMjBJdGluZXJhcnklMjBmb3IlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D", // Smart planning
    "https://images.unsplash.com/photo-1698380834552-59aca5613abf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtcml0c2FyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D", // Hidden gems
    "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGl2ZSUyMENyb3dkJTIwSW50ZWxsaWdlbmNlfGVufDB8fDB8fHww", // Crowd intelligence
    "https://images.unsplash.com/photo-1594935975218-a3596da034a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHluYW1pYyUyMFJvdXRlJTIwT3B0aW1pemF0aW9ufGVufDB8fDB8fHww", // Route optimization
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1074&auto=format&fit=crop", // Food experiences
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1074&auto=format&fit=crop", // Live alerts
    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1074&auto=format&fit=crop", // Safety features
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1074&auto=format&fit=crop", // Support system
    "https://images.unsplash.com/photo-1499591934245-40b55745b905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFwJTIwZXhwbGFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D", // Offline access
  ];

  return (
    <main className="min-h-screen bg-[#f3f3f3] text-[#1f1f1f] overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-lg border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Movodream"
              width={170}
              height={60}
              priority
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-14 text-[17px] font-medium text-[#24324A]">
            <a href="#" className="hover:text-pink-600 transition-colors">Platform</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Vision</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Advantage</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Ecosystem</a>
          </div>

          {/* CTA */}
          <button className="bg-gradient-to-r from-[#d80c8c] to-[#ff6b8b] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
            Start Planning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-lg mb-8 border border-pink-100">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-semibold text-[#24324A]">
                Premium Smart Travel System
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-[1.02] tracking-tight">
              Explore Amritsar
              <br />
              Like An Insider —
              <br />
              Not Like A
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                {" "}
                Tourist.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-8 text-[20px] leading-relaxed text-[#5b6475] max-w-2xl">
              A premium smart itinerary system with hidden gems, crowd intelligence,
              optimized routes, live updates, and personalized travel planning —
              designed to make your Amritsar trip smoother, smarter, and unforgettable.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-2xl">
              {[
                "Personalized Smart Itinerary",
                "Hidden Gems & Premium Experiences",
                "Live Crowd Intelligence",
                "Dynamic Route Optimization",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  <span className="font-medium text-[#24324A]">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_20px_60px_rgba(216,12,140,0.35)] hover:shadow-[0_30px_80px_rgba(216,12,140,0.5)] transition-all duration-300"
              >
                GET MY PERSONALIZED ITINERARY
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1f1f1f", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-black/10 px-8 py-5 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Explore Features
              </motion.button>
            </div>

            {/* Trust Line */}
            <p className="mt-8 text-[#5b6475] text-lg">
              Used by travelers who want to avoid tourist mistakes and experience the
              real Amritsar.
            </p>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[550px] h-[550px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />

            {/* Main Image Card */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -2 }}
              className="relative bg-white p-5 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] rotate-[-4deg] w-[95%] max-w-[520px]"
            >
              <div className="rounded-[28px] overflow-hidden h-[340px] relative group">
                <img
                  src="https://images.unsplash.com/photo-1583821017783-4333717df070?q=80&w=1074&auto=format&fit=crop"
                  alt="Golden Temple, Amritsar"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="flex items-center justify-between">
                  <span className="bg-pink-100 text-pink-700 text-xs font-bold px-4 py-2 rounded-full">
                    ROYAL ACCESS
                  </span>
                  <span className="text-sm font-semibold text-[#24324A]">
                    Premium Experience
                  </span>
                </div>

                <h3 className="text-4xl font-black mt-5 leading-tight">
                  Royal Amritsar
                  <br />
                  Smart Access
                </h3>

                <p className="text-[#5b6475] mt-4 leading-relaxed">
                  Hidden gems, optimized routes, crowd intelligence, premium food
                  spots, and smarter travel planning — all in one premium system.
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mt-8">
                  <div>
                    <p className="text-sm text-[#7a7a7a]">
                      Royal Amritsar Access
                    </p>
                    <h2 className="text-6xl font-black bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                      ₹999
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] text-white px-7 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    Unlock Access
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              className="absolute -bottom-42 -left-10 bg-white p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] flex items-center justify-center text-white">
                  <Crown />
                </div>
                <div>
                  <h4 className="font-black text-2xl">Premium</h4>
                  <p className="text-[#5b6475]">
                    Insider-Level Recommendations
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold">
                THE PROBLEM
              </span>

              <h2 className="text-5xl md:text-6xl font-black mt-8 leading-tight">
                Most People Waste
                <br />
                Their Amritsar Trip
                <br />
                Without Realizing It.
              </h2>

              <p className="mt-8 text-xl text-[#5b6475] leading-relaxed">
                They spend hours in unnecessary crowds, visit places at wrong timings,
                eat at overrated tourist spots, and miss hidden experiences locals
                actually recommend.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Hours wasted in unnecessary rush",
                  "Wrong timing decisions",
                  "Tourist trap food spots",
                  "Missing hidden local experiences",
                  "Travel confusion & fatigue",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <CheckCircle2 className="text-pink-600 w-6 h-6" />
                    <p className="text-lg font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=600&auto=format&fit=crop&q=60"
                  alt="Crowded tourist area in Amritsar"
                  className="w-full h-[650px] object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-bold">
              SMART TRAVEL SYSTEM
            </span>

            <h2 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              This Is Not Just
              <br />
              A Normal Itinerary.
            </h2>

            <p className="max-w-4xl mx-auto text-xl text-[#5b6475] leading-relaxed mt-8">
              Royal Amritsar is a smart travel operating system designed to help you
              experience the city in the best possible way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { 
                item: "Travel smarter",
                icon: Route,
                desc: "AI-powered recommendations tailored to your preferences",
                image: amritsarImages[0]
              },
              { 
                item: "Avoid tourist traps",
                icon: ShieldCheck,
                desc: "Skip overrated spots and scams with insider knowledge",
                image: amritsarImages[1]
              },
              { 
                item: "Save time & energy",
                icon: Clock3,
                desc: "Optimized routes reduce walking and travel fatigue",
                image: amritsarImages[2]
              },
              { 
                item: "Discover hidden gems",
                icon: Sparkles,
                desc: "Find premium local experiences beyond tourist content",
                image: amritsarImages[3]
              },
              { 
                item: "Navigate efficiently",
                icon: MapPinned,
                desc: "Smart routing with crowd intelligence in real-time",
                image: amritsarImages[4]
              },
              { 
                item: "Make better decisions",
                icon: CheckCircle2,
                desc: "Data-driven suggestions for the best experiences",
                image: amritsarImages[5]
              },
            ].map((itemObj, i) => {
              const IconComponent = itemObj.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group bg-gradient-to-br from-[#f6f6f6] to-white rounded-[30px] p-0 hover:bg-gradient-to-br hover:from-[#d80c8c] hover:to-[#7b2cbf] hover:text-white transition-all duration-500 shadow-md hover:shadow-2xl border border-transparent hover:border-white/20 overflow-hidden relative"
                >
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden rounded-t-[30px] relative">
                    <img
                      src={itemObj.image}
                      alt={itemObj.item}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Background Animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 0.1, scale: 1 }}
                      className="absolute -right-12 -bottom-12 w-32 h-32 bg-white/30 rounded-full blur-2xl transition-all duration-500"
                    />

                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition shadow-md relative z-10"
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    <h3 className="text-2xl font-bold relative z-10 group-hover:text-white transition">
                      {itemObj.item}
                    </h3>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      className="mt-4 text-sm leading-relaxed text-[#5b6475] group-hover:text-white/90 transition relative z-10"
                    >
                      {itemObj.desc}
                    </motion.p>

                    {/* Accent Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="absolute bottom-0 left-0 h-1 bg-white/30 mt-6 relative z-10"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold"
            >
              COMPREHENSIVE FEATURES
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mt-8">
              Everything Included In
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                {" "}
                Royal Amritsar
              </span>
            </h2>
            <p className="mt-6 text-xl text-[#5b6475] max-w-3xl mx-auto">
              From personalized itineraries to real-time updates, we've got every aspect of your Amritsar journey covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Smart Itinerary",
                desc: "Customized around your trip dates, travel style, and preferences. Get AI-powered recommendations tailored just for you.",
                icon: Route,
                image: featureImages[0]
              },
              {
                title: "Hidden Gems",
                desc: "Discover premium local experiences beyond tourist content. Uncover the real Amritsar secrets.",
                icon: Sparkles,
                image: featureImages[1]
              },
              {
                title: "Live Crowd Intelligence",
                desc: "Know the best timings and avoid unnecessary rush. Real-time insights to beat the crowds.",
                icon: Clock3,
                image: featureImages[2]
              },
              {
                title: "Dynamic Route Optimization",
                desc: "Smarter attraction sequencing and reduced travel fatigue. Save hours of walking.",
                icon: MapPinned,
                image: featureImages[3]
              },
              {
                title: "Premium Food Recommendations",
                desc: "Authentic Punjabi food, hidden cafes, and local favorites. Taste Amritsar like a local.",
                icon: UtensilsCrossed,
                image: featureImages[4]
              },
              {
                title: "Live Alerts & Suggestions",
                desc: "Closures, event rush, and dynamic trip updates. Stay informed in real-time.",
                icon: BellRing,
                image: featureImages[5]
              },
              {
                title: "Safety & Scam Awareness",
                desc: "Avoid common tourist scams and travel safely. Expert guidance to protect your trip.",
                icon: ShieldCheck,
                image: featureImages[6]
              },
              {
                title: "Priority Support",
                desc: "Get help with routes, food, and better travel decisions. 24/7 traveler support.",
                icon: Users,
                image: featureImages[7]
              },
              {
                title: "Offline Downloadable Access",
                desc: "Everything available even during low network situations. Never be lost offline.",
                icon: Download,
                image: featureImages[8]
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(216, 12, 140, 0.2)" }}
                  className="group relative bg-white rounded-[36px] p-0 shadow-lg overflow-hidden border border-transparent hover:border-pink-200 transition-all duration-500"
                >
                  {/* Image Header */}
                  <div className="h-40 overflow-hidden rounded-t-[36px] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d80c8c]/5 to-[#7b2cbf]/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-b-[36px]" />

                    <div className="relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] mb-6 flex items-center justify-center text-white shadow-lg"
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>

                      <h3 className="text-2xl font-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#d80c8c] group-hover:to-[#7b2cbf] group-hover:bg-clip-text transition">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-lg leading-relaxed text-[#5b6475] group-hover:text-[#24324A] transition">
                        {item.desc}
                      </p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className="mt-6 h-1 bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amritsar Highlights Section - NEW */}
      <section className="py-28 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-bold"
            >
              ICONIC DESTINATIONS
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mt-8">
              Discover the Soul of
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                {" "}
                Amritsar
              </span>
            </h2>
            <p className="mt-6 text-xl text-[#5b6475] max-w-3xl mx-auto">
              From spiritual sanctuaries to historical landmarks, experience the essence of Punjab's cultural capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Golden Temple",
                desc: "The holiest Gurdwara of Sikhism, known for its stunning gold-plated architecture and serene ambiance.",
                image: "https://images.unsplash.com/photo-1583821017783-4333717df070?q=80&w=1074&auto=format&fit=crop",
                icon: History
              },
              {
                title: "Wagah Border",
                desc: "Witness the spectacular daily retreat ceremony at the India-Pakistan border, a display of patriotism.",
                image: "https://images.unsplash.com/photo-1598431416007-869a2a727f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FnYWglMjBib3JkZXJ8ZW58MHx8MHx8fDA%3D",
                icon: Zap
              },
              {
                title: "Jallianwala Bagh",
                desc: "A historic garden and memorial of national importance, commemorating the tragic 1919 massacre.",
                image: "https://images.unsplash.com/photo-1730620775685-811aadc9ebdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFsbGlhbndhbGElMjBCYWdofGVufDB8fDB8fHww",
                icon: Heart
              },
              {
                title: "Amritsari Cuisine",
                desc: "Savor authentic flavors - from Amritsari kulcha to kulfi, a food lover's paradise.",
                image: "https://media.istockphoto.com/id/1832452568/photo/aloo-paratha-or-gobi-paratha-also-known-as-potato-or-cauliflower-stuffed-flatbread-dish.jpg?s=1024x1024&w=is&k=20&c=SITUerpYSy8O6hxg-VYLfCIRN7ma6gh23XS-DInp_XM=",
                icon: UtensilsCrossed
              },
              {
                title: "Heritage Walks",
                desc: "Explore the old city's narrow lanes, ancient havelis, and vibrant markets on foot.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1074&auto=format&fit=crop",
                icon: Camera
              },
              {
                title: "Spiritual Experience",
                desc: "Immerse yourself in the divine atmosphere, langar service, and kirtan at sacred sites.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1074&auto=format&fit=crop",
                icon: Star
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white rounded-[32px] overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <item.icon className="w-6 h-6 text-pink-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <h3 className="text-2xl font-black text-[#1f1f1f] group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[#5b6475] leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 10, opacity: 1 }}
                    className="mt-6 flex items-center gap-2 text-pink-600 font-semibold"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-pink-200 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold"
            >
              TRAVELER STORIES
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mt-8">
              Loved by
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                {" "}
                Travelers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Delhi, India",
                text: "Royal Amritsar transformed our family trip! We discovered places we never would have found on our own. The crowd intelligence feature saved us hours.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
              },
              {
                name: "Rajesh Kumar",
                location: "Mumbai, India",
                text: "As a solo traveler, safety was my concern. This app's real-time alerts and safe route suggestions made my Amritsar journey smooth and secure.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              },
              {
                name: "Amelia Charlotte",
                location: "New York, United States of America",
                text: "The food recommendations were spot-on! We ate at places that locals frequent, and every meal was an unforgettable experience.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-pink-50 rounded-[32px] p-8 shadow-lg border border-pink-100"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg text-[#5b6475] leading-relaxed italic mb-8">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f1f1f]">{testimonial.name}</h4>
                    <p className="text-sm text-[#7a7a7a]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black">
              Perfect For Travelers
              <br />
              Who Want More Than
              <br />
              A Basic Trip.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Couples",
                desc: "Premium romantic experiences, optimized routes for leisurely walks, intimate dining at hidden gems.",
                image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60",
              },
              {
                label: "Families",
                desc: "Kid-friendly attractions, age-appropriate activities, safe routes with rest stops, family dining.",
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format&fit=crop&q=60",
              },
              {
                label: "Solo Travelers",
                desc: "Solo-friendly routes, safety guidance, meet-up spots, budget-optimized recommendations.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop&q=60",
              },
              {
                label: "Friend Groups",
                desc: "Adventure-packed itineraries, group dining spots, budget-friendly experiences, party hotspots.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=60",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative bg-gradient-to-br from-[#d80c8c] to-[#7b2cbf] text-white rounded-[36px] overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a1f] via-[#2d1b40] to-transparent opacity-80 group-hover:opacity-90 transition duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-end min-h-[380px]">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <h3 className="text-4xl font-black mb-4 drop-shadow-lg">{item.label}</h3>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="text-white/90 leading-relaxed text-lg font-medium drop-shadow-md group-hover:text-white transition"
                    >
                      {item.desc}
                    </motion.p>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 inline-flex items-center gap-2 bg-white text-[#d80c8c] px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg"
                    >
                      Plan Trip
                      <span className="text-xl">→</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf]" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Don't Just Visit
              <br />
              Amritsar.
              <br />
              Experience It Smartly.
            </h2>

            <p className="text-2xl mt-8 opacity-90">
              Unlock your personalized Royal Amritsar travel system today.
            </p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-14 inline-block bg-white text-[#7b2cbf] px-12 py-8 rounded-[40px] shadow-2xl"
            >
              <p className="text-lg font-semibold opacity-70">
                Royal Amritsar Access
              </p>

              <h3 className="text-7xl font-black mt-2">₹999</h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 w-full bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] text-white px-6 py-5 rounded-full text-xl font-bold hover:shadow-xl transition-all duration-300"
              >
                GET MY ROYAL AMRITSAR ACCESS
              </motion.button>

              <p className="mt-4 text-sm opacity-60">
                30-day money-back guarantee • Instant access
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold"
            >
              COMMON QUESTIONS
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mt-8">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What exactly do I get with Royal Amritsar Access?",
                answer: "You receive a personalized smart itinerary, real-time crowd intelligence, optimized routes, hidden gem recommendations, premium food spots, live alerts, safety guidance, offline access, and 24/7 priority support."
              },
              {
                question: "How is this different from free travel guides?",
                answer: "Unlike generic guides, Royal Amritsar uses AI to create personalized plans based on your preferences, provides real-time updates, crowd predictions, and insider knowledge that only locals would know."
              },
              {
                question: "Can I use this if I'm traveling with family?",
                answer: "Absolutely! The system adapts to all traveler types - couples, families, solo travelers, and friend groups. You'll get age-appropriate recommendations and family-friendly routes."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. If Royal Amritsar doesn't enhance your travel experience, we'll refund your purchase no questions asked."
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white to-pink-50 rounded-[24px] p-8 shadow-md border border-pink-100"
              >
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">
                  {faq.question}
                </h3>
                <p className="text-[#5b6475] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="Movodream"
                width={170}
                height={60}
                className="mb-6"
              />
              <p className="text-white/70 leading-relaxed">
                Royal Amritsar is designed to help travelers experience the city more
                efficiently, comfortably, and intelligently.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/70 hover:text-white transition">Platform</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-white/70">
                <li>support@movodream.com</li>
                <li>+91 98765 43210</li>
                <li>Amritsar, Punjab, India</li>
              </ul>
              <div className="flex items-center gap-3 mt-6">
                {/* Fabulous Media */}
                <a
                  href="https://fabulousmedia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAq1BMVEVHcEwAAADxmjLdVS8AAAAAAACgoKDi3t3tjzTymjHub0bdPC+uKyKfJx+Li4v////q6urXmWXsVi/qNi7MNSu5LyafKCBjY2P4///x8fLqPjK8MSeeJh1ISEj5+vofHx/Rzs7qVEy9urrujIfrLBt6enrWq6m9Kh73x8XcGgC9IRO2dXOnU0+dDwQ4ODitY2CyQDqogYC4EAC4lpScAAC4GAQ0OjsAAAD///8RPPMVAAAAOXRSTlMAYGBgQf//////////UP//////////////////////////////////////////////////UP9QUGHElwbPAAABN0lEQVR4AWyRVRLDMAwFy9zKYU6Zme9/s9Z5ozTqZH93TXKlUpXUBPVKpdEUtNqdbk6vPxj+BSMiZcB2TMt23L/AIyI/ML62F1r9KHJiGSQpaXzDtMLQdqJoIHcYB5QRWCF85MqgDZ9+dT/S3pHBhMDU0ss1AxHMCPSsMIKP4mLQIjBf9LXGBoVgSWC1sNmv40LgEdhsI/a7/eGYB6cUvr1lHa3Pfno+IsgHoHY/fwmI/OsRQZsvcGPvOIo094cOJsTMng6CJw/tpYOEciaDdeZ5TfLmOzDty7e4rQh4TQS4BVCH3fNOYNREwIMG6XnPN2oiAK1fkVLGpMkBD1uimjLgcTNpUwb5wNmPRcAoYlR5UBhqkJQF4rleaYDnglFZIJ7bKgvE383KAvF3k9dnoOyPCSzggAEAuL07sDHFZu4AAAAASUVORK5CYII="
                    alt="Fabulous Media"
                    className="w-4 h-4 object-contain"
                  />
                </a>
                {/* Movodream */}
                <a
                  href="https://gocommercially.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABAlBMVEX////+/////v/8///5///7//z///v///3//f//+//+/v/2//7/9///9f/54vLnqs7+6vv//Pz/8f//5vnAcpaxLHH93vftxeHTUJzTG4XTKYu/L3/w//3Qu9SDHm3LLo7JBYvGFpuqAH7PhLfv2/Dm5u9GL2yUcKr71POkPYShAHnOebTjxOHe3uUxAF7Ek7mpgKCadLHf0Ny1nrn22PyZiqPkuNbOuMf//ftWO3VdAHyBHZ+dYqbnz+a9n7PJv9JUMGrBg8pkAIdmAJRxG4XRrsiKZZRxSYZ+X5fFpc+6scbMvtja1eDQbp7baaDkfrTjjb67fquUdZyaha52ZYz4xeFu0HcoAAABaUlEQVR4AWTPhWKDMBRA0ScJeSF0Xejc3d3dvW7//yuDTqEX5yAJ/IRAacgIrHQQQK4UjSER5hwSACYZI9YKKs4hchIaRhHhflQMFDrHYgn73yQbFcQ5EoE+BLEDxUFRxhNnTEhDXCoNDY9EaAKdRWv16Nj4xPhkKRLwqP4jT/H0zOzc/MLi0jKDJ8y9ubK6tr6xGW8tTxlPkkHZ3lk1S7txYa/gDGQR1fbO/sHh0fHSySkaZoL/nUXnq0cXl1fXN7FNMGPIdHt3//D49Mzi9c+LJs0ThBYPXl7f3uMp5ZlD7OFZoLURC+ItQEQkIBBCGPZQEGXgenT0ZHRt9Pn68PajXD44+Dio9JBZCifVWr3YaDSKzcNWq11uH7c6H98jCe1St9s9GTlZO7k+Pbi9vU23ys8/nVLOKQYBzM3BBzrNOZcMTKMJ0pLTHlph9P7sjICTW2ceTBLiNxJjekOAFTOICCXB5wYMAAB5vSG2tc5uBwAAAABJRU5ErkJggg=="
                    alt="Movodream"
                    className="w-4 h-4 object-contain"
                  />
                </a>
              </div>
            </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50">
              © 2026 Movodream. Built for travelers who want a better Amritsar experience.
            </p>
          </div>
        </div>
        </div>
      </footer>
    </main>
  );
}