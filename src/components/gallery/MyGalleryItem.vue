<template>
    <div 
        class="gallery__item" 
        @click="open"
    >
        <img src="https://www.fillmurray.com/640/360" alt="alt" class="gallery__img">
    </div>
</template>
<script>
export default {
    emits:['open'],
    setup(_,{ emit }) {
        const open = () => emit('open')
        return {
            open
        }
    },
}
</script>