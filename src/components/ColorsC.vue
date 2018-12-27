<template>
  <div>
    <div v-for="(product, product_index) in productColorAndImageName" :key="product_index"
      class="w-60px h-60px mt-20px"
      :style="{'background-color': product.color}"
      @mouseover="colorChange(product_index)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'colorsC',
  extends: {},
  props: {
    productColorAndImageName: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    colorChange (data) {
      this.$emit('colorChange', data)
      // alert(data)
    }
  },
  beforeCreate(){},
  mounted(){}
}
</script>
