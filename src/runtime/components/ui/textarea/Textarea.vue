<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "#nuxt-feedback/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="
      cn(
        'nfw:border-input nfw:placeholder:text-muted-foreground nfw:focus-visible:border-ring nfw:focus-visible:ring-ring/50 nfw:aria-invalid:ring-destructive/20 nfw:dark:aria-invalid:ring-destructive/40 nfw:aria-invalid:border-destructive nfw:dark:bg-input/30 nfw:flex nfw:field-sizing-content nfw:min-h-16 nfw:w-full nfw:rounded-md nfw:border nfw:bg-transparent nfw:px-3 nfw:py-2 nfw:text-base nfw:shadow-xs nfw:transition-[color,box-shadow] nfw:outline-none nfw:focus-visible:ring-[3px] nfw:disabled:cursor-not-allowed nfw:disabled:opacity-50 nfw:md:text-sm',
        props.class,
      )
    "
  />
</template>
