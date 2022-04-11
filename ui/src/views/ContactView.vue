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
              placeholder="Insérer votre Nom"
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
              placeholder="Insérer votre Email"
              maxlength="50" 
              required>
          </li>
          <li>
            <label 
              class="anima-slideR-this" 
              for="subject">
              Sujet
            </label>
            <input 
              class="anima-slideL-this" 
              id="subject" 
              name="subject" 
              v-model="subject" 
              type="text" 
              placeholder="Insérer votre Sujet"
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
              placeholder="Insérer votre Message" 
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
      subject: "",
      message: ""
    }
  },
  methods: {
    send() {
      let message = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };

      fetch("http://localhost:3000/api/users/send", {
        method: "post",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      })
      .then(response => response.json())
      .then(() => {
        alert("Message envoyé avec succès !");
        this.$router.push("/");
      })
      .catch(error => console.error(error));
    }
  }
}
</script>
