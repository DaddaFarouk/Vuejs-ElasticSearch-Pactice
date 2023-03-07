<template>
  <custom-navbar @updatedData="(res) => this.products = res" />
  <div id="app" class="container mt-100">
    <div class="row" v-if="this.products.value != 0">
      <card-component v-for="(value, index) in this.products" :key="index" :product=value />
    </div>
  </div>
</template>

<script>
import CustomNavbar from '@/components/navbar/CustomNavbar.vue';
import CardComponent from '@/components/card/CardComponent.vue';
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      products: ref(0)
    }
  },
  components: {
    'custom-navbar': CustomNavbar,
    'card-component': CardComponent
  },
  methods: {
  },
  mounted() {
    axios
      .get('http://localhost:5000/products')
      .then(
        (response) => {
          this.products = response.data;
        })
  }
}
</script>
<style></style>