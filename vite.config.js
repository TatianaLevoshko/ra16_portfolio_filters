import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/ra16_portfolio_filters/',
    plugins: [react()],
});