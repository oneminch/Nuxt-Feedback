<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { RadioGroupItem, useForwardProps } from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'nfw:relative nfw:border-input nfw:text-primary nfw:focus-visible:border-ring nfw:focus-visible:ring-ring/50 nfw:aria-invalid:ring-destructive/20 nfw:dark:aria-invalid:ring-destructive/40 nfw:aria-invalid:border-destructive nfw:dark:bg-input/75 nfw:aspect-square nfw:size-12 nfw:flex nfw:items-center nfw:justify-center nfw:shrink-0 nfw:rounded-full nfw:border nfw:shadow-xs nfw:transition-[color,box-shadow] nfw:outline-none nfw:focus-visible:ring-[3px] nfw:disabled:cursor-not-allowed nfw:disabled:opacity-50 nfw:cursor-pointer nfw:bg-background',
        props.class,
      )
    "
  >
    <slot />
  </RadioGroupItem>
</template>
