<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { SelectLabel, type SelectLabelProps } from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<
  SelectLabelProps & { class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="cn('nfw:px-2 nfw:py-1.5 nfw:text-sm nfw:font-medium', props.class)"
  >
    <slot />
  </SelectLabel>
</template>
