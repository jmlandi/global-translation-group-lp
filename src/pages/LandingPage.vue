<template>
  <div class="landing-page">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Hero Section with Form -->
    <HeroSection />
    
    <!-- Consultation Details/Highlights -->
    <ConsultationDetails />
    
    <!-- Testimonials -->
    <Testimonials />
    
    <!-- Final CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 class="font-title text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Transform Your Global Business?
          </h2>
          <p class="text-xl md:text-2xl text-white mb-8 opacity-95">
            Don't miss this opportunity for a FREE audit and consultation.
          </p>
          <a
            href="#lead-form"
            class="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-lg md:text-xl py-4 px-10 md:px-12 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            ✨ Claim Your FREE Consultation! ✨
          </a>
          <p class="mt-6 text-white text-sm opacity-90">
            Limited spots available — Book your call today!
          </p>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import ConsultationDetails from '../components/ConsultationDetails.vue'
import Testimonials from '../components/Testimonials.vue'
import Footer from '../components/Footer.vue'

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}
</style>
