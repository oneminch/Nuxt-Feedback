<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { SelectSeparator, type SelectSeparatorProps } from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<
  SelectSeparatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    v-bind="delegatedProps"
    :class="
      cn(
        'nfw:bg-border nfw:pointer-events-none nfw:-mx-1 nfw:my-1 nfw:h-px',
        props.class,
      )
    "
  />
</template>
