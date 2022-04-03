<template>
  <section class="menu-target2">
    <h2>
      <i class="fas fa-user-ninja"></i>
      Utilisateurs
    </h2>

    <a 
      class="btn-green btn-lg" 
      href="/create-user" 
      title="Cliquer pour créer un nouvel utilisateur">
      Nouvel Utilisateur
    </a>

    <table class="table">
      <thead>
        <tr>
          <th>Utilisateurs</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users" 
          :key="user.id">
          <td>
            <figure>
              <img 
                class="bord-violet" 
                src="" 
                alt="Photo">
              <figcaption>
                {{ user.name }} ({{ user.id }})
              </figcaption>
            </figure>
            <a 
              class="btn-blue" 
              href="#" 
              title="Modifier l'Utilisateur">
              <i class="fas fa-pen-square fa-fw fa-lg"></i>
            </a>
            <a 
              class="btn-red" 
              href="#" 
              title="Supprimer l'Utilisateur">
              <i class="fas fa-times-circle fa-fw fa-lg"></i>
            </a>
            <br>
            <p>
              {{ user.email }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'ListUsers',
  props: ['users']
}
</script>
