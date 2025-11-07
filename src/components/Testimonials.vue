<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-support to-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          Here's What Our Clients Have To Say About Us…
        </h2>
        <p class="text-center text-gray-600 text-lg mb-12 md:mb-16">
          Don't just take our word for it — hear from businesses we've helped grow globally.
        </p>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Testimonial Card 1 -->
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
              <div class="ml-4">
                <h4 class="font-title font-bold text-gray-900">John Doe</h4>
                <p class="text-sm text-gray-600">CEO, Tech Solutions Inc.</p>
              </div>
            </div>
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed">
              "Working with Global Translation Group transformed our international expansion. Their expertise helped us enter three new markets successfully."
            </p>
          </div>
          
          <!-- Testimonial Card 2 -->
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                SM
              </div>
              <div class="ml-4">
                <h4 class="font-title font-bold text-gray-900">Sarah Martinez</h4>
                <p class="text-sm text-gray-600">Marketing Director, Global Brands</p>
              </div>
            </div>
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed">
              "The consultation was incredibly valuable. They identified issues with our AI translations that were costing us customers. Highly recommended!"
            </p>
          </div>
          
          <!-- Testimonial Card 3 -->
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                RK
              </div>
              <div class="ml-4">
                <h4 class="font-title font-bold text-gray-900">Robert Kim</h4>
                <p class="text-sm text-gray-600">Founder, E-Commerce Plus</p>
              </div>
            </div>
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed">
              "Their localisation strategies increased our international sales by 45% in just 6 months. The ROI has been exceptional."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Testimonials component with placeholder cards
</script>
