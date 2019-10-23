<template>
    <div>
        <p>1.请问您的性别是:</p>
        <input type="radio" name="sex" value="男" v-model="sex">男
        <input type="radio" name="sex" value="女" v-model="sex">女
        <input type="radio" name="sex" value="保密" v-model="sex">保密
        <br><br>
        <input type="button" value="下一步" @click="doClick()">
        <input type="button" value="重置" @click="doReset()">
    </div>
</template>

<script>
    export default {
        name: "Gender",
        data(){
            return{
                sex:'保密'
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addSex",this.sex)
                this.$router.push('/hobby')
            },
            doReset(){
                this.sex = '保密';
            }
        }
    }
</script>

<style scoped>
    input[type='button']{
        background: none;
        border: none;color: cornflowerblue;
        font-weight: bold;
    }
</style>