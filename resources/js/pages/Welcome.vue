<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { MoonIcon, SunIcon, UserIcon } from "lucide-vue-next";
import { dashboard, login, register } from '@/routes';
import { Button } from "@/components/ui/button";
import AppLogo from "@/components/AppLogo.vue";

// Dark mode setup
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Mobil menu logic
// `ref` for controlling the state of the mobile menu
const mobileMenuOpen = ref(false)
</script>

<template>
    <Head title="Welcome">>
    </Head>
    <div class="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 font-sans antialiased transition-colors duration-300">

        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
<!--                        <span class="text-xl font-bold tracking-wider">PROYECTO</span>-->
                        <Link href="/" class="flex items-center gap-x-2">
                            <AppLogo />
                        </Link>
                    </a>
                </div>

                <div class="flex lg:hidden">
                    <button @click="mobileMenuOpen = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300">
                        <span class="sr-only">Abrir menú principal</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#features" class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Características</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Nosotros</a>
                </div>

                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-2">
                    <button @click="toggleDark()" type="button" class="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                        <SunIcon v-if="isDark" class="size-5 text-yellow-400" stroke-width="2"/>
                        <MoonIcon v-else class="size-5" style="fill: currentColor; stroke: none;"/>
                    </button>
                    <Link
                        v-if="$page.props.auth.user"
                        :href="dashboard()"
                        class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]">
                        Dashboard
                    </Link>
                    <div v-else class="flex items-center gap-4">
                        <Button as-child class="ml-2 bg-blue-500 hover:bg-blue-600 text-white">
                            <Link :href="login()">
                                <UserIcon class="size-5"/>
                                Iniciar sesión
                            </Link>
                        </Button>
                        <Button as-child variant="outline">
                            <Link :href="register()">
                                Register
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>

            <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-50"></div>
                <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="text-xl font-bold tracking-wider">PROYECTO</span>
                        </a>
                        <button @click="mobileMenuOpen = false" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300">
                            <span class="sr-only">Cerrar menú</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-200/10">
                            <div class="space-y-2 py-6">
                                <a href="#features" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-slate-800">Características</a>
                                <a href="#" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-slate-800">Nosotros</a>
                            </div>
                            <div class="py-6 flex items-center gap-x-6">
                                <Button as-child class="flex-1 ml-2 bg-blue-500 hover:bg-blue-600">
                                    <Link :href="login()">
                                        <UserIcon class="size-5"/>
                                        Iniciar sesión
                                    </Link>
                                </Button>
                                <button @click="toggleDark()" type="button" class="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                                    <SunIcon v-if="isDark" class="size-5 text-yellow-400" stroke-width="2"/>
                                    <MoonIcon v-else class="size-5" style="fill: currentColor; stroke: none;"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="relative isolate px-6 pt-14 lg:px-8">
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                            La solución de software para <span class="text-blue-500 dark:text-blue-400">simplificar tu trabajo</span>
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Describe aquí el problema que tu software resuelve. Sé conciso y directo, capturando la atención del usuario con el beneficio principal.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                                Comienza tu prueba gratis
                            </a>
                            <a href="#features" class="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-300">Ver características <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="features" class="bg-slate-50 dark:bg-slate-800 py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <p class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Todo lo que necesitas</p>
                        <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Diseñado para la eficiencia y la colaboración
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Explica brevemente por qué estas características son importantes y cómo mejoran la vida o el trabajo del usuario.
                        </p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
                                        </svg>
                                    </div>
                                    Despliegue en la Nube
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">Tu proyecto siempre disponible, escalable y seguro sin preocuparte por la infraestructura.</dd>
                            </div>

                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                        </svg>
                                    </div>
                                    Seguridad Avanzada
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">Protección de datos con encriptación de extremo a extremo y autenticación de dos factores.</dd>
                            </div>

                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197"/>
                                        </svg>
                                    </div>
                                    Analíticas Inteligentes
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">Visualiza tus datos con dashboards intuitivos y toma decisiones informadas en tiempo real.</dd>
                            </div>

                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                        </svg>
                                    </div>
                                    Soporte Dedicado
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">Nuestro equipo está disponible 24/7 para ayudarte a resolver cualquier duda o inconveniente.</dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </section>
        </main>

        <footer class="bg-white dark:bg-slate-900">
            <div class="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                <p class="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                    &copy; 2025 Tu Empresa, Inc. Todos los derechos reservados.
                </p>
            </div>
        </footer>

    </div>
</template>
