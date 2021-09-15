<template>
  <div class="page">
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
            <h3>Añadir Bovino</h3>
          </div>
          <div class="card-body">
            <form
              id="productonew"
              enctype="multipart/form-data"
              action="uploader.php"
              method="POST"
            >
              <div class="form-group">
                <input
                  type="text"
                  name="category"
                  id="category"
                  class="form-control"
                  placeholder="Raza"
                  autofocus
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="descripcion"
                  name="textarea"
                  rows="5"
                  cols="62"
                  placeholder="Descripción del bovino"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="form-control"
                  placeholder="Precio"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="imgURL"
                  id="imgURL"
                  class="form-control"
                  placeholder="URLImagen"
                />
                <p>o</p>
                <input name="uploadedfile" type="file" />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  class="form-control"
                  placeholder="Cantidad de Bovinos"
                />
              </div>

              <div class="form-group text-center">
                <button class="btn btn-primary btn-clock mt-2" type="submit">
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