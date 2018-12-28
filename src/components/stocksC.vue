<template>
  <div class="w-500px h-500px bo-1px">
    <h1>Vue Mastery Socks</h1>
    <p>Shipping: 0</p>
    <!-- CONTINUE HERE... -->
    
    <p>In Stock</p>
    <!-- <p>Out of Stock</p> -->
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
    }
  },
  data(){
    return{};
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  beforeCreate(){},
  mounted(){}
}
</script>
