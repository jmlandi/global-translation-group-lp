<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img 
            src="/images/logo.png" 
            alt="Global Translation Group Logo" 
            class="h-12 w-auto"
          />
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Services
          </a>
          <a href="#testimonials" class="text-gray-700 hover:text-primary font-medium transition-colors">
            Testimonials
          </a>
          <a href="#lead-form" class="bg-primary hover:bg-opacity-90 text-white font-bold px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Free Consultation
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <a href="#lead-form" class="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm">
            Free Consultation
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Navbar component with logo
</script>
