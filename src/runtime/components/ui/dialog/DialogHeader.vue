<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="dialog-header"
    :class="
      cn(
        'nfw:flex nfw:flex-col nfw:gap-2 nfw:text-center nfw:sm:text-left',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
