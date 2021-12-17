<template>
    <div class="gallery card">
        <my-gallery-item 
            v-for="item in 23"
            :key="item"
            @open="toggle"
        />
        <teleport to="body">
            <app-lite-box 
                v-if="openFlag"
                @close="toggle"
            />
        </teleport>
    </div>
</template>
<script>
import MyGalleryItem from '@/components/gallery/MyGalleryItem.vue'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const openFlag = ref(false)
        const toggle = () => openFlag.value = !openFlag.value
        return{
            openFlag,
            toggle
        }
    },
    components:{
        MyGalleryItem
    }
}
</script>