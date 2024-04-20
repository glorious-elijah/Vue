<script setup lang="ts">
  import { ref } from "vue";
  import { retrieveLastActive, saveLastActive } from "./../misc/misc";

  const props = defineProps<{
    navigationItems: { value: number; label: string }[];
    getActiveTab: (value: number) => void;
  }>();

  let activeItem = ref({
    index:
      props.navigationItems.findIndex(
        (navItem) => navItem.value === Number(retrieveLastActive())
      ) ?? 0,
    value: Number(retrieveLastActive()) ?? props.navigationItems?.at(0)?.value,
  });
</script>

<template>
  <nav>
    <div
      aria-label="backgroundScrollElement"
      class="background"
      :style="{
        width: `${100 / props.navigationItems.length}%`,
        translate: `${
          activeItem.index === props.navigationItems.length - 1
            ? activeItem.index * 100 - activeItem.index / 5
            : activeItem.index * 100
        }%`,
      }"
    ></div>
    <button
      v-for="(item, index) in props.navigationItems"
      :style="{ color: activeItem.index === index ? 'white' : 'black' }"
      @click="
        () => {
          activeItem = {
            index: index,
            value: item.value,
          };
          props.getActiveTab(item.value);
          saveLastActive(item.value);
        }
      "
    >
      {{ item.label }}
    </button>
  </nav>
</template>

<style scoped>
  nav {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    border: 1px solid black;
    border-radius: 5px;
  }
  nav > button {
    z-index: 10;
    color: rgb(31, 31, 31);
    flex-grow: 1;
    user-select: none;
  }

  .background {
    position: absolute;
    left: 1px;
    height: 95%;
    z-index: 0;
    background-color: rgb(45, 14, 187);
    transition: all 0.1s ease-in-out;
    border-radius: 4px;
  }
</style>
