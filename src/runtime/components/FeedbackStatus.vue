<script setup lang="ts">
import SuccessIcon from "#nuxt-feedback/components/icons/Success.vue";
import FailureIcon from "#nuxt-feedback/components/icons/Failure.vue";
import type { SubmissionStatus } from "../../types";

defineProps<{
  status: SubmissionStatus;
  message: string;
}>();
</script>

<template>
  <div
    class="nfw:flex nfw:flex-col nfw:items-center nfw:justify-center nfw:gap-6 nfw:p-6"
    role="status"
    aria-live="polite"
  >
    <SuccessIcon
      v-if="status === 'success'"
      class="nfw:size-16 nfw:text-green-500"
    />
    <FailureIcon v-else class="nfw:size-16 nfw:text-rose-500" />
    <h3
      class="nfw:text-xl nfw:text-center nfw:text-zinc-900 nfw:dark:text-zinc-50 nfw:font-medium"
    >
      {{ message }}
    </h3>
  </div>
</template>
