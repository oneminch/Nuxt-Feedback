<script setup lang="ts">
import { cn } from "#nuxt-feedback/lib/utils";

defineProps<{
  errorMessage?: string;
}>();
</script>

<template>
  <p
    aria-live="polite"
    :class="
      cn(
        'nfw:text-xs nfw:mt-1.5 nfw:mb-2.5 nfw:h-3 nfw:leading-3 nfw:transition-all nfw:duration-150 nfw:translate-y-0.25 nfw:opacity-0 nfw:invisible nfw:text-rose-500',
        {
          'nfw:translate-y-0 nfw:opacity-100 nfw:visible': errorMessage,
        },
      )
    "
  >
    {{ errorMessage }}
  </p>
</template>
