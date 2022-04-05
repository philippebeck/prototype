<template>
  <table class="table">
    <thead>
      <tr>
        <th>
          Nom
          <hr>
          Catégorie
        </th>
      </tr>
    </thead>

    <tbody>
      <tr 
        v-for="link in links" 
        :key="link.id">
        <td>
          <a 
            class="button-primary" 
            :href="link.url" 
            :title="link.url">
            {{ link.name }}
          </a>
          <br>
          {{ link.cat }}
        </td>
        <td>
          <a 
            class="btn-blue" 
            href="#" 
            title="Modifier">
            <i class="fas fa-pen-square fa-fw fa-lg"></i>
          </a>
          <a 
            class="btn-red" 
            href="#" 
            title="Supprimer">
            <i class="fas fa-times-circle fa-fw fa-lg"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListLinks',
  props: ['links']
}
</script>
