<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DialogTitle, type DialogTitleProps, useForwardProps } from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogTitle
    data-slot="dialog-title"
    v-bind="forwardedProps"
    :class="
      cn('text-foreground text-lg leading-none font-semibold', props.class)
    "
  >
    <slot />
  </DialogTitle>
</template>
