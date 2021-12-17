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
                    :comments="comments"
                    @sendComment="sendComment"
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
        const comments = ref([])
        const open = data => {
            openFlag.value = true
            liteBoxData.value = data
        }
        const close = () => openFlag.value = false

        const sendComment = comment => comments.value.push(comment)
        return{
            openFlag,
            close,
            open,
            liteBoxData,
            sendComment,
            comments
        }
    },
    components:{
        MyGalleryItem,
        MyGalleryLiteBox
    }
}
</script>