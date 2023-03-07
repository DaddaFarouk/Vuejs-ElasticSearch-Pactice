<script>
import PushToCartComponent from './PushToCartComponent.vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        let cartProducts = store.state.cartProducts

        return {
            cartProducts
        }
    },
    name: 'card-component',
    props: ['product'],
    components: {
        'push-to-cart-component': PushToCartComponent
    },
    computed: {
    }
}
</script>
<template>
    <div class="col-md-4 col-sm-6">
        <div class="card mt-4">
            <a class="card-img-tiles text-center mt-4" href="#" data-abc="true">
                <div class="inner">
                    <div class="main-img"><img :src=this.product._source.image alt="Category"></div>
                </div>
            </a>
            <div class="card-body text-center">
                <h4 class="card-title">{{ this.product._source.title }}</h4>
                <h4 class="card-title">{{ $store.state.cartProducts }}</h4>
                <p class="text-muted mb-2">{{ cartProducts }} $</p>
                <push-to-cart-component :product="product" />
            </div>
        </div>
    </div>
</template>
