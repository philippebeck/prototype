<template>
  <main>
    <NavElt/>

    <table class="table">
      <tr 
        v-for="resource in resources" 
        :key="resource.id">
        <td class="font-monospace">
          {{ resource.category }}
        </td>
        <td>
          <a 
            class="button-primary" 
            href="https://{{ resource.link }}" 
            title="https://{{ resource.link }}">
            <strong>
              {{ resource.name }}
            </strong>
          </a>
        </td>
        <td class="font-monospace">
          {{ resource.description }}
        </td>
      </tr>
    </table>

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/NavElt.vue';
import FootElt from '@/components/FootElt.vue';

import { getAllResources } from '@/services/ResourceService'

export default {
  name: 'ResourceView',
  components: {
    NavElt,
    FootElt
  },
  data() {
    return {
      resources: [],
      numberOfResources: 0
    }
  },
  methods: {
    getAllResources() {
      getAllResources().then(response => {
        console.log("getAllResources()", response)
        this.resources = response
        this.numberOfResources = this.resources.length
      })
    }
  },
  mounted () {
    this.getAllResources();
  }
}
</script>
