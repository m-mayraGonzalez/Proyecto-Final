<template>
  <div class="registro">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="main.html">
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
              <a class="nav-link" href="../">MENU</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container containers p-5">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card mt-4 text-center cardxz">
            <div class="card-header mx-auto">Registrar Cuenta</div>
            <div class="card-body">
              <form action="/api/auth/signup" method="POST">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Correo"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Nombre"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Contraseña"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="Confirmpassword"
                    placeholder="Confirmar Contraseña"
                    value=""
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Acepto los terminos y condiciones y autorizo el uso de mis
                    datos de acuerdo a la Declaracion de privacidad.
                  </label>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>