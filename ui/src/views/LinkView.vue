<template>
  <main>
    <NavElt/>

      <ul class="flex">
        <li 
          v-for="link in links" 
          :key="link.cat">
          {{ link.cat }}
          <ul>
            <li>
              <a 
                class="button-primary" 
                :href="link.url" 
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
  mounted () {
    getAllLinks().then(
      response => {
        this.links = response;
      }
    )
  }
}
</script>
