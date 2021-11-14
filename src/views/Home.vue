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
                    <button
                      class="text-primary fas fa-edit"
                      @click="editar(cat.raza.nombre, cat.Descripcion, cat.precio, cat.foto, cat.cantidad)" 
                    >
                    </button>
                  </h3>
                  <v-card>
                    <v-img src="https://www.stylourbano.com.br/wp-content/uploads/2020/05/vaca.jpg" height="200px"></v-img>
                    <v-card-title class="text-primary sans-serif"
                      >Raza</v-card-title
                    >
                    <v-card-subtitle> {{ cat.raza.nombre }} </v-card-subtitle>

                    <v-card-title class="text-primary sans-serif"
                      >Descripción</v-card-title
                    >
                    <v-card-subtitle>{{ cat.Descripcion
                      }} </v-card-subtitle>

                    <v-card-title class="text-primary sans-serif"
                      >Precio</v-card-title
                    >
                    <v-card-subtitle>{{ cat.precio }} </v-card-subtitle>

                    <v-card-title class="text-primary sans-serif"
                      >Cantidad de Bovinos</v-card-title
                    >
                    <v-card-subtitle> {{ cat.cantidad }} </v-card-subtitle>

                    <v-card-title class="text-primary sans-serif"
                      >Fecha de publicación</v-card-title
                    >
                    <v-card-subtitle> {{ cat.createdAt }} </v-card-subtitle>
                    <br />
                    <center class="text-primary sans-serif">
                      <b><p>ENVIO GRATIS</p></b>
                    </center>
                    <br />
                  </v-card>
                  <br />
                  <center>
                    <a href="/Loggin" class="btn">COMPRAR AHORA</a>
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
  watch: {},
  methods: {
    bucle() {
      let me = this;
      let header = {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTViMDM4ZGU2YzRlYjFiZjQ3ZmZkZGUiLCJpYXQiOjE2MzY5MDE2OTIsImV4cCI6MTYzNjkxNjA5Mn0.RtB6Fk3qg1tO86a46WvSIXDDNE-FcpiMFxpelzmeD40",
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
    editar(nombre, Descripcion, precio, foto, cantidad) {
      console.log(nombre, Descripcion, precio, foto, cantidad)
      this.$store.dispatch("setRaza", nombre)
      this.$store.dispatch("setDescripcion", Descripcion)
      this.$store.dispatch("setPrecio", precio)
      this.$store.dispatch("setFoto", foto)
      this.$store.dispatch("setCantidad", cantidad)
      console.log(this.$store.state.raza)
      console.log(this.$store.state.Descripcion)
      console.log(this.$store.state.precio)
      console.log(this.$store.state.foto)
      console.log(this.$store.state.cantidad)
      this.$router.push("/Edit");
    },
  },
  created() {
    this.bucle();
  },
};
</script>