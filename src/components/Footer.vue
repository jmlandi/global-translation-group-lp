<template>
  <footer class="bg-gray-900 text-white py-12 md:py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid gap-8 md:grid-cols-3">
          <!-- Company Info -->
          <div>
            <h3 class="font-title text-2xl font-bold mb-4 text-primary">
              Global Translation Group
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Your trusted partner for translation and localisation services, helping businesses succeed in the global marketplace.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="font-title text-lg font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="#lead-form" class="text-gray-300 hover:text-primary transition-colors">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h4 class="font-title text-lg font-bold mb-4">Connect With Us</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@globaltranslationgroup.com" class="text-gray-300 hover:text-primary transition-colors">
                  info@globaltranslationgroup.com
                </a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a href="https://www.linkedin.com/company/global-translation-group" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors">
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-gray-800 text-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Global Translation Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
