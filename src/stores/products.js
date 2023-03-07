import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'products',
  state: () => {
    return { products: [] }
  },
  getters: {
    getProducts: () => {
      return this.products;
    }
  }, 
  actions: {
    setProducts(products) {
      this.products = products;
    },
  }
})