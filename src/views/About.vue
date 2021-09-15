<template>
  <div class="about">
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
          <ul class="navbar-nav">
            <li class="nav-link"></li>
            <li class="nav-item active"></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RAZAS
              </a>
              <ul
                class="dropdown-menu dropdownc dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <h5 class="dropdown-header">RAZAS PARA CARNE</h5>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item" href="#">Cebu</a></li>
                <li><a class="dropdown-item" href="#">Simental</a></li>
                <li><a class="dropdown-item" href="#">Gyr</a></li>
                <div class="dropdown-divider"></div>
                <h5 class="dropdown-header">RAZAS PARA LECHE</h5>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item" href="#">Holstein</a></li>
                <li><a class="dropdown-item" href="#">Patino</a></li>
                <li><a class="dropdown-item" href="#">Jensey</a></li>
                <li><a class="dropdown-item" href="#">Ayrshire</a></li>

                <div class="dropdown-divider"></div>
                <h5 class="dropdown-header">RAZAS PROPOSITO</h5>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item" href="#">Gyr</a></li>
                <li><a class="dropdown-item" href="#">Simental</a></li>
                <li><a class="dropdown-item" href="#">Criollo</a></li>
                <li><a class="dropdown-item" href="#">Gyorolando</a></li>
              </ul>
            </li>
          </ul>
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
      <div class="jumbotron mt-4">
        <h1 class="display-4">ANGUS</h1>
        <p>
          <img
            src="https://i0.wp.com/www.suganado.com/wp-content/uploads/jet-engine-forms/1446/2021/07/Novillas-Angus-2.jpg?w=305&ssl=1"
            class="img-fluid2"
          />
        </p>
        <p class="lead">
          Sexo: Hembra. Edad: 11 a 16 meses. Municipio: Pacho. Departamento:
          Cundinamarca
        </p>
        <hr class="my-4" />
        <p>
          18 hembras de Angus y sus cruces destetas. Valor: $6.000.000
          Colombianos + envio.
        </p>

        <p></p>
        <a href="/Loggin" class="btn btn-sucess btn-lg">COMPRAR AHORA</a>
        <a href="../" class="btn btn-primary btn-lg">Volver</a>
      </div>
    </main>
  </div>
</template>
