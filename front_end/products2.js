/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: {
    products: [],
    message_1: "Hey from the .js file!!",
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
    },
    createProduct: function () {
      console.log("Making a product ...");
      // mimic insomnia
      // post /api/products
      axios.post("http://localhost:3000/api/products", {
        name:"pen",
        price: 20,
        description: "It writes upside down!",
        image_url:""      // here, we're using snake_case, which wouldn't normally be accepted practice in js ... but it's what the key is written in, in our ruby db - we made a table with "image_url" as the column title (instead of "imageUrl"), so we need to make sure we can access it by using the proper ~spelling
      }).then(response => {
        console.log(response.data);
      });
      // Note: .then stipulates that js should do the stuff to the right *after* the previous action has completed ... which we need to make sure of bc sending requests and receiving responses from the internet takes time - much more time than accessing data locally on our PCs ...
    }
  }
});