<template>
  <div v-for="media in mediaList" :key="media.id">
    {{ console.log("Mencoba memuat:", 'http://localhost:3000/uploads/' + media.url) }}
    
    <img 
      :src="'http://localhost:3000/uploads/' + media.url" 
      alt="Media" 
      style="max-width: 100%; border: 1px solid red;"
      @error="onImageError"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{mediaList: MediaItem[];}>();
interface MediaItem {
  id: string;
  url: string;
  type?: string;
}
const onImageError = (e: any) => {
  console.error("Gagal memuat gambar dari path:", e.target.src);
}
</script>