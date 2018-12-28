<template>
  <div class="w-100">
    <h1>Vue Mastery Socks</h1>
    <p>Shipping: {{ this.productStocksLeft[this.selectedColor].stocks }}</p>
    <!-- CONTINUE HERE... -->
    
    <p v-if="this.productStocksLeft[this.selectedColor].stocks > 10">In Stock</p>
    <p v-else>Out of Stock</p>
  </div>
</template>

<script>
export default {
  name: 'stocksC',
  extends: {},
  props: {
    productStocksLeft: {
      type: Array,
      required: true
    },
    selectedColor: {
      type: Number,
      required: true
    }
  },
  data(){
    return{};
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    // stocksLeft() {
    //   if (this.stocks > 0) {
    //     return this.stocks
    //   }
    // }
  },
  beforeCreate(){},
  mounted(){}
}
</script>
