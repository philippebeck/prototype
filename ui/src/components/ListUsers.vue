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
export default {
  name: 'ListUsers',
/* eslint-disable */
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

      fetch(`http://localhost:3000/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(response => {
          if(response.ok) {
            return response.json()
          } else {
            return response.text()
            .then((text) => {
              throw new Error(text)}
            )
          }
        })
        .then(() => {
          alert("Utilisateur mis à jour avec succès");
        })
        .then(() => {
            this.$router.go()
        })
        .catch(alert)
    },
    deleteUser(id) {
      const token = JSON.parse(localStorage.getItem("userToken"))

      if (confirm("Confirmez la suppression de l'utilisateur") === true) {
        fetch(`http://localhost:3000/api/users/${id}`, {
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${token}`
          }
        })
        .then(response => response.json())
        .then(() => {
          alert("Utilisateur supprimé avec succès");
        })
        .then(() => {
          this.$router.go()
        })
        .catch(alert)
      }
    }
  }
}
</script>
