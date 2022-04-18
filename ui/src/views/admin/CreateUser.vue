<template>
  <form class="form">
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

    <button 
      type="button" 
      @click="createUser()"
      class="btn-green">
      Créer
    </button>
  </form>
</template>

<script>
import { postData } from "@/services/ApiService"
import { rewriteString } from "@/services/DisplayService";
import { checkName, checkEmail, checkPass } from "@/services/RegexService";

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

      if (
        checkName(user.name)    === true && 
        checkEmail(user.email)  === true && 
        checkPass(user.pass)    === true
        ) {
        user.name   = rewriteString(user.name);
        user.email  = rewriteString(user.email);

        postData("/api/users", user)
          .then(() => {
            alert(user.name + " créé !");
            this.$router.go();
          });
      }
    }
  }
}
</script>