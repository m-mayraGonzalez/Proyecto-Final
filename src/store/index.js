import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    raza: null,
    Descripcion: null,
    precio: null,
    foto: null,
    cantidad: null
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
    setDescripcion(state, Descripcion){
      state.Descripcion = Descripcion
    },
    setPrecio(state, precio){
      state.precio = precio
    },
    setFoto(state, foto){
      state.foto = foto
    },
    setCantidad(state, cantidad){
      state.cantidad = cantidad
    },
  },
  actions: {
    setToken(context, data) {
      context.commit('setToken', data.token)
      context.commit('setUsuario', data.usuario)
    },
    setRaza(context, data){
      context.commit('setRaza', data)
    },
    setDescripcion(context, data){
      context.commit('setDescripcion', data)
    },
    setPrecio(context, data){
      context.commit('setPrecio', data)
    },
    setFoto(context, data){
      context.commit('setFoto', data)
    },
    setCantidad(context, data){
      context.commit('setCantidad', data)
    },
  },
  modules: {
  }
})
