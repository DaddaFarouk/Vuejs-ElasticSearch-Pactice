<script>
import { ref } from 'vue';
import Searchbar from '../searchBar/Searchbar.vue';

export default {
    name: 'custom-navbar',
    data() {
        return {
            productsList: ref(0)
        }
    },
    components: {
        'search-bar': Searchbar
    },
    methods: {
        updateParentProductLIst(res) {
            this.$emit('updatedData', res);
        }
    },
}
</script>
<template>
    <div class="container mt-3">
        <div class="row align-items-center text-center">
            <div class="col col-lg-2">
                <a class="navbar-brand" href="#">
                    <img src="@/assets/elasticsearch.png" width="60" height="60" alt="ElasticSearch Logo">
                </a>
            </div>
            <div class="col">
                <search-bar @updatedData="(res) => this.updateParentProductLIst(res)" />
            </div>
            <div class="col col-lg-2">
                <a>
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" href=""/>
                </a>
            </div>
        </div>
    </div>
</template>