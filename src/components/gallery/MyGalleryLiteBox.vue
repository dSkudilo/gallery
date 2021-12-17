<template>
    <div class="gallary-box ">
        <div class="gallary-box__content">
            <div class="gallary-box__photo">
                <img 
                    class="gallary-box__img" 
                    :src="data.img" :alt="data.id"
                >
            </div>
            <div class="gallary-box__info">
                <h2 class="gallary-box__title">Lorem ipsum - {{data.id}}</h2>
                <app-like />
            </div>
        </div>
        <div class="gallary-box__fedback">
            <div class="gallary-box__comments">
                <app-comments 
                    :comments="comments"
                />
            </div>
            <div class="gallary-box__create">
                <app-create-comment 
                    @sendComment="sendComment"
                />
            </div>
        </div>
    </div>
        
</template>
<script>

export default {
    props:['data','comments'],
    emits:['sendComment'],
    setup(_, { emit }) {
        const sendComment = comment =>
            emit('sendComment',comment)
        
        return{
            sendComment
        }
    },
}
</script>