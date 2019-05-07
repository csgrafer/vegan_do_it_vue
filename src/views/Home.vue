<template>
  <div class="home">
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.png" alt="">
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Good Vegan Food</span>
              <span class="section-heading-lower">Can be hard to find!</span>
            </h2>
            <p class="mb-3">Sure, you can get a salad anywhere, but <strong>what fun is that?</strong> Vegans should be able to enjoy hearty, satisfying dining experiences too. Type in your desired location below to find vegan food options in that area!
            </p>
            <form action="/restaurants" method="get">
              <input type="text" name="city" placeholder="City, ST -or- Country"><input type="submit" value="Let's Eat!" id="submitText">
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Why Eat Vegan?</span>
                <span class="section-heading-lower">passion & compassion</span>
              </h2>
              <p class="mb-0">There are many different reasons people choose to lead a vegan lifestyle. Go to the<br><a :href ="/vegan/"><strong>ABOUT VEGANISM</strong></a>
              page for a little bit of the history, and reasoning behind veganism.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
var axios = require("axios");

</script>
