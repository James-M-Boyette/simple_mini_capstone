/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: {
    products: [],
    message_1: "Hey from the .js file!!"
  },
  methods: {
    showAllProducts: function () {
      console.log("Getting products ...");
      axios.get("http://localhost:3000/api/products").then((response) => {
        this.products = response.data;
        console.log(response);
      });
    },
    showFirstProduct: function () {
      console.log("First product ... eventually");
    }
  }
});