import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/', // Corrigido para a raiz do domínio
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
