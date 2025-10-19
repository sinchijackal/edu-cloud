import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';
import { makeI18n } from "@/plugins/i18n";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

let i18nPlugin: any | undefined
try {
    // si usas top-level await en Vite 7, puedes hacer: i18nPlugin = await makeI18n()
    // si no, resuélvelo antes y luego llama createInertiaApp
    i18nPlugin = await makeI18n()
} catch (err) {
    console.error('[i18n] No se pudo cargar la librería:', err)
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18nPlugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
