
<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <h1 class="text-2xl font-display font-bold gradient-text">SneakerZone</h1>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-black transition-colors font-medium">Início</a>
          <a href="#products" class="text-gray-700 hover:text-black transition-colors font-medium">Produtos</a>
          <a href="#about" class="text-gray-700 hover:text-black transition-colors font-medium">Sobre</a>
          <a href="#contact" class="text-gray-700 hover:text-black transition-colors font-medium">Contato</a>
          <button class="btn-primary">Comprar Agora</button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-700 hover:text-black">
            <Menu v-if="!mobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="flex flex-col space-y-4">
          <a href="#home" @click="closeMobileMenu" class="text-gray-700 hover:text-black transition-colors font-medium">Início</a>
          <a href="#products" @click="closeMobileMenu" class="text-gray-700 hover:text-black transition-colors font-medium">Produtos</a>
          <a href="#about" @click="closeMobileMenu" class="text-gray-700 hover:text-black transition-colors font-medium">Sobre</a>
          <a href="#contact" @click="closeMobileMenu" class="text-gray-700 hover:text-black transition-colors font-medium">Contato</a>
          <button class="btn-primary w-full">Comprar Agora</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
