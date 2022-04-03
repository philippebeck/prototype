<template>
  <div class="test">
    <h1>This is the test page</h1>
    <DashBoard v-if="settings == true"/>
  </div>
</template>

<script>
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'TestView',
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