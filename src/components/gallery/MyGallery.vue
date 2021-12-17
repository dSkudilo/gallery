<template>
    <div class="gallery card">
        <div 
            class="gallery__item" 
            v-for="img in 23"
            :key="img"
        >
            <img src="https://www.fillmurray.com/640/360" alt="alt" class="gallery__img">
        </div>
    </div>
</template>