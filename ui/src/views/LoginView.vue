<template>
  <main>
    <h1 class="violet anima-grow">
      <i class="fa-solid fa-sign-in-alt fa-2x"></i>
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
            <BtnElt
              type="button"
              content="Connexion"
              @click="login()" 
              class="btn-green"/>
          </li>
        </ul>
      </fieldset>
    </form>
  </main>
</template>

<script>
import BtnElt from '@/components/base/BtnElt';
import { postData } from "@/script/services";

export default {
  name: "LoginView",
  components: {
    BtnElt
  },
  data() {
    return {
      email: "",
      pass: "",
    }
  },

    beforeMount() {
    if (localStorage.userId) {
      this.$router.push("/admin");
    }
  },

  methods: {
    login() {
      let auth = {
          email: this.email,
          pass: this.pass
      };

      postData("/api/users/login", auth)
        .then((res) => {
          let token   = JSON.stringify(res.token);
          let userId  = JSON.stringify(res.userId);

          localStorage.setItem("userToken", token);
          localStorage.setItem("userId", userId);

          this.$router.go("/");
        });
    }
  }
}
</script>