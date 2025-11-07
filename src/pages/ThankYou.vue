<template>
  <div class="thank-you-page min-h-screen flex items-center justify-center bg-gradient-to-br from-support to-white py-12 px-4">
    <div class="max-w-3xl w-full">
      <!-- Success Icon -->
      <div class="text-center mb-8">
        <div class="inline-block w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <h1 class="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
          Thank You! 🎉
        </h1>
        
        <div class="space-y-4 mb-8">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            Thank you for claiming your <span class="font-bold text-primary">free audit and consultation call</span>.
          </p>
          
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            A member of the <span class="font-bold text-primary">Global Translation Group</span> team will be in touch soon to book your call.
          </p>
        </div>
        
        <!-- LinkedIn CTA -->
        <div class="bg-support rounded-xl p-6 mb-8">
          <p class="text-gray-800 font-semibold mb-4">
            In the meantime, please follow us on LinkedIn for more information about Global Translation Group.
          </p>
          
          <a
            href="https://www.linkedin.com/company/global-translation-group"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Follow Us on LinkedIn
          </a>
        </div>
        
        <!-- Return Link -->
        <router-link
          to="/"
          class="inline-block text-primary hover:text-accent font-semibold text-lg underline transition-colors"
        >
          ← Return to Home
        </router-link>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-8 text-center">
        <p class="text-gray-600 text-sm">
          Check your email for confirmation and next steps.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Thank you page component
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>
