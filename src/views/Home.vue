<template>
  <div class="home">
   <!--  <p>{{ businesses.businesses }}</p> -->
    <!-- <p>My name is {{ name }}!</p> -->
    <!-- <div v-for="business in businesses">
      <h2>Name: {{ business.name }}</h2>
      <p>Address: {{ business.display_address }}</p>
      <p>Phone: {{ business.display_phone }}</p>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
var axios = require("axios");

export default {
  data: function() {
    return {
      // message: "Let's Eat!",
      // name: "Sean",
      businesses: []
    };
  },
  created: function() {
    console.log("Ikjewfhvkwef")
    axios.get("http://localhost:3000/api/restaurants?location=detroit").then(response => {
  console.log(response.data)

    this.businesses = response.data;
    });
  }
};
</script>
