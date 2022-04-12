<template>
  <form class="form" id="users">
    <fieldset>
      <legend>
        <i class="fa-solid fa-users fa-lg"></i>
        Gérer les Utilisateurs
      </legend>
      <ul v-for="user in users" 
        :key="user._id">
        <li>
          <label for="name">
            Nom
          </label>
          <input 
            id="name" 
            name="name" 
            v-model="user.name" 
            type="text" 
            minlength="2" 
            maxlength="50" 
            required>
        </li>
        <li>
          <label for="email">
            Email
          </label>
          <input 
            id="email" 
            name="email" 
            v-model="user.email"
            type="email" 
            maxlength="50" 
            minlength="5" 
            required>
        </li>
        <li>
          <label for="pass">
            Mot de Passe
          </label>
          <input 
            id="pass" 
            name="pass" 
            type="password" 
            placeholder="Indiquer le mot de passe" 
            maxlength="50"
            minlength="8" 
            required>
        </li>
        <li>
          <button 
            type="button" 
            @click="updateUser(user._id)"
            class="btn-blue">
            Modifier {{ user.name }}
          </button>
          <button 
            type="button" 
            @click="deleteUser(user._id)"
            class="btn-red">
            Supprimer {{ user.name }}
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
import { checkName, checkEmail } from '@/services/CheckService';
import { updateData, deleteData } from '@/services/FetchService';
import { rewriteName, rewriteEmail } from '@/services/RewriteService';

export default {
  name: 'ListUsers',

  props: ['users'],

  methods: {
    updateUser(id) {
      let user = {};

      for (let i = 0; i < this.users.length; i++ ) {
        if (this.users[i]._id === id) {
          user = {
            id: this.users[i]._id,
            name: this.users[i].name,
            email: this.users[i].email,
            pass: this.users[i].pass
          }
        }
      }

      if (
        checkName(user.name) === true && 
        checkEmail(user.email) === true
        ) {
        user.name = rewriteName(user.name);
        user.email = rewriteEmail(user.email);

          updateData("/api/users", user, id)
            .then(() => {
              alert(user.name + " mis à jour !");
              this.$router.go();
            });
      }
    },

    deleteUser(id) {
      if (confirm("Confirmez la suppression de l'utilisateur") === true) {
        deleteData("/api/users", id)
          .then(() => {
            alert(id + " supprimé !");
            this.$router.go();
          });
      }
    }
  }
}
</script>
