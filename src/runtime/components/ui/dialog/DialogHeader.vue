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
    :class="cn('flex flex-col gap-2 text-center sm:text-left', props.class)"
  >
    <slot />
  </div>
</template>
