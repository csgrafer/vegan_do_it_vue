<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <h1>{{ restaurants }}</h1> -->
    <div v-for="restaurant in restaurants">
      <h1>{{ restaurant.name }}</h1>
      <h1>{{ restaurant.location.address1 }}</h1>
      <h1>{{ restaurant.location.city + ", " + restaurant.location.state + " " + restaurant.location.zip_code }}</h1>
     <!--  <h1>{{ restaurant.location.state restaurant.location.zip_code }}</h1>
      <h1>{{ restaurant.location.zip_code }}</h1> -->
      <h1>{{ restaurant.display_phone }}</h1>
      <h1>{{ restaurant.url }}</h1>
    </div>
  </div>
</template>

<style>
</style>

<script>

var axios = require("axios")
export default {
  data: function() {
    return {
      // message: "What.js!",
      restaurants: [] 
    };
  },
  created: function() {
    // console.log("Restaurantspage")
    // console.log(this.$route.query.city)
    axios.get("/api/restaurants?location="+this.$route.query.city).then(response => {
      console.log(response.data.businesses)
      this.restaurants = response.data.businesses;
    });
  },
  methods: {}
};
</script>