<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="drawer-header"
    :class="cn('nfw:flex nfw:flex-col nfw:gap-1.5 nfw:p-4', props.class)"
  >
    <slot />
  </div>
</template>
