<template>
    <div class="backdrop" @click="close"></div>
    <div class="lite-box">
        asdasd
    </div>
</template>
<script>
export default {
    name:'app-lite-box',
    emits:['close'],
    setup(_,{ emit }) {
        const close = () => emit('close')
        
        return{
            close
        }
    },
}
</script>