<template>
  <div id="app">

    <object type="image/svg+xml" data="img/VDI_Main.svg"></object>

    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">VEGAN-DO-IT</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/home">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/restaurants">Restaurants</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/vegan">About Veganism</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <h2 class="m-0 small">&copy;2019 C. Sean Play</h2>
      </div>
      <div class="logo_head">
        <img src="img/VDI_Main.svg" alt="logo" class="logo">
      </div>
      <div class="yelp_logo">
        <img src="img/yelp.svg" alt="logo" class="logo">
        <!-- <a v-bind:href="www.yelp.com"></a> -->
      </div>
    </footer>
  </div>
</template>

<style>

</style>
