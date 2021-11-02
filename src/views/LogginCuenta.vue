<template>
  <div class="conectar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="../">
          <img src="../assets/imagen1p.png" alt="MDN"
        /></a>
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
                <div class="d-flex justify-content-center h-100"></div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto bg-dark">
            <li class="nav-item">
              <a class="nav-link" href="../">VOLVER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../">MENU</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container containers p-5">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card mt-4 text-center">
            <div class="card-header">
              <h1>Inicio de Sesion</h1>
            </div>
            <div class="card-body">
              <form
                id="login"
                class="/api/auth/signin"
                method="POST"
                v-on:submit.prevent
              >
                <div class="form-group">
                  <input
                    v-model="usuario.email"
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autofocus
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="usuario.password"
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Contraseña"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    @click="ingresar"
                  >
                    Ingresar
                  </button>
                </div>
                <a href="../Register" class="btn btn-primary btn-block">
                  Registrarse
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    step: 1,
    usuario: {
      email: null,
      password: null,
    },
  }),
  methods: {
    ingresar() {
      const me = this;
      axios
        .post("usuario/login", {
          email: me.usuario.email,
          password: me.usuario.password,
        })
        .then(function (response) {
          me.$store.dispatch("setToken", response.data);
          me.$router.push("/");
        })
        .catch(function ({ response }) {
          console.log(response.data.msg);
        });
    },
  },
};
</script>

