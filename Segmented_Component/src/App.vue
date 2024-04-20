<script setup lang="ts">
  import HelloWorld from "./components/SegmentedComponent.vue";
  import { ref } from "vue";

  let navigationItems = [
    { value: 1, label: "Test 1" },
    { value: 2, label: "Test 2" },
    { value: 3, label: "Test 3" },
    { value: 4, label: "Test 4" },
    { value: 5, label: "Test 5" },
    { value: 6, label: "Test 6" },
    { value: 7, label: "Test 7" },
    { value: 8, label: "Test 8" },
  ];

  let activeTab = ref();

  const getActiveTab = (value: number) => {
    activeTab.value = value;
  };
</script>

<template>
  <main>
    <HelloWorld
      :get-active-tab="getActiveTab"
      :navigation-items="navigationItems"
    />
  </main>
</template>

<style scoped>
  main {
    padding: 8px;
    width: 100dvw;
    height: 100dvh;
  }
</style>
