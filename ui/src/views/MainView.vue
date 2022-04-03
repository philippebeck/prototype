<template>
  <main>
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
  </main>
</template>

<script>
export default {
  name: 'MainView',
  props: ['resources']
}
</script>