<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DialogOverlay, type DialogOverlayProps } from "reka-ui";
import { cn } from "#nuxt-feedback/utils";

const props = defineProps<
  DialogOverlayProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DialogOverlay
    data-slot="dialog-overlay"
    v-bind="delegatedProps"
    :class="
      cn(
        'nfw:data-[state=open]:animate-in nfw:data-[state=closed]:animate-out nfw:data-[state=closed]:fade-out-0 nfw:data-[state=open]:fade-in-0 nfw:fixed nfw:inset-0 nfw:z-50 nfw:bg-neutral-800/75',
        props.class
      )
    "
  >
    <slot />
  </DialogOverlay>
</template>
