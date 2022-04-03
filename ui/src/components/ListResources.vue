<template>
  <table class="table">
    <thead>
      <tr>
        <th>
          Nom
          <hr>
          Categorie
        </th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr 
        v-for="resource in resources" 
        :key="resource.id">
        <td>
          <a 
            class="button-primary" 
            href="https://{{ resource.link }}" 
            title="https://{{ resource.link }}">
            {{ resource.name }}
          </a>
          <br>
          {{ resource.category }}
        </td>
        <td>
          {{ resource.description }}
          <br>
          <a 
            class="btn-blue" 
            href="#" 
            title="Cliquer pour éditer cette ressource">
            <i class="fas fa-pen-square fa-fw fa-lg"></i>
          </a>
          <a 
            class="btn-red" 
            href="#" 
            title="Cliquer pour supprimer cette ressource">
            <i class="fas fa-times-circle fa-fw fa-lg"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListResources',
  props: ['resources']
}
</script>
