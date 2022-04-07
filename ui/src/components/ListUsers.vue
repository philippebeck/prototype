<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-users fa-lg"></i>
        Édition d'un Utilisateur
      </legend>
      <ul v-for="user in users" 
        :key="user.id">
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
            @click="updateUser()"
            class="btn-green">
            Update {{ user.name }}
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'ListUsers',

  props: ['users'],

    methods: {
    updateUser() {
      let user = {
        id: this._id,
        name: this.name,
        email: this.email,
        pass: this.pass
      }

      fetch(`http://localhost:3000/api/users/${user.id}`, {
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
        .catch(alert)
    }
  }
}
</script>
