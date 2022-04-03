<template>
  <div class="main">
    <h1>This is the main page</h1>
    <DashBoard v-if="settings == true"/>
  </div>
</template>

<script>
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'MainView',
  components: {
    DashBoard
  },
  data() {
      return {
          settings: false
      }
  },
  mounted() {
    console.log("I am in mounted!!!")
    this.settings = true
  },
  setup () {
    console.log("I am in setup!!!")
  }
}
</script>