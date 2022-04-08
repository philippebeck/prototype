<template>
  <main>
    <NavElt/>

    <h1>Liens</h1>
    <ul>
      <li 
        v-for="(cat, index) in cats" 
        :key="index"
        :id="cat"
        class="container-70tn mar-bot-lg">
        <i :class="`fa-brands fa-${cat} fa-6x color-blue`"></i>
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
