<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="index.html">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="about.html">Restaurants</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="products.html">Why Eat Vegan?</a>
            </li>
            <!-- <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="store.html">Store</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <p class="m-0 small">&copy;2019 C. Sean Play</p>
      </div>
      <div class="logo_head">
        <img src="img/VDI_Main.svg" alt="logo" class="logo">
      </div>
    </footer>
  </div>
</template>

<style>

</style>
