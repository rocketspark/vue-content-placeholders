import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'vue-content-placeholders',
            fileName: (format) => `vue-content-placeholders.${ format }.js`
        },

        rollupOptions: {
            external: [ "vue" ],
            output: {
                globals: {
                    vue: "Vue",
                }
            }
        },
    },
    plugins: [ vue() ],
})
