<script>

export default {
  name: 'search-bar',
  setup() {
  },
  data() {
    return {
      query: '',
      data: []
    }
  },
  methods: {
    keystroke() {
      this.query.length > 0 ? this.search() : this.reset();
    },
    search() {
      this.axios.get('http://localhost:5000/search?title=' + this.query)
        .then(response => {
          this.data = response.data.hits.hits;
          this.$emit('updatedData', this.data);
        })
    },
    reset() {
      this.axios.get('http://localhost:5000/products')
        .then(response => {
          this.data = response.data;
          this.$emit('updatedData', this.data);
        })
    }
  },
}
</script>
<template>
  <div class="input-group rounded">
    <input type="search" class="form-control rounded" style="box-shadow: none;" placeholder="Search" aria-label="Search"
      aria-describedby="search-addon" v-model="query" @keyup.stop="keystroke" />
    <span class="input-group-text border-0 bg-white" id="search-addon">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </span>
  </div>
</template>