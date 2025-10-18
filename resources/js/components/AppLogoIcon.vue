<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <svg
        viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"
        :class="className"
        v-bind="$attrs">
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M85.4736 23.5431H170.536C171.069 23.5431 171.6 23.5712 172.136 23.6133L133.614 1.25747C132.275 0.470674 130.176 0 128.002 0C125.834 0 123.732 0.470674 122.4 1.25747L83.8709 23.6133C84.402 23.5712 84.9401 23.5431 85.4736 23.5431Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M170.536 232.462H85.4736C84.9401 232.462 84.402 232.433 83.8709 232.405L122.4 254.759C123.732 255.532 125.834 256 128.002 256C130.178 256 132.275 255.532 133.616 254.759L172.138 232.405C171.6 232.436 171.072 232.462 170.536 232.462Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M115.19 36.8601H85.4735C80.3394 36.8601 73.3184 40.9276 70.749 45.4049L55.8825 71.2732L115.19 36.8601Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M200.124 71.2732L185.251 45.4049C182.695 40.9276 175.67 36.8601 170.538 36.8601H140.81L200.124 71.2732Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M55.8825 184.727L70.749 210.595C73.3184 215.072 80.3394 219.149 85.4735 219.149H115.19L55.8825 184.727Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M196.73 38.7499L239.266 112.793C239.527 113.255 239.779 113.746 240 114.233V69.5076C240 66.1684 237.282 61.4218 234.398 59.7382L195.873 37.38C196.169 37.8319 196.463 38.2886 196.73 38.7499Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M239.266 143.197L196.73 217.253C196.463 217.723 196.169 218.173 195.871 218.615L234.395 196.269C237.279 194.583 239.998 189.834 239.998 186.485V141.767C239.779 142.258 239.529 142.75 239.266 143.197Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M43.0776 93.5776L28.2133 119.46C25.6486 123.935 25.6486 132.084 28.2133 136.535L43.0776 162.422V93.5776Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.7431 112.793L59.2695 38.7429C59.5421 38.2862 59.8333 37.8296 60.1245 37.3777L21.6093 59.7382C18.786 61.3774 16 66.2129 16 69.5076V114.236C16.2353 113.746 16.4822 113.255 16.7431 112.793Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M59.2719 217.253L16.7431 143.197C16.4822 142.75 16.2353 142.258 16 141.767V186.488C16 189.785 18.786 194.623 21.6093 196.271L60.1268 218.618C59.8333 218.173 59.5444 217.726 59.2719 217.253Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M227.796 119.46L212.932 93.5776V162.42L227.796 136.533C230.351 132.082 230.351 123.923 227.796 119.46Z"/>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M140.81 219.149H170.536C175.667 219.149 182.695 215.072 185.249 210.595L200.122 184.727L140.81 219.149Z"/>
    </svg>


</template>
