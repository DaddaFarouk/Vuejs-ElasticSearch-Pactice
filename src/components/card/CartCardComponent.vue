<script>
export default {
    name: 'cart-card-component',
    props: ['product'],
}
</script>
<template>
    <div class="col d-flex justify-content-center mb-3">
        <div class="card h-100" style="width: 18rem; height: 10rem;">
            <div class="row align-items-center p-2">
                <div class="col-md-4">
                    <img :src=this.product._source.image class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ this.product._source.title }}</h5>
                        <h6 class="card-title">{{ this.product._source.brand }}</h6>
                        <p class="card-text"><small class="text-muted">{{ this.product._source.category }}</small></p>
                        <p class="card-text">{{ this.product._source.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>