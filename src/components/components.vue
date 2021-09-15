<template>
  <div class="ex2">
    <!-- <canvas id="myChart"></canvas> -->
    <v-row>
      <v-column v-for="(cat, i) in usuarioArray" :key="i" class="ma-16">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> {{ cat.email }} </v-card-title>

          <v-card-subtitle> {{ cat.password }} </v-card-subtitle>
        </v-card>
      </v-column>
    </v-row>
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
      usuarioArray: [],
    };
  },

  methods: {
    bucle() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("usuario", header)
        .then(function (response) {
          console.log(response);
          me.usuarioArray = response.data.usuario;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.bucle();
  },
};
</script>