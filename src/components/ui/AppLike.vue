<template>
    <label class="like__control">
        <input class="like__input" type="checkbox">
        <span class="like__fake">
            <font-awesome-icon :icon="['fa','heart']" />
        </span>
    </label>
</template>
<script>
export default {
    name:'app-like',
    setup() {
        
    },
}
</script>