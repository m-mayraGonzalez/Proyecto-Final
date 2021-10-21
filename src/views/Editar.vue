<template>
  <div class="editar">
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
              <a class="nav-link" href="/About">VOLVER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../">MENU</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container containers p-5">
      <div class="col-md-4 mx-auto">
        <div class="card cardxz">
          <div class="cardheader text-center">
            <h3>Editar Bovino</h3>
          </div>
          <div class="card-body">
            <form
              id="productonew"
              enctype="multipart/form-data"
              action="uploader.php"
              method="put"
            >
              <div class="form-group">
                <input
                  v-model="editedItem.raza.nombre"
                  type="text"
                  name="raza"
                  id="raza"
                  class="form-control"
                  placeholder="raza"
                  autofocus
                />
              </div>
              <div class="form-group">
                <input v-model="editedItem.Descripcion"
                  class="form-control"
                  id="Descripcion"
                  name="Descripcion"
                  rows="5"
                  cols="62"
                  placeholder="Descripcion"
                ></input>
              </div>
              <div class="form-group">
                <input v-model="editedItem.precio"
                  type="number"
                  name="precio"
                  id="precio"
                  class="form-control"
                  placeholder="precio"
                />
              </div>
              <div class="form-group">
                <input v-model="editedItem.foto"
                  type="text"
                  name="foto"
                  id="foto"
                  class="form-control"
                  placeholder="foto"
                />
                <br></br>
                <input name="uploadedfile" type="file" />
              </div>
              <div class="form-group">
                <input v-model="editedItem.cantidad"
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  class="form-control"
                  placeholder="Cantidad de Bovinos"
                />
              </div>
              <div class="form-group">
              <button 
                class="btn btn-primary btn-block"
                type="submit"
                @click="guardar">
                Guardar
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      x: 0,
      search: "",
      dialog: false,
      editedItem:this.$route.params.animal
    };
  },
  computed: {
    titulo() {
      return this.x == 0 ? "Editar" : "guardar";
    },
  },
  methods: {
    guardar() {
      console.log("Estoy guardando" + this.x);
      let header = { headers: { token: this.$store.state.token } };
      const me = this;
      axios
        .put(
          "inventario_animal",
          {
            raza: me.editedItem.raza,
            Descripcion: me.editedItem.Descripcion,
            precio: me.editedItem.precio,
            foto: me.editedItem.foto,
            cantidad: me.editedItem.cantidad,
          },
          header
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>