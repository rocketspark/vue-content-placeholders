<template>
    <div :class="className">
        <div v-for="n in lines" :key="n" :class="`${className}__line`"/>
    </div>
</template>

<script lang="ts" setup>
const className = 'vue-content-placeholders-text';
defineProps({
    lines: {
        type: Number,
        default: 4,
    },
});
</script>
