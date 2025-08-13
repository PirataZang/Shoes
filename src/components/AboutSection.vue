<template>
    <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content -->
                <div>
                    <h2 class="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">Sobre a SneakerZone</h2>

                    <p class="text-lg text-gray-600 mb-6">Há mais de 10 anos, a SneakerZone é referência em tênis premium no Brasil. Nossa paixão por calçados de qualidade nos levou a criar uma curadoria única de produtos que combinam estilo, conforto e durabilidade.</p>

                    <p class="text-lg text-gray-600 mb-8">Trabalhamos apenas com as melhores marcas e oferecemos uma experiência de compra excepcional, desde a escolha do produto até a entrega na sua casa.</p>

                    <!-- Features -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex items-start space-x-3">
                            <div class="bg-black rounded-full p-2">
                                <Shield class="text-white" :size="20" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-black">Garantia Total</h4>
                                <p class="text-gray-600 text-sm">30 dias para troca ou devolução</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3">
                            <div class="bg-black rounded-full p-2">
                                <Truck class="text-white" :size="20" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-black">Frete Grátis</h4>
                                <p class="text-gray-600 text-sm">Em compras acima de R$ 299</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3">
                            <div class="bg-black rounded-full p-2">
                                <Star class="text-white" :size="20" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-black">Qualidade Premium</h4>
                                <p class="text-gray-600 text-sm">Produtos originais certificados</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3">
                            <div class="bg-black rounded-full p-2">
                                <Clock class="text-white" :size="20" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-black">Entrega Rápida</h4>
                                <p class="text-gray-600 text-sm">Até 3 dias úteis</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image -->
                <div class="relative">
                    <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sobre nós" class="w-full rounded-2xl shadow-2xl" />

                    <!-- Stats Overlay -->
                    <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-black">10+</div>
                            <div class="text-gray-600 text-sm">Anos no Mercado</div>
                        </div>
                    </div>

                    <div class="absolute -top-6 -right-6 bg-black text-white rounded-xl p-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold">500+</div>
                            <div class="text-gray-300 text-sm">Modelos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Shield, Truck, Star, Clock } from 'lucide-vue-next'

export default {
    components: {
        Shield,
        Truck,
        Star,
        Clock,
    },
}
</script>
