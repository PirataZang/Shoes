
<template>
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          Entre em Contato
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Tem alguma dúvida? Nossa equipe está pronta para ajudar você!
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-black mb-6">Informações de Contato</h3>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="bg-black rounded-full p-3">
                  <MapPin class="text-white" :size="20" />
                </div>
                <div>
                  <h4 class="font-semibold text-black">Endereço</h4>
                  <p class="text-gray-600">Rua das Palmeiras, 123 - Centro<br>São Paulo, SP - CEP 01234-567</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-black rounded-full p-3">
                  <Phone class="text-white" :size="20" />
                </div>
                <div>
                  <h4 class="font-semibold text-black">Telefone</h4>
                  <p class="text-gray-600">(11) 9999-8888</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-black rounded-full p-3">
                  <Mail class="text-white" :size="20" />
                </div>
                <div>
                  <h4 class="font-semibold text-black">E-mail</h4>
                  <p class="text-gray-600">contato@sneakerzone.com.br</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-black rounded-full p-3">
                  <Clock class="text-white" :size="20" />
                </div>
                <div>
                  <h4 class="font-semibold text-black">Horário</h4>
                  <p class="text-gray-600">Segunda à Sexta: 9h às 18h<br>Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-black mb-4">Siga-nos</h4>
            <div class="flex space-x-4">
              <a href="#" class="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Instagram :size="20" />
              </a>
              <a href="#" class="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Facebook :size="20" />
              </a>
              <a href="#" class="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Twitter :size="20" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-2xl p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  :class="{ 'border-red-500': errors.firstName }"
                />
                <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Sobrenome *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  :class="{ 'border-red-500': errors.lastName }"
                />
                <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Assunto *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.subject }"
              >
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida sobre produtos</option>
                <option value="pedido">Informações sobre pedido</option>
                <option value="troca">Troca ou devolução</option>
                <option value="sugestao">Sugestão</option>
                <option value="outro">Outro</option>
              </select>
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                :class="{ 'border-red-500': errors.message }"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>
            
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Enviar Mensagem</span>
              <span v-else class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </span>
            </button>
          </form>
          
          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div class="flex items-center">
              <CheckCircle :size="20" class="mr-2" />
              <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-vue-next'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!form.firstName.trim()) {
    errors.value.firstName = 'Nome é obrigatório'
  }
  
  if (!form.lastName.trim()) {
    errors.value.lastName = 'Sobrenome é obrigatório'
  }
  
  if (!form.email.trim()) {
    errors.value.email = 'E-mail é obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.value.email = 'E-mail inválido'
  }
  
  if (!form.subject) {
    errors.value.subject = 'Assunto é obrigatório'
  }
  
  if (!form.message.trim()) {
    errors.value.message = 'Mensagem é obrigatória'
  } else if (form.message.trim().length < 10) {
    errors.value.message = 'Mensagem deve ter pelo menos 10 caracteres'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.assign(form, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
