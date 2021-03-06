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
    build: {
        lib: {
            entry: resolve(__dirname, 'components/index.tsx'),
            name: 'ReactSimpleMind',
            fileName: (format) => `react-simple-mind.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['react', 'react-dom'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'React',
                },
            },
        },
    },
});
