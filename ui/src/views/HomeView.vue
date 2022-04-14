<template>
  <main id="links">
    <NavElt/>

    <header>
      <h1 class="color-violet shatex-blur-sm anima-shrink-this">
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

    <ul>
      <li 
        v-for="(cat, index) in cats" 
        :key="index"
        :id="cat"
        class="container-70tn mar-bot-lg">
        <i :class="`fa-brands fa-${cat} fa-6x color-blue shatex-blur-md anima-grow-this`"></i>
        <ul class="flex">
          <li 
            v-for="(link, i) in linksCat(cat).sort((a, b) => (a.name > b.name) ? 1 : -1)"
            :key="i">
            <a 
              class="button-primary" 
              :href="`https://${link.url}`"
              :title="link.url">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/main/NavElt.vue';
import FootElt from '@/components/main/FootElt.vue';

import { readData } from '@/services/AxiosService'

export default {
  name: 'HomeView',
  components: {
    NavElt,
    FootElt
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
    linksCat(cat) {
      return this.links
        .filter(link => link.cat === cat);
    }
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
