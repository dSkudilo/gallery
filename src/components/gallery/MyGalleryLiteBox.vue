<template>
    <div class="gallary-box">
        <div class="gallary-box__content">
            <div class="gallary-box__photo">
                <img 
                    class="gallary-box__img" 
                    :src="data.img" :alt="data.id"
                >
            </div>
            <div class="gallary-box__info">
                <h2 class="gallary-box__title">Lorem ipsum</h2>
                <app-like />
            </div>
        </div>
        <div class="gallary-box__comments">asdasdda</div>
    </div>
        
</template>
<script>
export default {
    props:['data'],
    setup() {
        
    },
}
</script>