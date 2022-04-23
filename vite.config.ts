import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    base: '/react-simple-mind/',
    build: {
        outDir: './docs',
    },
});
