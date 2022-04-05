<template>
  <main>
    <NavElt/>

    <table class="table">
      <tr 
        v-for="link in links" 
        :key="link.id">
        <td class="font-monospace">
          {{ link.cat }}
        </td>
        <td>
          <a 
            class="button-primary" 
            :href="link.url" 
            :title="link.url">
            <strong>
              {{ link.name }}
            </strong>
          </a>
        </td>
      </tr>
    </table>

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
      links: [],
      numberOfLinks: 0
    }
  },
  methods: {
    getAllLinks() {
      getAllLinks().then(response => {
        this.links = response
        this.numberOfLinks = this.links.length
      })
    }
  },
  mounted () {
    this.getAllLinks();
  }
}
</script>
