import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { resolve } from "node:path";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        VueI18nPlugin({
            include: resolve(__dirname, './lang/es.json'),
            fullInstall: false,
            runtimeOnly: true,
            compositionOnly: true,
        }),
        vueDevTools({
            appendTo: "app.ts",
            launchEditor: 'phpstorm',
        }),
    ],
    define: {
        __VUE_I18N_FULL_INSTALL__: false,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_DROP_MESSAGE_COMPILER__: true, // Precompile translations
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
});
