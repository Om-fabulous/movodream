"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

// Deterministic particle positions for SSR safety (no Math.random() in render)
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 5 + 3) % 100}%`,
  top: `${(i * 7 + 11) % 100}%`,
  delay: (i * 0.3) % 5,
  duration: 8 + (i % 4),
}));

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
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center" style={{
        backgroundImage: 'url(/golden.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 lg:col-start-1 lg:col-end-3 lg:w-1/2 lg:mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg mb-8 border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Premium Smart Travel System
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black leading-[1.02] tracking-tight text-white drop-shadow-lg">
                Explore Amritsar
                <br />
                Like An Insider —
                <br />
                Not Like A
                <span className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent">
                  {" "}
                  Tourist.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-8 text-[20px] leading-relaxed text-white/90 max-w-2xl drop-shadow-md">
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
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                    <span className="font-medium text-white">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-5 mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_20px_60px_rgba(255,215,0,0.4)] hover:shadow-[0_30px_80px_rgba(255,215,0,0.6)] transition-all duration-300"
                >
                  GET MY PERSONALIZED ITINERARY
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 border border-white/30 backdrop-blur-sm px-8 py-5 rounded-full font-semibold text-lg text-white transition-all duration-300"
                >
                  Explore Features
                </motion.button>
              </div>

              {/* Trust Line */}
              <p className="mt-8 text-white/80 text-lg drop-shadow-md">
                Used by travelers who want to avoid tourist mistakes and experience the
                real Amritsar.
              </p>
            </motion.div>

            {/* Right Side Visual - Hidden on Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9 }}
              className="hidden"
            >
              {/* Glow */}
              <div className="absolute w-[550px] h-[550px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />

              {/* Main Image Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -0 }}
                className="relative bg-white p-5 rounded-[40px] bottom-42 shadow-[0_30px_100px_rgba(0,0,0,0.15)] rotate-[1deg] w-[95%] max-w-[520px]"
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
                className="absolute -bottom-32 -left-10 bg-white p-6 rounded-3xl rotate-[2deg] shadow-2xl hidden md:block"
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
                    className="group bg-gradient-to-br from-[#f6f6f6] to-white rounded-[30px] p-0 h-full hover:bg-gradient-to-br hover:from-[#d80c8c] hover:to-[#7b2cbf] hover:text-white transition-all duration-500 shadow-md hover:shadow-2xl border border-transparent hover:border-white/20 overflow-hidden relative flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="h-48 overflow-hidden rounded-t-[30px] relative flex-shrink-0">
                      <img
                        src={itemObj.image}
                        alt={itemObj.item}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 flex flex-col relative">
                    {/* Background Animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 0.1, scale: 1 }}
                      className="absolute -right-12 -bottom-12 w-32 h-32 bg-white/30 rounded-full blur-2xl transition-all duration-500"
                    />

                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center text-[#7b2cbf] mb-6 group-hover:shadow-lg transition-all duration-500 shadow-md relative z-10 group-hover:from-white/30 group-hover:to-white/10 group-hover:text-white"
                    >
                      <IconComponent className="w-8 h-8 text-[#7b2cbf] stroke-current group-hover:stroke-white group-hover:text-white transition-all duration-500" />
                    </motion.div>

                    <h3 className="text-2xl font-bold relative z-10 group-hover:text-white transition-colors duration-300">
                      {itemObj.item}
                    </h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      className="mt-4 text-sm leading-relaxed text-[#5b6475] group-hover:text-white/90 transition-colors duration-300 relative z-10"
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
              From personalized itineraries to real-time updates, we&apos;ve got every aspect of your Amritsar journey covered.
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
                  className="group relative bg-white rounded-[36px] p-0 shadow-lg overflow-hidden border border-transparent hover:border-pink-200 transition-all duration-500 flex flex-col"
                >
                  {/* Image Header */}
                  <div className="h-40 overflow-hidden rounded-t-[36px] relative flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-8 relative flex-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d80c8c] to-[#7b2cbf] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-[36px]" />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 mb-6 flex items-center justify-center text-[#7b2cbf] shadow-lg transition-all duration-500 group-hover:from-white/30 group-hover:to-white/10 group-hover:text-white"
                      >
                        <IconComponent className="w-8 h-8 text-[#7b2cbf] stroke-current group-hover:stroke-white group-hover:text-white transition-all duration-500" />
                      </motion.div>

                      <h3 className="text-2xl font-black group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-lg leading-relaxed text-[#5b6475] group-hover:text-white/90 transition-colors duration-300">
                        {item.desc}
                      </p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className="mt-6 h-1 bg-white/30 rounded-full"
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
              From spiritual sanctuaries to historical landmarks, experience the essence of Punjab&apos;s cultural capital.
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
                image: "https://media.gettyimages.com/id/98508693/photo/an-indian-waiter-serves-glasses-of-lassi-at-the-punjabi-lassi-stall-in-amritsar-on-april-16.jpg?s=612x612&w=0&k=20&c=gUJE_6oYwd6TrAz0SRxifXt4_e08rn-o9HRHvNGitXk=",
                icon: UtensilsCrossed
              },
              {
                title: "Heritage Walks",
                desc: "Explore the old city's narrow lanes, ancient havelis, and vibrant markets on foot.",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/93/2d/cf/the-unmatched-ambience.jpg?w=1800&h=1000&s=1",
                icon: Camera
              },
              {
                title: "Spiritual Experience",
                desc: "Immerse yourself in the divine atmosphere, langar service, and kirtan at sacred sites.",
                image: "https://media.istockphoto.com/id/902922738/photo/indian-sikh-youth-show-gatka-sikh-martial-art-form-in-nagar-keertan-celebrating-birth.jpg?s=612x612&w=0&k=20&c=YHAQXmEhGLbEa0DEfqfFhMeb_1F2kbXTEr3o1iLMiRg=",
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

          {/* Horizontal Scrolling Container */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-8 pb-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, iteration) => (
                <div key={iteration} className="flex gap-8 flex-shrink-0">
                  {[
                    {
                      name: "Priya Sharma",
                      location: "Delhi, India",
                      text: "Royal Amritsar transformed our family trip! We discovered places we never would have found on our own.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    },
                    {
                      name: "Rajesh Kumar",
                      location: "Mumbai, India",
                      text: "As a solo traveler, safety was my concern. This app's real-time alerts made my journey smooth.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    },
                    {
                      name: "Amelia Charlotte",
                      location: "New York, USA",
                      text: "The food recommendations were spot-on! Every meal was an unforgettable experience.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                      name: "John Smith",
                      location: "London, UK",
                      text: "Best travel app I've used! The crowd intelligence feature is incredibly accurate.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Sarah Johnson",
                      location: "Sydney, Australia",
                      text: "Affordable and efficient! This app saved us so much time and money.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Michael Brown",
                      location: "Toronto, Canada",
                      text: "The personalized itinerary was exactly what we needed. Highly recommend!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Emma Wilson",
                      location: "Berlin, Germany",
                      text: "Amazing experience! The hidden gems recommendations were incredible.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                      name: "David Lee",
                      location: "Singapore",
                      text: "Worth every penny! The routes optimization is genius.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Lisa Anderson",
                      location: "Melbourne, Australia",
                      text: "Perfect for couples! The romantic experiences are thoughtfully curated.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "James Martinez",
                      location: "Madrid, Spain",
                      text: "The support team is incredibly helpful and responsive.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Sophie Taylor",
                      location: "Paris, France",
                      text: "Cultural experiences were beyond expectations. Truly authentic!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                      name: "Carlos Rodriguez",
                      location: "Barcelona, Spain",
                      text: "The offline access feature is super convenient for travelers.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Nina Patel",
                      location: "Dubai, UAE",
                      text: "Exceeded all my expectations! Booking again for next trip.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Oliver White",
                      location: "Amsterdam, Netherlands",
                      text: "The interface is user-friendly and very intuitive.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Ivy Chen",
                      location: "Tokyo, Japan",
                      text: "Best investment for travelers seeking authentic experiences!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                      name: "Marcus Johnson",
                      location: "Cape Town, South Africa",
                      text: "Premium features at an affordable price. Simply outstanding!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Rebecca Scott",
                      location: "Vancouver, Canada",
                      text: "The safety features gave me peace of mind during my solo adventure.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Alex Kumar",
                      location: "Bangkok, Thailand",
                      text: "Made my trip 10x better! The recommendations are on point.",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60"
                    },
                    {
                      name: "Hannah Green",
                      location: "Copenhagen, Denmark",
                      text: "Professional, friendly, and results-driven. Highly satisfied!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    },
                    {
                      name: "Tom Davies",
                      location: "Edinburgh, Scotland",
                      text: "Changed the way I travel. Will definitely use again!",
                      rating: 5,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60"
                    },
                  ].map((testimonial, i) => (
                    <div key={i} className="flex-shrink-0 w-80">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-gradient-to-br from-white to-pink-50 rounded-[32px] p-8 shadow-lg border border-pink-100 h-full"
                      >
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-lg text-[#5b6475] leading-relaxed italic mb-8">
                          &ldquo;{testimonial.text}&rdquo;
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
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-12 text-[#7a7a7a]">
            <p className="text-sm">✨ Thousands of travelers trusted Royal Amritsar to transform their trip from ordinary sightseeing into a smart premium experience ✨</p>
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
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d80c8c] via-[#7b2cbf] to-[#d80c8c]" />
        
        {/* Animated Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,215,0,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 40% 80%, rgba(255,107,139,0.1) 0%, transparent 50%)`,
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
        />

        {/* Floating Amritsar Image Cards */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-56 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hidden lg:block"
        >
          <img src="https://images.unsplash.com/photo-1583821017783-4333717df070?w=300&auto=format&fit=crop" alt="Golden Temple" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white text-xs font-bold">✨ Golden Temple</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-10 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hidden lg:block"
        >
          <img src="https://images.unsplash.com/photo-1598431416007-869a2a727f8b?w=300&auto=format&fit=crop" alt="Wagah Border" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white text-xs font-bold">🇮🇳 Wagah Border</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [-1, 4, -1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 left-16 w-40 h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hidden xl:block"
        >
          <img src="https://media.gettyimages.com/id/98508693/photo/an-indian-waiter-serves-glasses-of-lassi-at-the-punjabi-lassi-stall-in-amritsar-on-april-16.jpg?s=612x612&w=0&k=20&c=gUJE_6oYwd6TrAz0SRxifXt4_e08rn-o9HRHvNGitXk=" alt="Amritsari Cuisine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white text-xs font-bold">🍛 Local Cuisine</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [2, -4, 2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-40 right-16 w-44 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hidden xl:block"
        >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/93/2d/cf/the-unmatched-ambience.jpg?w=300&h=200&s=1" alt="Heritage Walk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white text-xs font-bold">🏛️ Heritage Walk</span>
          </div>
        </motion.div>

        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLE_DATA.map((particle, i) => (
            <motion.div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          {/* Top Badge + Heading */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide">MOST POPULAR CHOICE</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
              Don't Just Visit
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">Amritsar.</span>
              <br />
              Experience It
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Smartly.</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl mt-10 opacity-90 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Unlock your personalized Royal Amritsar travel system today.
            </motion.p>
          </div>

          {/* Main Content Grid: Pricing + Feature Highlights + Stats */}
          <div className="grid lg:grid-cols-3 gap-8 mt-16 items-start">
            {/* Left Column: Mini Stats & Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
                  <p className="text-3xl font-black text-yellow-300">2,500+</p>
                  <p className="text-xs text-white/70 mt-1">Happy Travelers</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
                  <p className="text-3xl font-black text-yellow-300">4.9★</p>
                  <p className="text-xs text-white/70 mt-1">Average Rating</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
                  <p className="text-3xl font-black text-yellow-300">50+</p>
                  <p className="text-xs text-white/70 mt-1">Hidden Gems</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
                  <p className="text-3xl font-black text-yellow-300">100%</p>
                  <p className="text-xs text-white/70 mt-1">Satisfaction</p>
                </motion.div>
              </div>

              {/* Mini Testimonial */}
              <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed">"Royal Amritsar completely changed how I travel. Found places I never knew existed!"</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" alt="Priya" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">Priya S.</p>
                    <p className="text-xs text-white/60">Delhi, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Center Column: Premium Pricing Card */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative lg:-mt-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-pink-400/30 to-purple-400/30 blur-3xl rounded-[50px] scale-110" />
              
              <div className="relative bg-white/10 backdrop-blur-2xl px-8 py-10 rounded-[48px] shadow-2xl border border-white/20">
                <div className="absolute inset-0 rounded-[48px] overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                <div className="relative z-10 text-center">
                  <motion.p className="text-lg font-semibold text-white/70 tracking-wide uppercase"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                    Royal Amritsar Access
                  </motion.p>

                  <motion.div className="flex items-baseline justify-center gap-2 mt-4"
                    initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}>
                    <span className="text-4xl font-bold text-white/60">₹</span>
                    <h3 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">999</h3>
                  </motion.div>

                  <motion.div className="flex items-center justify-center gap-4 mt-4 text-white/60 text-sm"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                    <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Lifetime Access</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Instant Delivery</span>
                  </motion.div>

                  {/* Price Feature List */}
                  <div className="mt-8 space-y-3 text-left">
                    {[
                      "AI-Powered Personalized Itinerary",
                      "50+ Hidden Gems & Secret Spots",
                      "Real-Time Crowd Intelligence",
                      "Dynamic Route Optimization",
                      "Premium Food Recommendations",
                      "24/7 Priority Support",
                      "Offline Downloadable Access"
                    ].map((feature, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.05 }} className="flex items-center gap-3 text-sm">
                        <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Premium CTA Button */}
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="mt-10 w-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-10 py-6 rounded-full text-xl font-bold shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                        GET MY ROYAL ACCESS
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                      </span>
                    </div>
                  </motion.button>

                  {/* Trust Badges */}
                  <motion.div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/50"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>
                    <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Secure Payment</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                    <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> 30-Day Guarantee</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                    <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> Instant Access</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Smart Travel Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Smart Travel Insights */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span>Smart Travel Insights</span>
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Best Time to Visit Golden Temple", value: "6:00 AM - 7:00 AM", icon: "🌅" },
                    { label: "Wagah Border Ceremony", value: "Daily at Sunset", icon: "🇮🇳" },
                    { label: "Top-Rated Local Food Spot", value: "Bharawan Da Dhaba", icon: "🍛" },
                    { label: "Hidden Gem Alert", value: "Gobindgarh Fort", icon: "🏰" },
                  ].map((insight, i) => (
                    <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                      <span className="text-lg">{insight.icon}</span>
                      <div>
                        <p className="text-xs text-white/50">{insight.label}</p>
                        <p className="text-sm font-semibold text-white/90">{insight.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "🎯", label: "Personalized for You", desc: "AI tailors every recommendation" },
                  { icon: "⚡", label: "Real-Time Updates", desc: "Live crowd & traffic intelligence" },
                  { icon: "🗺️", label: "Offline Maps", desc: "Never get lost without internet" },
                ].map((benefit, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-4">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div className="text-left">
                      <p className="text-sm font-semibold">{benefit.label}</p>
                      <p className="text-xs text-white/60">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* User Avatars Row */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.9 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white/30 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((j) => (
                        <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <p className="text-xs text-white/60">Join 2,500+ smart travelers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-3xl rounded-full" />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" /></svg>
              GOT QUESTIONS?
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mt-8 leading-tight">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-6 text-xl text-[#5b6475] max-w-2xl mx-auto">
              Everything you need to know about the Royal Amritsar experience.
              Can't find what you're looking for? We're here to help.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                question: "What exactly do I get with Royal Amritsar Access?",
                answer: "You receive a complete smart travel system including a personalized AI-powered itinerary, real-time crowd intelligence, dynamic route optimization, 50+ hidden gems and secret spots, premium food recommendations, live alerts & suggestions, safety guidance, offline downloadable access, and 24/7 priority support — all tailored to your travel style and preferences.",
                icon: "🎁",
                category: "Access"
              },
              {
                question: "How is this different from free travel guides?",
                answer: "Unlike generic one-size-fits-all guides, Royal Amritsar uses advanced AI to create a personalized plan based on YOUR specific trip dates, travel style, interests, and budget. It provides real-time crowd predictions, dynamic route optimization that changes throughout the day, insider knowledge that only locals would know, and continuously updates based on live conditions — turning a basic sightseeing trip into a premium smart travel experience.",
                icon: "🤖",
                category: "Features"
              },
              {
                question: "Can I use this if I'm traveling with family / kids?",
                answer: "Absolutely! Royal Amritsar adapts to all traveler types. For families, it recommends kid-friendly attractions, age-appropriate activities, safe routes with rest stops, family-friendly dining spots, and suggests the best timings to avoid crowds so your family can enjoy a stress-free experience. Simply select 'Family' as your travel type during setup.",
                icon: "👨‍👩‍👧‍👦",
                category: "Travel"
              },
              {
                question: "Does it work offline? What about low network areas?",
                answer: "Yes! All your personalized itineraries, maps, recommendations, and guides are downloadable for offline access. This means you can navigate Amritsar's narrow lanes, visit remote hidden gems, and explore without worrying about network connectivity. Your data syncs automatically when you're back online.",
                icon: "📱",
                category: "Technical"
              },
              {
                question: "How does the crowd intelligence feature work?",
                answer: "Our system analyzes real-time data from multiple sources to predict crowd levels at popular attractions, restaurants, and landmarks throughout the day. It then suggests the optimal visiting times, alternative routes to avoid congestion, and even recommends hidden alternatives to over-crowded spots — so you spend less time waiting and more time experiencing.",
                icon: "📊",
                category: "Features"
              },
              {
                question: "What kind of food recommendations can I expect?",
                answer: "From legendary dhabas serving authentic Amritsari kulcha to hidden rooftop cafes and premium dining experiences — our food recommendations cover every budget and taste. You'll get curated lists of local favorites, must-try dishes at each spot, best times to visit, and even dietary-specific recommendations (vegetarian, vegan, Jain, etc.).",
                icon: "🍛",
                category: "Food"
              },
              {
                question: "Can I customize or change my itinerary after purchase?",
                answer: "Yes, your itinerary is fully dynamic and adjustable. You can modify dates, add or remove activities, change preferences, and the AI will instantly regenerate optimized recommendations. The system learns from your choices and continuously improves suggestions throughout your trip planning process.",
                icon: "🔄",
                category: "Access"
              },
              {
                question: "What if I'm not satisfied? Is there a refund policy?",
                answer: "We offer a 30-day money-back guarantee with no questions asked. If Royal Amritsar doesn't significantly enhance your travel experience — from saving time to discovering hidden gems you'd otherwise miss — we'll refund your purchase in full. Your satisfaction is our top priority.",
                icon: "🛡️",
                category: "Support"
              },
            ].map((faq, i) => {
              const [isOpen, setIsOpen] = React.useState(false);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className={`group relative bg-white rounded-[24px] shadow-md border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isOpen 
                      ? 'shadow-xl border-pink-200 shadow-pink-100/50' 
                      : 'border-pink-100/50 hover:shadow-lg hover:border-pink-200/50'
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* Gradient Border Accent on Hover/Open */}
                  <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#d80c8c]/5 to-[#7b2cbf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isOpen ? 'opacity-100' : ''}`} />
                  
                  {/* Left Color Accent Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#d80c8c] to-[#7b2cbf] rounded-l-[24px] transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`} />

                  <div className="relative p-6 md:p-8 pl-8 md:pl-10">
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-br from-[#d80c8c] to-[#7b2cbf] shadow-lg shadow-pink-200/50' 
                            : 'bg-gradient-to-br from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 shadow-sm'
                        }`}
                      >
                        <span className={isOpen ? 'brightness-0 invert' : ''}>{faq.icon}</span>
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className={`text-lg md:text-xl font-bold leading-snug transition-colors duration-300 ${
                            isOpen ? 'text-[#1f1f1f]' : 'text-[#1f1f1f] group-hover:text-[#d80c8c]'
                          }`}>
                            {faq.question}
                          </h3>
                          
                          {/* Expand/Collapse Icon */}
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen 
                                ? 'bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] text-white shadow-md' 
                                : 'bg-pink-50 text-pink-400 group-hover:bg-pink-100'
                            }`}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                          </motion.div>
                        </div>

                        {/* Answer with Expand Animation */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <motion.p
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="mt-5 text-[#5b6475] leading-relaxed text-base md:text-lg"
                              >
                                {faq.answer}
                              </motion.p>
                              
                              {/* Category Badge */}
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="mt-5 inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                              >
                                <span>{faq.category}</span>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-sm border border-pink-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[#1f1f1f] font-bold">Still have questions?</p>
                <p className="text-[#5b6475] text-sm">Our support team is ready to help you 24/7</p>
              </div>
              <button className="bg-gradient-to-r from-[#d80c8c] to-[#7b2cbf] text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105 flex-shrink-0">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-14 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Main Footer Content */}
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
            </div>
          </div>

          {/* Copyright and Logos Section */}
          <div className="border-t border-white/10 pt-8 relative min-h-20 flex items-center justify-center">
            <p className="text-white/50 text-center w-full">
              © 2026 Movodream. Built for travelers who want a better Amritsar experience.
            </p>

            {/* Logos in Footer Right-Down Corner */}
            <div className="absolute bottom-[-30] right-0 flex items-center gap-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-2xl hover:border-pink-500/50 transition-all duration-300">
              {/* Fabulous Media */}
              <a
                href="https://fabulousmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
                title="Fabulous Media"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAq1BMVEVHcEwAAADxmjLdVS8AAAAAAACgoKDi3t3tjzTymjHub0bdPC+uKyKfJx+Li4v////q6urXmWXsVi/qNi7MNSu5LyafKCBjY2P4///x8fLqPjK8MSeeJh1ISEj5+vofHx/Rzs7qVEy9urrujIfrLBt6enrWq6m9Kh73x8XcGgC9IRO2dXOnU0+dDwQ4ODitY2CyQDqogYC4EAC4lpScAAC4GAQ0OjsAAAD///8RPPMVAAAAOXRSTlMAYGBgQf//////////UP//////////////////////////////////////////////////UP9QUGHElwbPAAABN0lEQVR4AWyRVRLDMAwFy9zKYU6Zme9/s9Z5ozTqZH93TXKlUpXUBPVKpdEUtNqdbk6vPxj+BSMiZcB2TMt23L/AIyI/ML62F1r9KHJiGSQpaXzDtMLQdqJoIHcYB5QRWCF85MqgDZ9+dT/S3pHBhMDU0ss1AxHMCPSsMIKP4mLQIjBf9LXGBoVgSWC1sNmv40LgEdhsI/a7/eGYB6cUvr1lHa3Pfno+IsgHoHY/fwmI/OsRQZsvcGPvOIo094cOJsTMng6CJw/tpYOEciaDdeZ5TfLmOzDty7e4rQh4TQS4BVCH3fNOYNREwIMG6XnPN2oiAK1fkVLGpMkBD1uimjLgcTNpUwb5wNmPRcAoYlR5UBhqkJQF4rleaYDnglFZIJ7bKgvE383KAvF3k9dnoOyPCSzggAEAuL07sDHFZu4AAAAASUVORK5CYII="
                  alt="Fabulous Media"
                  className="w-5 h-5 object-contain"
                />
              </a>
              {/* GoCommercially */}
              <a
                href="https://gocommercially.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
                title="GoCommercially"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABJ0lEQVR4AZ3TEazDYBiF4ddlNJnNYTIv1DO8WpuUqks9KY2Gk2KhXKpXStVKrZ5C5b3QLLkX/i3ZsS955CTnww/5EqzvwDroOIWBCdHkGgY+gcIw0Aw4zmGgJ4AmDJwBKMLAEq6dhoGVGgbL1Lf1I0/OZBuoov1Pp1pGh3R2HsdhiACgUsyJiwOdZsQ32Pr1bJlkIdaVsyOJjlz/VIWztFSqq09a9ciryJaOmsaurGoLBvXC2jd1Vd2TNLvd8ryjoTbfsfNOr8b4PwzkKkcbSpW9qsbRo9+AB9p1ZKfQLxmlqhMAl/sizju2xiNA9hoFbBfq0PZu7dtZp7bMUwBIwqNdxq5+FIbA81Trpz2kSxhEAK1BUADnxSAoP636AoPvwNp9+7yB/AKHCUYfTsNJ9QAAAABJRU5ErkJggg=="
                  alt="GoCommercially"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
