<script setup lang="ts">
const toggleColorMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

useSeoMeta({
  title: "Nuxt Feedback - Playground",
  ogTitle: "Nuxt Feedback - Playground",
  description: "Demo of Nuxt Feedback Module.",
  ogDescription: "Demo of Nuxt Feedback Module.",
  twitterCard: "summary_large_image",
  ogImage: "/cover.png",
});
</script>

<template>
  <div class="w-5/6 h-full absolute inset-0 mx-auto flex flex-col">
    <header class="flex items-center justify-between">
      <h1 class="font-bold text-xl">
        Playground for <span class="text-green-500">Nuxt Feedback</span>
      </h1>

      <nav class="flex items-center gap-6 py-4">
        <nuxt-link
          class="underline decoration-dashed decoration-green-400"
          to="/"
          >Home</nuxt-link
        >
        <nuxt-link
          class="underline decoration-dashed decoration-green-400"
          to="/about"
          >About</nuxt-link
        >

        <button
          class="text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 flex items-center justify-center size-8 rounded-lg cursor-pointer leading-0.5"
          @click="toggleColorMode"
        >
          🔆
        </button>
      </nav>
    </header>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
