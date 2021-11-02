<template>
  <div class="login">
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
      <div class="jumbotron mt-4">
        <center>
          <h1 class="display-4 text-primary sans-serif">BIENVENIDO</h1>
          <p class="lead"></p>

          <hr class="my-4" />
          <p>PARA PODER COMPRAR INGRESA A TU CUENTA</p>
          <hr class="my-4" />

          <a href="/Register" class="btn btn-sucess btn-lg">SOY NUEVO</a>
          <a href="/LogginAccount" class="btn  btn-lg"
            >YA TENGO CUENTA</a
          >
        </center>
      </div>
    </main>
  </div>
</template>