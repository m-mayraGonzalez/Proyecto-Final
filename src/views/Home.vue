<template>
  <div class="page">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/Addbovino">
          <img src="../assets/imagen1p.png" alt="MDN"
        /></a>
        <br />
        <br />
        <h1 class="text-primary sans-serif">MERCA-RES</h1>
        <br />
        <br />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav marginai2">
            <li class="nav-item">
              <div class="container h-100">
                <div class="d-flex justify-content-center h-100">
                  <div class="searchbar">
                    <input
                      class="search_input"
                      type="text"
                      name=""
                      placeholder="Search..."
                    />
                    <a href="#" class="search_icon"
                      ><i class="fas fa-search"></i
                    ></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto bg-dark">
            <li class="nav-item">
              <a class="nav-link" href="/LogginAccount">INICIAR SESION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Register">RESGISTRATE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container containers p-5">
      <div class="contenedorx row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body"></div>
            <v-row>
              <v-column v-for="(cat, i) in animal" :key="i" class="ma-16">
                <v-card class="mx-auto" max-width="300">
                  <h3>
                    <router-link
                      :to="{name:'EditarBovino', params:{animal:cat}}"> Edit 
                    </router-link>
                  </h3>
                  <v-card>
                    <v-img v-bind:src="cat.foto" height="200px"></v-img>
                    <v-card-title class="text-primary sans-serif"
                      >Nombre de la raza</v-card-title
                    >
                    <v-card-subtitle> {{ cat.raza.nombre }} </v-card-subtitle>
                    <v-card-text>{{ cat.Descripcion }} </v-card-text>
                    <v-card-title class="text-primary sans-serif"
                      >Cantidad de Bovinos</v-card-title
                    >
                    <v-card-subtitle> {{ cat.cantidad }} </v-card-subtitle>
                    <v-card-title class="text-primary sans-serif"
                      >Fecha de publicación</v-card-title
                    >
                    <v-card-subtitle> {{ cat.createdAt }} </v-card-subtitle>
                  </v-card>
                  <br>
                  <center>
                    <a href="/about"
                      ><b><p>ENVIO GRATIS</p></b></a
                    >
                  </center>
                  <br />
                </v-card>
              </v-column>
            </v-row>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
//import Chart from 'chart.js'
export default {
  data() {
    return {
      /* datos:[],
      stock:[], */
      animal: [],
    };
  },
  watch:{},
  methods: {
    bucle() {
      console.log("hola");
      let me = this;
      let header = {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTViMDM4ZGU2YzRlYjFiZjQ3ZmZkZGUiLCJpYXQiOjE2MzQ4MzE1OTgsImV4cCI6MTYzNDg0NTk5OH0.Zffiu6UQBBZD99nFmBeVHA49QoZrSYa474yKSuxlL6E",
        },
      };
      axios
        .get("inventario_animal", header)
        .then(function (response) {
          console.log(response);
          me.animal = response.data.inventario_animal;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editar(cat) {
      console.log(cat);
    },
  },
  created() {
    this.bucle();
  },
};
</script>