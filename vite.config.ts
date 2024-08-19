import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import typescript2 from "rollup-plugin-typescript2";
import { fileURLToPath, URL } from "url";


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'vue-content-placeholders',
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
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
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [
        vue(),
        typescript2({
            check: false,
            include: [ "src/components/*.vue" ],
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true,
                },
                exclude: [ "vite.config.ts", "main.ts" ],
            },
        }),
    ],
})
