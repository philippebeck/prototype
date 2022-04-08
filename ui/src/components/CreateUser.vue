<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fa-solid fa-user fa-lg"></i>
        Créer un Utilisateur
      </legend>
      <ul>
        <li>
          <label for="name">
            Nom
          </label>
          <input 
            id="name" 
            name="name" 
            v-model="name" 
            type="text" 
            minlength="2" 
            maxlength="50" 
            placeholder="Indiquer le nom" 
            required>
        </li>
        <li>
          <label for="email">
            Email
          </label>
          <input 
            id="email" 
            name="email" 
            v-model="email" 
            type="email" 
            maxlength="50" 
            minlength="5" 
            placeholder="Indiquer l'email"
            required>
        </li>
        <li>
          <label for="pass">
            Mot de Passe
          </label>
          <input 
            id="pass" 
            name="pass" 
            v-model="pass" 
            type="password" 
            placeholder="Indiquer le mot de passe" 
            maxlength="50"
            minlength="8" 
            required>
        </li>
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click="createUser()"
            class="btn-green">
            Créer
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "CreateUser",

  data() {
    return {
      name: "",
      email: "",
      pass: "",
    }
  },

  methods: {
    createUser() {
      let user = {
        name: this.name,
        email: this.email,
        pass: this.pass
      };

      const regexName   = /^[a-zA-Z-\s]+$/;
      const regexEmail  = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
      const regexPass   = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

      if (this.name === "") {
        alert("Indiquer le nom");

      } else if (regexName.test(this.name) === false) {
        alert("2 à 50 caractères avec seulement des lettres sans caractères spéciaux");}
      
      if (this.email === "") {
        alert("Indiquer l'email");

      } else if (regexEmail.test(this.email) === false) {
        alert("Indiquer un email valide");}

      if (this.pass === "") {
        alert("Indiquer le mot de passe");

      } else if (regexPass.test(this.pass) === false) {
        alert("8 à 50 caractères dont une majuscule, une minuscule et un chiffre");

      } else if ((regexName.test(this.name) === true) && regexEmail.test(this.email) === true && regexPass.test(this.pass) === true ) {

        fetch("http://localhost:3000/api/users", {
          method: "POST",
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
          alert("Utilisateur créé avec succès !");
          this.$router.go();
        })
        .catch(alert)
      }
    }
  }
}
</script>