<template>
  <main 
    id="links"
    class="container-90sm-80lg-70xl">

    <header>
      <h1 class="color-violet shatex-blur-sm anima-grow-this">
        Links2Code
      </h1>
      <strong class="color-gray">
        Des Liens pour Coder !
      </strong>
    </header>

    <nav class="sidebar">
      <input 
        id="sidebar-class"
        class="sidebar-check" 
        type="checkbox">
      <label 
        for="sidebar-class"
        class="sidebar-open" 
        title="Afficher">
        <i class="far fa-eye fa-fw"></i>
      </label>
      <label 
        for="sidebar-class"
        title="Cacher">
        <i class="far fa-eye-slash fa-fw color-violet"></i>
      </label>
      <a 
        v-for="(cat, index) in cats" 
        :key="index"
        :href="`#${cat}`" 
        :title="cat">
        <i :class="`fa-brands fa-${cat} fa-fw color-violet`"></i>
      </a>
      <a 
        href="#links" 
        title="Haut de page">
        <i class="fas fa-chevron-circle-up fa-fw color-violet"></i>
      </a>
    </nav>

    <ListElt :items="itemsByCat(links)">

      <template #items="slotProps">
        <i 
          :class="`fa-brands fa-${slotProps.index} fa-6x color-primary shatex-blur-md anima-grow-this`"
          :id="slotProps.index">
          </i>
      </template>

      <template #nested="slotProps">
        <a 
          class="button-primary" 
          :href="`https://${slotProps.value.url}`"
          :title="slotProps.value.url">
          {{ slotProps.value.name }}
        </a>
      </template>
    </ListElt>
  </main>
</template>

<script>
import ListElt from "@/components/ListElt.vue";
import { readData } from "@/services/ApiService";

export default {
  name: "HomeView",
  components: {
    ListElt
  },

  data() {
    return {
      links: []
    }
  },

  computed: {
    cats() {
      const cats = new Set();
      this.links.forEach(link => cats.add(link.cat));
      return Array.from(cats); 
    }
  },

  methods: {
    itemsByCat(items) {
      const itemsByCat = {};

      items.forEach(item => {
        if (!itemsByCat[item.cat]) {
          itemsByCat[item.cat] = [];
        }
        itemsByCat[item.cat].push(item);
        itemsByCat[item.cat].sort((a, b) => (a.name > b.name) ? 1 : -1);
      });
      
      return itemsByCat;
    },
  },
  
  mounted () {
    readData("/api/links").then(
      response => {
        this.links = response;
      }
    )
  }
}
</script>
