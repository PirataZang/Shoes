
<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, black 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-5xl md:text-7xl font-display font-bold gradient-text mb-6 leading-tight">
            Tênis
            <span class="block">Premium</span>
            <span class="block text-4xl md:text-5xl">para Você</span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-8 max-w-lg">
            Descubra nossa coleção exclusiva de tênis premium. Estilo, conforto e qualidade em cada passo.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="btn-primary">
              <ShoppingBag class="inline mr-2" :size="20" />
              Comprar Agora
            </button>
            <button class="btn-secondary">
              Ver Coleção
            </button>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div class="text-center">
              <div class="text-3xl font-bold text-black">500+</div>
              <div class="text-gray-600 text-sm">Modelos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-black">10k+</div>
              <div class="text-gray-600 text-sm">Clientes</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-black">99%</div>
              <div class="text-gray-600 text-sm">Satisfação</div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative">
          <div class="relative z-10">
            <img 
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Tênis Premium" 
              class="w-full max-w-lg mx-auto animate-float rounded-2xl shadow-2xl"
            />
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute top-10 -left-10 w-20 h-20 bg-black rounded-full opacity-10 animate-pulse-slow"></div>
          <div class="absolute bottom-10 -right-10 w-32 h-32 bg-gray-300 rounded-full opacity-10 animate-bounce-slow"></div>
          <div class="absolute top-1/2 -right-20 w-16 h-16 bg-black rounded-full opacity-5 animate-pulse"></div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown :size="32" class="text-gray-400" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShoppingBag, ChevronDown } from 'lucide-vue-next'
</script>
