<template>
  <div class="comments no-scroll">
        <h3 
            class="comments__title" 
            v-if="!comments"
        >
            Комментариев нету !
        </h3>
        <app-comment 
            v-else
            v-for="comment in comments"
            :key="comment"
            :comment="comment"
        />
  </div>
  
</template>

<script>
import AppComment from '@/components/ui/comments/AppComment.vue'
export default {
    name:'app-comments',
    props:['comments'],
    components:{
        AppComment
    }
}
</script>

<style>

</style>