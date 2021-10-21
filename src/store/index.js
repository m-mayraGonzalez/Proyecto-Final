import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    raza: null,
    itemEditar: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUsuario(state, usuario) {
      state.usuario = usuario
    }, 
    setRaza(state, raza){
      state.raza = raza
    },
    setItemEditar(state, itemEditar){
      state.itemEditar = itemEditar
    }
  },
  actions: {
    setToken(context, data) {
      context.commit('setToken', data.token)
      context.commit('setUsuario', data.usuario)
    },
    setRaza(context, data){
      context.commit('setRaza', data.raza)
    },
    setItemEditar( context, data){
      context.commit('setItemEditar', data.itemEditar)
    }
  },
  modules: {
  }
})
