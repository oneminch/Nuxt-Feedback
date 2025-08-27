<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps,
} from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<
  SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="
      cn(
        'nfw:flex nfw:cursor-default nfw:items-center nfw:justify-center nfw:py-1',
        props.class,
      )
    "
  >
    <slot>
      <ChevronDown class="nfw:size-4" />
    </slot>
  </SelectScrollDownButton>
</template>
