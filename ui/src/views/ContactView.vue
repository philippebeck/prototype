<template>
  <main>
    <NavElt/>
    
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

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/NavElt.vue';
import FootElt from '@/components/FootElt.vue';
import { createData } from '@/services/AxiosService';
import { checkName, checkEmail, checkTitle } from '@/services/CheckService';
import { rewriteName, rewriteEmail } from '@/services/RewriteService';

export default {
  name: "ContactView",
  components: {
    NavElt,
    FootElt
  },
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

      if (
        checkName(message.name) === true && 
        checkEmail(message.email) === true &&
        checkTitle(message.title) === true) {
        message.name  = rewriteName(message.name);
        message.email = rewriteEmail(message.email);

        createData("/api/users/send", message)
          .then(() => {
            alert(message.title + " envoyé !");
            this.$router.push("/");
          });
        }
    }
  }
}
</script>
