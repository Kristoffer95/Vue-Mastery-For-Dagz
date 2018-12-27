<template>
  <div class="w-1800px h-100vh bo-3px bo-rd p-r cen-x">
    <div class="w-400D1800M100 h-400px cen-y p-r f-l">
      <!-- SOCKS IMAGES -->
      <img class="w-100D1 h-100" 
      :src="imgChange(this.products[this.selectedColor].img)"
      >
      <!-- getImage('greenSock.jpg') -->
    </div>
    <div class="f-l cen-y p-r">
      <div class="w-100px h-100px p-r">
        <stocks-c></stocks-c>
      </div>

      <div>
        <!-- Detials -->
      </div>

      <div>
        <colors-c :productColorAndImageName="this.products" @colorChange="colorChange"></colors-c>
      </div>
    </div>
  </div>
</template>

<script>
import stocksC from '../components/stocksC.vue'
import ColorsC from '../components/ColorsC.vue'

export default {
  name: 'CartV',
  data () {
    return {
      name: 'working',
      selectedColor: 0,
      products: [
        {
          id: 220,
          color: 'green',
          img: 'greenSock.jpg',
          stocks: 100
        },
        {
          id: 221,
          color: 'blue',
          img: 'blueSock.jpg',
          stocks: 100
        }
      ]
    }
  },
  methods: {
    colorChange (data) {
      this.selectedColor = data
      // console.log(this.selectedColor = data);
    },
    getImage (img_name) {
      return require('@/assets/images/' + img_name)
    },
    imgChange(img) {
      return this.getImage(img)
    }
  },
  components: {
    'stocks-c': stocksC,
    'colors-c': ColorsC
  }
}
</script>

<style>

</style>
