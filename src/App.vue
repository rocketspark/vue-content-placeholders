<script lang="ts" setup>
</script>

<template>
    <div style="width: 500px;">
        <content-placeholders>
            <content-placeholders-heading :img="true"/>
            <content-placeholders-text :lines="3"/>
        </content-placeholders>
        <div style="height: 200px"></div>
        <content-placeholders :rounded="true">
            <content-placeholders-img/>
            <content-placeholders-heading/>
        </content-placeholders>
    </div>
</template>

<style scoped>
</style>
