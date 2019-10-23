<template>
    <div>
        <p>您的性别是:{{this.$store.state.sex}}</p>
        <p>您的爱好是:{{this.$store.state.hobbys==undefined?'未选择':this.$store.state.hobbys}}</p>
        <p>个人简介:{{this.$store.state.introduce==undefined?'未填写':this.$store.state.introduce}}</p>
    </div>
</template>

<script>
    export default {
        name: "Result"
    }
</script>

<style scoped>

</style>