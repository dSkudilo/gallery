<template>
    <div class="gallery card">
        <my-gallery-item 
            v-for="(item,id) in 23"
            :key="item"
            @open="open"
            :data="{
                id,img:'https://www.fillmurray.com/640/360'
            }"
        />
        <teleport to="body">
            <app-lite-box 
                v-if="openFlag"
                @close="close"
            >
                <my-gallery-lite-box 
                    :data="liteBoxData"
                />
            </app-lite-box>
        </teleport>
    </div>
</template>
<script>
import MyGalleryItem from '@/components/gallery/MyGalleryItem.vue'
import MyGalleryLiteBox from '@/components/gallery/MyGalleryLiteBox.vue'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const openFlag = ref(false)
        const liteBoxData = ref()
        const open = data => {
            openFlag.value = true
            liteBoxData.value = data
        }
        const close = () => openFlag.value = false
        return{
            openFlag,
            close,
            open,
            liteBoxData
        }
    },
    components:{
        MyGalleryItem,
        MyGalleryLiteBox
    }
}
</script>