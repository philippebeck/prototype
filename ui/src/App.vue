<template>
  <div>
    <NavElt/>
    <router-view/>
    <FootElt/>
  </div>
</template>

<script>
import NavElt from "@/components/NavElt.vue";
import FootElt from "@/components/FootElt.vue";

export default {
  name: 'App',
  components: {
    NavElt,
    FootElt
  },
};
</script>
