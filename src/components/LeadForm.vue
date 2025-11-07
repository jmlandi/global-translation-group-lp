<template>
  <div id="lead-form" class="w-full max-w-2xl mx-auto">
    <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
      <h3 class="font-title text-2xl font-bold mb-6 text-center text-gray-900">
        Fill in this form to claim your FREE audit and 30-minute consultation
      </h3>
      
      <!-- Success Message -->
      <div v-if="successMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p class="text-green-800 text-center">{{ successMessage }}</p>
      </div>
      
      <!-- Error Message -->
      <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-800 text-center">{{ errorMessage }}</p>
      </div>
      
      <div class="space-y-4">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
            Name <span class="text-accent">*</span>
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Your full name"
          />
        </div>
        
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
            Email <span class="text-accent">*</span>
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="your@email.com"
          />
        </div>
        
        <!-- Phone Number -->
        <div>
          <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        
        <!-- Business Name -->
        <div>
          <label for="businessName" class="block text-sm font-semibold text-gray-700 mb-2">
            Business Name
          </label>
          <input
            id="businessName"
            v-model="formData.businessName"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Your company name"
          />
        </div>
        
        <!-- Industry -->
        <div>
          <label for="industry" class="block text-sm font-semibold text-gray-700 mb-2">
            Industry
          </label>
          <input
            id="industry"
            v-model="formData.industry"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="e.g., Technology, Healthcare, Finance"
          />
        </div>
        
        <!-- Translation Service Usage -->
        <div>
          <label for="hasUsedService" class="block text-sm font-semibold text-gray-700 mb-2">
            Have you used a translation service before?
          </label>
          <select
            id="hasUsedService"
            v-model="formData.hasUsedService"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      
      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full mt-6 bg-primary hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {{ isSubmitting ? 'Submitting...' : 'Claim Your FREE Consultation!' }}
      </button>
      
      <p class="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  businessName: '',
  industry: '',
  hasUsedService: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
    
    successMessage.value = 'Thank you! Redirecting...'
    
    // Redirect to thank you page after a brief delay
    setTimeout(() => {
      router.push('/thank-you')
    }, 1500)
    
  } catch (error) {
    console.error('Form submission error:', error)
    errorMessage.value = 'Something went wrong. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
