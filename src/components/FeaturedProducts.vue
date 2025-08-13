
<template>
  <section id="products" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
          Coleção Destaque
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore nossa seleção premium de tênis cuidadosamente escolhidos para você
        </p>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
        >
          <!-- Product Image -->
          <div class="relative overflow-hidden bg-gray-50">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <button class="bg-white text-black px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Ver Detalhes
              </button>
            </div>
            
            <!-- Badge -->
            <div v-if="product.badge" class="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ product.badge }}
            </div>
          </div>
          
          <!-- Product Info -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-black mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            
            <div class="flex items-center justify-between">
              <div class="text-2xl font-bold text-black">{{ product.price }}</div>
              <button class="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                <ShoppingCart :size="18" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View All Button -->
      <div class="text-center mt-12">
        <button class="btn-secondary">
          Ver Todos os Produtos
          <ArrowRight class="inline ml-2" :size="20" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShoppingCart, ArrowRight } from 'lucide-vue-next'

const products = ref([
  {
    id: 1,
    name: "Air Max Classic",
    description: "Tênis esportivo premium com tecnologia Air Max",
    price: "R$ 399,90",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Novo"
  },
  {
    id: 2,
    name: "Urban Style",
    description: "Tênis casual urbano para o dia a dia",
    price: "R$ 299,90",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Sport Pro",
    description: "Tênis profissional para alta performance",
    price: "R$ 549,90",
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Premium"
  },
  {
    id: 4,
    name: "Classic White",
    description: "Tênis branco clássico atemporal",
    price: "R$ 249,90",
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: ""
  },
  {
    id: 5,
    name: "Black Edition",
    description: "Edição especial em preto fosco",
    price: "R$ 449,90",
    image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Limitado"
  },
  {
    id: 6,
    name: "Running Elite",
    description: "Tênis para corrida de alta performance",
    price: "R$ 599,90",
    image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Pro"
  }
])
</script>
