import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { createStore } from 'vuex';



import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "vue-search-input/dist/styles.css";
import "../node_modules/bulma/css/bulma.css";

library.add(faMagnifyingGlass, faShoppingCart);

const store = createStore({
    state () {
      return {
        cartProducts: []
      }
    },
    mutations: {
      push(state, product) {
        state.cartProducts.push(product)
      }
    }
  })

const app = createApp(App);

app.use(VueAxios, axios, store);
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
