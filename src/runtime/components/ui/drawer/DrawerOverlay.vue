<script lang="ts" setup>
import type { DialogOverlayProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DrawerOverlay } from "vaul-vue";
import { cn } from "#nuxt-feedback/utils";

const props = defineProps<
  DialogOverlayProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DrawerOverlay
    data-slot="drawer-overlay"
    v-bind="delegatedProps"
    :class="
      cn(
        'nfw:data-[state=open]:animate-in nfw:data-[state=closed]:animate-out nfw:data-[state=closed]:fade-out-0 nfw:data-[state=open]:fade-in-0 nfw:fixed nfw:inset-0 nfw:z-50 nfw:bg-black/80',
        props.class
      )
    "
  />
</template>
