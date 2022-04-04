<template>
  <form class="form">
    <input 
      name="MAX_FILE_SIZE" 
      type="hidden" 
      value="5000000">
    <fieldset>
      <legend>
        <i class="fas fa-users fa-2x"></i>
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
            maxlength="50" 
            placeholder="Insérer le Nom" 
            required>
        </li>
        <li>
          <label for="email">
            Courriel
          </label>
          <input 
            id="email" 
            name="email" 
            v-model="email" 
            type="email" 
            maxlength="100" 
            minlength="5" 
            placeholder="Insérer le Courriel"
            required>
        </li>
        <hr>
        <li>
          <label for="pass">
            Mot de Passe
          </label>
          <input 
            id="pass" 
            name="pass" 
            v-model="pass" 
            type="password" 
            placeholder="Insérer le Mot de Passe" 
            maxlength="100"
            minlength="8" 
            required>
        </li>
        <!--<li>
          <label for="conf-pass">
            Confirmer
          </label>
          <input 
            id="conf-pass" 
            name="conf-pass" 
            type="password" 
            placeholder="Confirmer le Mot de Passe" 
            maxlength="100"
            minlength="8" 
            required>
        </li>-->
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click='createUser()' 
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
  name: 'CreateUserView',
  data() {
    return {
      name: '',
      email: '',
      pass: '',
    }
  },
  methods: {
    createUser() {
      let data = {
          name: this.name,
          email: this.email,
          pass: this.pass
      };

      const regexText = /^[a-zA-Z-\s]+$/;
      const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/; // eslint-disable-line
      const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,50}$/;

      if (this.name === "") {
          alert("Veuillez remplir votre nom");
      } else if (regexText.test(this.name) === false) {
          alert("Veuillez vérifier que l'écriture de votre nom soit uniquement en lettre");}
      
      if (this.email === "") {
          alert("Veuillez remplir votre adresse email");
      } else if (regexEmail.test(this.email) === false) {
          alert("Veuillez écrire une adresse email valide");}

      if (this.pass === "") {
          alert("Veuillez remplir votre mot de passe");
      } else if (regexPassword.test(this.pass) === false) {
          alert("Veuillez vérifier l'écriture de votre mot de passe, il doit contenir au moins une majuscule, une minuscule ainsi qu'un chiffre");
      }else if ((regexText.test(this.name) === true) && regexEmail.test(this.email) === true && regexPassword.test(this.pass) === true ) {

          fetch("http://localhost:3000/api/auth/signup", {
              method: "POST",
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
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
              alert("Votre inscription est bien prise en compte");
              this.$router.push("/admin");
          })
          .catch(alert)
      }
    }
  }
}
</script>