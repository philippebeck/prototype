<template>
  <form id="users">
    <table class="table">
      <thead>
        <tr>
          <th>Nom - Email - Mot de Passe</th>
          <th>Gestion</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users" 
          :key="user._id">
          <td>
            <input 
              id="name" 
              name="name" 
              v-model="user.name" 
              type="text" 
              minlength="2" 
              maxlength="50" 
              required>
            <input 
              id="email" 
              name="email" 
              v-model="user.email"
              type="email" 
              maxlength="50" 
              minlength="5" 
              required>
            <input 
              id="pass" 
              name="pass" 
              v-model="pass" 
              type="password" 
              placeholder="********" 
              maxlength="50"
              minlength="8" 
              required>
          </td>
          <td>
            <button 
              type="button" 
              @click="updateUser(user._id)"
              class="btn-blue"
              title="Modifier">
              <i class="fa-solid fa-edit"></i>
            </button>
            <button 
              type="button" 
              @click="deleteUser(user._id)"
              class="btn-red"
              title="Supprimer">
              <i class="fa-solid fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script>
import { updateData, deleteData } from '@/services/AxiosService';
import { checkName, checkEmail, checkPass } from '@/services/CheckService';
import { rewriteName, rewriteEmail } from '@/services/RewriteService';

export default {
  name: 'ListUsers',

  props: ['users'],

  data() {
    return {
      pass: ""
    }
  },

  methods: {
    updateUser(id) {
      let user = {};

      for (let i = 0; i < this.users.length; i++ ) {
        if (this.users[i]._id === id) {
          user = {
            id: id,
            name: this.users[i].name,
            email: this.users[i].email,
            pass: this.pass
          }
        }
      }

      if (
        checkName(user.name)    === true && 
        checkEmail(user.email)  === true &&
        checkPass(user.pass)    === true
        ) {
        user.name   = rewriteName(user.name);
        user.email  = rewriteEmail(user.email);

          updateData(`/api/users/${id}`, user)
            .then(() => {
              alert(user.name + " mis à jour !");
              this.$router.go();
            });
      }
    },

    deleteUser(id) {
      if (confirm("Confirmez la suppression de l'utilisateur") === true) {
        let userName = "";

        for (let i = 0; i < this.users.length; i++ ) {
          if (this.users[i]._id === id) {
            userName = this.users[i].name;
          }
        }

        deleteData(`/api/users/${id}`)
          .then(() => {
            alert(userName + " supprimé !");
            this.$router.go();
          });
      }
    }
  }
}
</script>
