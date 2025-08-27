<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    data-slot="dialog-footer"
    :class="
      cn(
        'nfw:flex nfw:flex-col-reverse nfw:gap-2 nfw:sm:flex-row nfw:sm:justify-end',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
