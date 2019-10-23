<template>
    <div>
        <p>3.请介绍一下自己:</p>
        <textarea rows="10" cols="60" v-model="me">
        </textarea>
        <br><br>
        <input type="button" value="提交" @click="doSubmit()">
        <input type="button" value="上一步" @click="doClick()">
        <input type="button" value="重置" @click="doReset()">
    </div>
</template>

<script>
    export default {
        name: "Introduce",
        data(){
            return{
                me:''
            }
        },
        methods:{
            doClick(){
                this.$router.push('/hobby')
            },
            doSubmit(){
                this.$store.commit("addIntroduce",this.me)
                console.log(this.$store.state.user)
                this.$router.push('/result')
            },
            doReset(){
                this.me=''
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