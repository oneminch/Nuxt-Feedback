<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Label, type LabelProps } from "reka-ui";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <Label
    data-slot="label"
    v-bind="delegatedProps"
    :class="
      cn(
        'nfw:flex nfw:items-center nfw:gap-2 nfw:text-sm nfw:leading-none nfw:text-foreground nfw:font-medium nfw:select-none nfw:group-data-[disabled=true]:pointer-events-none nfw:group-data-[disabled=true]:opacity-50 nfw:peer-disabled:cursor-not-allowed nfw:peer-disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
