<template>
  <main class="container with-margin">
    <h1 class="title">Gallery</h1>
    <my-gallery 
    />
  </main>
</template>

<script>
import MyGallery from '@/components/gallery/MyGallery.vue'
export default {
  name: 'App',
  setup(){},
  components:{
    MyGallery
  }
}
</script>

<style>
  body{
    display: none;
  }
</style>
