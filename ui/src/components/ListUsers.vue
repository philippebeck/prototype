<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-users fa-lg"></i>
        Gérer les Utilisateurs
      </legend>
      <ul v-for="(user, index) in users" 
        :key="index">
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
            placeholder="Fill in the name" 
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
            placeholder="Fill in the email"
            required>
        </li>
        <li>
          <label for="pass">
            Password
          </label>
          <input 
            id="pass" 
            name="pass" 
            type="password" 
            placeholder="Fill in the password" 
            maxlength="50"
            minlength="8" 
            required>
        </li>
        <li>
          <button 
            type="button" 
            @click="updateUser(index)"
            class="btn-blue">
            Modifier {{ user.name }}
          </button>
          <button 
            type="button" 
            @click="deleteUser(index)"
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
    updateUser(index) {
      let user = {
        id: this.users[index]._id,
        name: this.users[index].name,
        email: this.users[index].email,
        pass: this.users[index].pass
      }

      fetch(`http://localhost:3000/api/users/${this.users[index]._id}`, {
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
    deleteUser(index) {
      const token = JSON.parse(localStorage.getItem("userToken"))

      if (confirm("Confirmez la suppression de l'utilisateur") === true) {
        fetch(`http://localhost:3000/api/users/${this.users[index]._id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
            body : JSON.stringify(this.users[index])
        })
        .then(response => response.json())
        .then(data => (this.users[index] = data))
        .then(() => {
            this.$router.go()
        })
        .catch(alert)
      }
    }
  }
}
</script>
