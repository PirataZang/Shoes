
<template>
  <footer class="bg-black text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <h3 class="text-2xl font-display font-bold mb-4">SneakerZone</h3>
          <p class="text-gray-300 mb-6 max-w-md">
            Sua loja premium de tênis com mais de 10 anos de experiência. 
            Qualidade, estilo e conforto em cada produto.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <Instagram :size="20" />
            </a>
            <a href="#" class="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <Facebook :size="20" />
            </a>
            <a href="#" class="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <Twitter :size="20" />
            </a>
            <a href="#" class="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
              <Youtube :size="20" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Links Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-300 hover:text-white transition-colors">Início</a></li>
            <li><a href="#products" class="text-gray-300 hover:text-white transition-colors">Produtos</a></li>
            <li><a href="#about" class="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <!-- Customer Service -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Atendimento</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Trocas e Devoluções</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Termos de Uso</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Map Section -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h4 class="text-lg font-semibold mb-4 text-center">Nossa Localização</h4>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <!-- Contact Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <MapPin :size="20" class="text-gray-400" />
              <div>
                <p class="text-white font-medium">Loja Física</p>
                <p class="text-gray-300 text-sm">Rua das Palmeiras, 123 - Centro</p>
                <p class="text-gray-300 text-sm">São Paulo, SP - CEP 01234-567</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <Phone :size="20" class="text-gray-400" />
              <div>
                <p class="text-white font-medium">Telefone</p>
                <p class="text-gray-300 text-sm">(11) 9999-8888</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <Clock :size="20" class="text-gray-400" />
              <div>
                <p class="text-white font-medium">Horário de Funcionamento</p>
                <p class="text-gray-300 text-sm">Segunda à Sexta: 9h às 18h</p>
                <p class="text-gray-300 text-sm">Sábado: 9h às 14h</p>
              </div>
            </div>
          </div>
          
          <!-- Map -->
          <div class="lg:col-span-2">
            <div class="bg-gray-800 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6448!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAyLjAiUyA0NsKwMzgnNDEuMyJX!5e0!3m2!1spt!2sbr!4v1642000000000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="filter grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm">
            © 2024 SneakerZone. Todos os direitos reservados.
          </div>
          
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Youtube } from 'lucide-vue-next'
</script>
