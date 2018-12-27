<template>
  <div>
    <div>
      <cart-v></cart-v>
    </div>
  </div>
</template>
<script>
import CartV from './views/CartV.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  extends: {},
  props: {},
  components: {
    'cart-v': CartV
  },
  computed: {
  },
  watch: {},
  methods: {},
  beforeCreate(){},
  mounted(){}
}
</script>
