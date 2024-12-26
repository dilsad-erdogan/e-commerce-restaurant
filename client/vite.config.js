import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/imgbb': {
                target: 'https://api.imgbb.com/1',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/imgbb/, ''),
            },
        },
    },
});