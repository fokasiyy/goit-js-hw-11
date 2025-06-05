import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

// Получаем html-файлы из папки src (относительно root)
const inputFiles = glob.sync('*.html', { cwd: 'src', absolute: true });

export default defineConfig(({ command }) => ({
  base: '/goit-js-hw-11/',
  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      // Если html файлов нет, указываем дефолтный входной файл
      input: inputFiles.length > 0 ? inputFiles : 'src/index.html',
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'commonHelpers') return 'commonHelpers.js';
          return '[name].js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) return '[name].[ext]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
  ],
}));

