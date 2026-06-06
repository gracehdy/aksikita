<template>
  <div v-if="mediaList && mediaList.length > 0" class="d-flex flex-wrap ga-2">
    <v-img
      v-for="item in mediaList"
      :key="item.id"
      :src="`http://localhost:3000/uploads/${item.file}`"
      width="150"
      height="150"
      cover
      class="rounded-lg"
    ></v-img>
  </div>
</template>

<script setup lang="ts">
defineProps<{ mediaList: Array<{ id: string, file: string }> }>();
</script>