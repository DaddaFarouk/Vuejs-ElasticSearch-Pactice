<template>
  <custom-navbar @updatedData="(res) => this.products = res"/>
  <div id="app" class="container mt-4">
    <div v-if="this.products.value != 0" class="mt-4 row">
      <card-component v-for="(value, index) in this.products" :key="index" :product=value />
    </div>
  </div>
</template>

<script>
import CustomNavbar from '@/components/navbar/CustomNavbar.vue';
import CardComponent from '@/components/card/CardComponent.vue';
import { ref } from 'vue';
import axios from 'axios';

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