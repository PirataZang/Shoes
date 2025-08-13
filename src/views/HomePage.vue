<template>
    <section id="HomePage" class="py-20 bg-gray-50">
        <HeroSection />

        <FeaturedProducts />

        <AboutSection />
        
        <ContactForm />
    </section>
</template>

<script setup lang="ts">
import AboutSection from '../components/AboutSection.vue';
import ContactForm from '../components/ContactForm.vue';
import FeaturedProducts from '../components/FeaturedProducts.vue';
import HeroSection from '../components/HeroSection.vue';

AboutSection
</script>
