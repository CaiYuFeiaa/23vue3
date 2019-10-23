import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:'',
    hobbys:'',
    introduce:''
  },
  mutations: {
      addSex(state,obj){
        state.sex = obj;
      },
      addHobbys(state,obj){
          state.hobbys = obj;
      },
      addIntroduce(state,obj){
          state.introduce = obj;
      }
  },
  actions: {
  },
  modules: {
  }
})
