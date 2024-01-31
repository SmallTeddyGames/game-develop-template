import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        UnoCSS(),
        AutoImport({
            // targets to transform
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

            // global imports to register
            imports: [
                // 插件预设支持导入的api
                'vue',
                {
                    'vue-router': [
                        'createRouter',
                        'createWebHistory'
                    ]
                },
                {
                    '@vueuse/core': [
                        'createGlobalState',
                        'useStorage',
                        'useColorMode',
                        'useFullscreen'
                    ]
                },
                {
                    '@/store': [
                        'useGlobalState'
                    ]
                }
            ]
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
        port: 5173,
        host: true,
        open: true
    }
})
