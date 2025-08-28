<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  useForwardProps,
} from "reka-ui";
import { cn } from "#nuxt-feedback/utils";

const props = withDefaults(
  defineProps<
    SelectTriggerProps & {
      class?: HTMLAttributes["class"];
      size?: "sm" | "default";
    }
  >(),
  { size: "default" }
);

const delegatedProps = reactiveOmit(props, "class", "size");
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :data-size="size"
    v-bind="forwardedProps"
    :class="
      cn(
        `nfw:border-input nfw:data-[placeholder]:text-muted-foreground nfw:[&_svg:not([class*='nfw:text-'])]:text-muted-foreground nfw:focus-visible:border-ring nfw:focus-visible:ring-ring/50 nfw:aria-invalid:ring-destructive/20 nfw:dark:aria-invalid:ring-destructive/40 nfw:aria-invalid:border-destructive nfw:dark:bg-input/30 nfw:dark:hover:bg-input/50 nfw:flex nfw:w-fit nfw:items-center nfw:justify-between nfw:gap-2 nfw:rounded-md nfw:border nfw:bg-transparent nfw:px-3 nfw:py-2 nfw:text-sm nfw:whitespace-nowrap nfw:shadow-xs nfw:transition-[color,box-shadow] nfw:outline-none nfw:focus-visible:ring-[3px] nfw:disabled:cursor-not-allowed nfw:disabled:opacity-50 nfw:data-[size=default]:h-9 nfw:data-[size=sm]:h-8 nfw:*:data-[slot=select-value]:line-clamp-1 nfw:*:data-[slot=select-value]:flex nfw:*:data-[slot=select-value]:items-center nfw:*:data-[slot=select-value]:gap-2 nfw:[&_svg]:pointer-events-none nfw:[&_svg]:shrink-0 nfw:[&_svg:not([class*='nfw:size-'])]:size-4`,
        props.class
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="nfw:size-4 nfw:opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
