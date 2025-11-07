<template>
  <section class="relative bg-gradient-to-br from-support to-white py-16 md:py-24 lg:py-32 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Headline -->
        <div class="text-center mb-12 md:mb-16">
          <h1 class="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Attention Business Owners who want to 
            <span class="text-primary">grow their business</span> and 
            <span class="text-primary">generate more revenue</span>.
          </h1>
          
          <div class="max-w-4xl mx-auto space-y-6">
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              We have the perfect opportunity for you — a 
              <span class="font-bold text-accent">FREE audit and consultation</span> 
              with a translation & communication expert.
            </p>
            
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              Give our expert 30 minutes to detail how we can 
              <span class="font-semibold text-primary">optimise your business to succeed on the global marketplace</span>.
            </p>
          </div>
        </div>
        
        <!-- CTA Text -->
        <div class="mb-8 text-center">
          <p class="text-xl md:text-2xl font-bold text-gray-900">
            Discover the step-by-step blueprint to easily generate new business growth.
          </p>
        </div>
        
        <!-- Lead Form -->
        <LeadForm />
      </div>
    </div>
  </section>
</template>

<script setup>
import LeadForm from './LeadForm.vue'
</script>
