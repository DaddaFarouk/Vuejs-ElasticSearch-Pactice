<script>
    

    export default {
        components: {
            CartCardComponent,
        },
        computed: {
            items() {
                return this.$store.getters.cartItems
            }
        }
    }
</script>

<template>
    <div>
        <h1>Your cart</h1>
        
        <div class="col">
            <div class="row"  v-for="item in items"
            :key="item.id"
            :item="item">
                <CartCardComponent :product="item" />
            </div>
        </div>
        <CartItemCard
            v-for="item in items"
            :key="item.id"
            :item="item" />

        <CartSummaryPaymentCard />
    </div>
</template>