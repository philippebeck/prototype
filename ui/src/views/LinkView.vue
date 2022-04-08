<template>
  <main>
    <NavElt/>

    <section 
      v-for="(cat, index) in cats" 
      :key="index"
      :id="cat"
      class="container-70tn">
      <h2 class="color-blue">
        <i :class="`fa-brands fa-${cat} fa-3x`"></i>
      </h2>
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
    </section>

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/NavElt.vue';
import FootElt from '@/components/FootElt.vue';

import { getAllLinks } from '@/services/LinkService'

export default {
  name: 'LinkView',
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
    getAllLinks().then(
      response => {
        this.links = response;
      }
    )
  }
}
</script>
