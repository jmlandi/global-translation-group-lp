<template>
  <section class="relative bg-gradient-to-br from-support to-white py-16 md:py-24 lg:py-32 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <!-- Left Column - Text Content -->
          <div class="order-2 lg:order-1" data-aos="fade-right">
            <h1 class="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Attention Business Owners who want to 
              <span class="text-primary">grow their business</span> and 
              <span class="text-primary">generate more revenue</span>.
            </h1>
            
            <div class="space-y-6 mb-8">
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
            
            <!-- Mobile Image (shown on small screens) -->
            <div class="lg:hidden mb-8">
              <img 
                src="/images/positive-curly-female-blogger-sends-mails-messages-via-smartphone-installs-new-application-smiles-broadly.jpg" 
                alt="Happy business professional using smartphone" 
                class="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div class="mb-6">
              <p class="text-xl md:text-2xl font-bold text-gray-900">
                Discover the step-by-step blueprint to easily generate new business growth.
              </p>
            </div>
            
            <!-- CTA Button for desktop -->
            <div class="hidden lg:block">
              <a 
                href="#lead-form" 
                class="inline-block bg-accent hover:bg-opacity-90 text-white font-bold text-lg py-4 px-10 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Claim Your FREE Consultation Now →
              </a>
            </div>
          </div>
          
          <!-- Right Column - Hero Image (desktop only) -->
          <div class="order-1 lg:order-2 hidden lg:block" data-aos="fade-left">
            <img 
              src="/images/positive-curly-female-blogger-sends-mails-messages-via-smartphone-installs-new-application-smiles-broadly.jpg" 
              alt="Happy business professional using smartphone" 
              class="w-full h-[500px] xl:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        <!-- Lead Form -->
        <div data-aos="fade-up" data-aos-delay="200">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LeadForm from './LeadForm.vue'
</script>
