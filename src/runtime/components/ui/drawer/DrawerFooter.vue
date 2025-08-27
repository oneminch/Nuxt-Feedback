<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="drawer-footer"
    :class="
      cn('nfw:mt-auto nfw:flex nfw:flex-col nfw:gap-2 nfw:p-4', props.class)
    "
  >
    <slot />
  </div>
</template>
