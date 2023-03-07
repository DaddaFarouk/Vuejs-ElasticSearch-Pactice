<script>
import { ref } from 'vue';
import Searchbar from '../searchBar/Searchbar.vue';

export default {
    name: 'custom-navbar',
    data(){
        return {
            productsList: ref(0)
        }
    },
    components: {
        'search-bar': Searchbar
    },
}
</script>
<template>
    <div class="container">
        <div class="row text-center">
            <div class="col">
                c1
            </div>
            <div class="col-6">
                <search-bar @updatedData="(res) => this.productsList = res" />
            </div>
            <div class="col">
                c3
            </div>
        </div>
    </div>
</template>