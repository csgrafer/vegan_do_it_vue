<template>
  <div class="home">
    <section class="page-section about-heading">
      <div class="container">
        
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">Bon appétit!</span>
                  <span class="section-heading-lower">Here is a list of twenty-five vegan establishments<br>in the area of your choosing:</span>
                </h2>
                <div v-for="restaurant in restaurants">
                  <h4>{{ restaurant.name }}</h4>
                  <h5>{{ restaurant.location.address1 }}</h5>
                  <h5>{{ restaurant.location.city + ", " + restaurant.location.state + " " + restaurant.location.zip_code }}</h5>
                  <h5>{{ restaurant.display_phone }}</h5>
                    <a v-bind:href="restaurant.url">Visit yelp.com for hours, driving directions, and business website!</a>
                  <hr>
                  <h1></h1>
                </div>
                <h1></h1>
                <h3>CHANGING LOCATIONS?</h3>
                <p>SEARCH AGAIN FOR RESULTS IN A DIFFERENT LOCALE.</p>
                <form action="/restaurants" method="get">
                  <input type="text" name="city" placeholder="Enter a City, ST">
                  <input type="submit" value="Click for MORE Restaurants!">
                </form>
              </div>
            </div>
          </div>
            <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/vegan_joint.jpg" alt="">
          </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>

<script>

var axios = require("axios")
export default {
  data: function() {
    return {
      restaurants: [] 
    };
  },
  created: function() {
    axios.get("/api/restaurants?location="+this.$route.query.city).then(response => {
      console.log(response.data.businesses)
      this.restaurants = response.data.businesses;
    });
  },
  methods: {}
};
</script>