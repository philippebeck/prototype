<template>
  <main>
    <h1 class="color-violet anima-slideB-this">
      Contact
    </h1>
    <form class="form anima-growX">
      <fieldset>
        <ul>

          <li>
            <label 
              class="anima-slideR-this" 
              for="name">
              Nom
            </label>
            <input 
              class="anima-slideL-this" 
              id="name" 
              name="name" 
              v-model="name" 
              type="text" 
              placeholder="Indiquer votre Nom"
              maxlength="20" 
              required>
          </li>

          <li>
            <label 
              class="anima-slideR-this" 
              for="email">
              Email
            </label>
            <input 
              class="anima-slideL-this" 
              id="email" 
              name="email" 
              v-model="email" 
              type="email" 
              placeholder="Indiquer votre Email"
              maxlength="50" 
              required>
          </li>

          <li>
            <label 
              class="anima-slideR-this" 
              for="title">
              Titre
            </label>
            <input 
              class="anima-slideL-this" 
              id="title" 
              name="title" 
              v-model="title" 
              type="text" 
              placeholder="Indiquer votre Titre"
              maxlength="50" 
              required>
          </li>

          <li>
            <label 
              class="anima-slideR-this" 
              for="message">
              Message
            </label>
            <textarea 
              class="anima-slideL-this" 
              id="message" 
              name="message" 
              v-model="message" 
              placeholder="Indiquer votre Message" 
              rows="5"
              cols="20"></textarea>
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
              @click="send()" 
              type="button"
              class="btn-green">
              Envoyer
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  </main>
</template>

<script>
import { postData } from "@/services/ApiService";
import { checkString, rewriteString } from "@/services/StringService";

export default {
  name: "ContactView",

  data() {
    return {
      name: "",
      email: "",
      title: "",
      message: ""
    }
  },

  methods: {
    send() {
      let message = {
        name: this.name,
        email: this.email,
        title: this.title,
        message: this.message
      };

      if (checkString(message.name, "name") === true 
        && checkString(message.email, "email") === true) {
        message.name  = rewriteString(message.name, "name");
        message.email = rewriteString(message.email, "email");

        postData("/api/users/send", message)
          .then(() => {
            alert(message.title + " envoyé !");
            this.$router.push("/");
          });
        }
    }
  }
}
</script>
