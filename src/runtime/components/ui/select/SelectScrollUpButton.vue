<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronUp } from "lucide-vue-next";
import {
  SelectScrollUpButton,
  type SelectScrollUpButtonProps,
  useForwardProps,
} from "reka-ui";
import { cn } from "#nuxt-feedback/utils";

const props = defineProps<
  SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollUpButton
    data-slot="select-scroll-up-button"
    v-bind="forwardedProps"
    :class="
      cn(
        'nfw:flex nfw:cursor-default nfw:items-center nfw:justify-center nfw:py-1',
        props.class
      )
    "
  >
    <slot>
      <ChevronUp class="nfw:size-4" />
    </slot>
  </SelectScrollUpButton>
</template>
