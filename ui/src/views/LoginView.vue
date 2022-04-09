<template>
  <main>
    <NavElt/>

    <h1 class="color-violet anima-grow-this">
      Login
    </h1>
    <form class="form">
      <fieldset>
        <ul>
          <li>
            <label 
              class="anima-slideR-this" 
              for="email">
              Identifiant
            </label>
            <input 
              id="email" 
              class="anima-slideL-this" 
              name="email" 
              v-model="email" 
              type="email" 
              placeholder="Insérer votre Identifiant"
              required>
          </li>
          <li>
            <label 
              class="anima-slideR-this" 
              for="pass">
              Mot de Passe
            </label>
            <input 
              id="pass" 
              class="anima-slideL-this" 
              name="pass" 
              v-model="pass" 
              type="password"
              placeholder="Insérer votre mot de passe" 
              autocomplete="off" 
              required>
          </li>
        </ul>
        <ul>
          <li>
            <div 
              id="recaptcha" 
              class="g-recaptcha" 
              data-sitekey="6LdTBtoZAAAAADITfTTXpjsctFXZqKXZc-seM9ZL">
            </div>
          </li>
          <li>
            <button 
              @click="login()" 
              type="button"
              class="btn-green">
              Connexion
            </button>
          </li>
        </ul>
      </fieldset>
    </form>

    <FootElt/>
  </main>
</template>

<script>
import NavElt from "@/components/NavElt.vue";
import FootElt from "@/components/FootElt.vue";

export default {
  name: "LoginView",
  components: {
    NavElt,
    FootElt
  },

  data() {
    return {
      email: "",
      pass: "",
    }
  },

  methods: {
    login() {
        
      let data = {
          email: this.email,
          pass: this.pass
      };

      fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      
      .then( response => {

        if(response.ok) {
          return response.json()

        } else {
          return response.text()
          .then((text) => {
            throw new Error(text)}
          )
        }
      })  
        
      .then((value) => {
        const token   = JSON.stringify(value.token);
        const userId  = JSON.stringify(value.userId);

        localStorage.setItem("userToken", token);
        localStorage.setItem("userId", userId);

        this.$router.push("/admin");
      })
      .catch(alert)
    }
  }
}
</script>