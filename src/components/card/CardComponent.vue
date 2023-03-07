<script>
export default {
    name: 'card-component',
    props: ['product'],
    setup() {
    }
}
</script>
<template>
    <div class="col d-flex justify-content-center mb-3">
        <div class="card h-100" style="width: 36rem; height: 20rem;">
            <div class="row">
                <div class="col-md-4 mt-5">
                    <img :src=this.product._source.image class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ this.product._source.title }}</h5>
                        <p class="card-text"><small class="text-muted">{{ this.product._source.description }}</small></p>
                        <p class="card-text">{{ this.product._source.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>