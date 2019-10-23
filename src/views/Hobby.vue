<template>
    <div>
        <p>1.请选择您的兴趣爱好:</p>
        <input type="checkbox" value="看书" v-model="hobbys">看书
        <input type="checkbox" value="游泳" v-model="hobbys">游泳
        <input type="checkbox" value="跑步" v-model="hobbys">跑步
        <input type="checkbox" value="看电影" v-model="hobbys">看电影
        <input type="checkbox" value="听音乐" v-model="hobbys">听音乐
        <input type="checkbox" value="动漫" v-model="hobbys">动漫
        <br><br>
        <input type="button" value="下一步" @click="doClick1()">
        <input type="button" value="上一步" @click="doClick2()">
        <input type="button" value="重置" @click="doReset()">
    </div>
</template>

<script>
    export default {
        name: "Hobby",
        data(){
            return{
                hobbys:[]
            }
        },
        methods:{
            doClick1(){
                this.$store.commit("addHobbys",this.hobbys)
                this.$router.push('/introduce')
            },
            doClick2(){
                this.$router.push('/gender')
            },
            doReset(){
                this.hobbys=[]
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