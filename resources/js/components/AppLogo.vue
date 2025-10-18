<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
</script>

<template>
    <div
        class="flex aspect-square size-8 items-center justify-center rounded-md text-sidebar-primary-foreground">
        <AppLogoIcon class="size-8 fill-current text-[#D60B52] dark:text-white"/>
    </div>
    <div class="ml-1 grid text-left text-sm">
        <div class="relative inline-block">
            <h1 class="text-xl font-medium tracking-[0.12em]">INKODEX</h1>
            <span
                class="absolute -top-2 right-0 text-[0.60rem] font-semibold tracking-widest text-[#2A223A]/80 dark:text-gray-400">TECH</span>
        </div>
    </div>
</template>
