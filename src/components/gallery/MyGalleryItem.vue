<template>
    <div 
        class="gallery__item" 
        @click="open"
    >
        <img :src="data.img" :alt="data.id" class="gallery__img">
    </div>
</template>
<script>
export default {
    emits:['open'],
    props:['data'],
    setup({ data },{ emit }) {
        const open = () => emit('open',data)
        return {
            open
        }
    },
}
</script>