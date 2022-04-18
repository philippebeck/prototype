<template>
  <form>
    <TableElt 
      :items="getUsers()"
      id="users">

      <template #head>
        actions
      </template>

      <template #cell-_id="slotProps">
        {{ slotProps.index + 1 }}
      </template>

      <template #cell-name="slotProps">
        <input 
          id="name" 
          name="name" 
          v-model="getUsers()[slotProps.index].name" 
          type="text" 
          minlength="2" 
          maxlength="50" 
          required>
      </template>

      <template #cell-email="slotProps">
        <input 
          id="email" 
          name="email" 
          v-model="getUsers()[slotProps.index].email"
          type="email" 
          maxlength="50" 
          minlength="5" 
          required>
      </template>

      <template #cell-pass>
        <input 
          id="pass" 
          name="pass" 
          v-model="pass" 
          type="password" 
          placeholder="********" 
          maxlength="50"
          minlength="8" 
          required>
      </template>

      <template #body="slotProps">
        <button 
          type="button" 
          @click="updateUser(users[slotProps.index]._id)" 
          class="btn-blue"
          title="Modifier">
          <i class="fa-solid fa-edit"></i>
        </button>
        <button 
          type="button" 
          @click="deleteUser(users[slotProps.index]._id)" 
          class="btn-red"
          title="Supprimer">
          <i class="fa-solid fa-trash-alt"></i>
        </button>
      </template>
    </TableElt>
  </form>
</template>

<script>
import TableElt from "@/components/TableElt.vue";

import { updateData, deleteData } from "@/services/ApiService";
import { rewriteString } from "@/services/DisplayService";
import { checkName, checkEmail, checkPass } from "@/services/RegexService";

export default {
  name: "ListUsers",
  props: ["users"],
  components: {
    TableElt
  },

  data() {
    return {
      pass: ""
    }
  },

  methods: {
    getUsers() {
      return this.users;
    },

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
        user.name   = rewriteString(user.name);
        user.email  = rewriteString(user.email);

          updateData(`/api/users/${id}`, user)
            .then(() => {
              alert(user.name + " mis à jour !");
              this.$router.go();
            });
      }
    },

    deleteUser(id) {
      let userName = "";

      for (let i = 0; i < this.users.length; i++ ) {
        if (this.users[i]._id === id) {
          userName = this.users[i].name;
        }
      }
      
      if (confirm(`Supprimer ${userName} ?`) === true) {
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
