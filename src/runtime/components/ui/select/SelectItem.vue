<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from "reka-ui";
import { cn } from "#nuxt-feedback/utils";

const props = defineProps<
  SelectItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectItem
    data-slot="select-item"
    v-bind="forwardedProps"
    :class="
      cn(
        `nfw:focus:bg-accent nfw:focus:text-accent-foreground nfw:[&_svg:not([class*='nfw:text-'])]:text-muted-foreground nfw:relative nfw:flex nfw:w-full nfw:cursor-default nfw:items-center nfw:gap-2 nfw:rounded-sm nfw:py-1.5 nfw:pr-8 nfw:pl-2 nfw:text-sm nfw:outline-hidden nfw:select-none nfw:data-[disabled]:pointer-events-none nfw:data-[disabled]:opacity-50 nfw:[&_svg]:pointer-events-none nfw:[&_svg]:shrink-0 nfw:[&_svg:not([class*='nfw:size-'])]:size-4 nfw:*:[span]:last:flex nfw:*:[span]:last:items-center nfw:*:[span]:last:gap-2`,
        props.class
      )
    "
  >
    <span
      class="nfw:absolute nfw:right-2 nfw:flex nfw:size-3.5 nfw:items-center nfw:justify-center"
    >
      <SelectItemIndicator>
        <Check class="nfw:size-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
