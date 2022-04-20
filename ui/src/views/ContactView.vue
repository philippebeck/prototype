<template>
  <main>
    <h1 class="color-violet anima-slideB-this">
      <i class="fa-solid fa-at fa-2x"></i>
      Contact
    </h1>
    <form class="form anima-growX">
      <fieldset>
        <ul>
          <li>
            <FieldElt
              id="name"
              v-model:value="name"
              info="Indiquer votre nom"
              required>
              <template #label>
                Nom
              </template>
            </FieldElt>
          </li>
          <li>
            <FieldElt
              id="email"
              v-model:value="email"
              info="Indiquer votre email"
              type="email"
              required>
              <template #label>
                Email
              </template>
            </FieldElt>
          </li>
          <li>
            <FieldElt
              id="title"
              v-model:value="title"
              info="Indiquer le titre"
              required>
              <template #label>
                Titre
              </template>
            </FieldElt>
          </li>
          <li>
            <FieldElt
              id="message"
              v-model:value="message"
              info="Indiquer votre message"
              type="area"
              required>
              <template #label>
                Message
              </template>
            </FieldElt>
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
              content="Envoyer"
              @click="send()" 
              class="btn-green"/>
          </li>
        </ul>
      </fieldset>
    </form>
  </main>
</template>

<script>
import BtnElt from '@/components/base/BtnElt';
import FieldElt from '@/components/base/FieldElt';
import { checkString, rewriteString, postData } from "@/script/services";

export default {
  name: "ContactView",
  components: {
    BtnElt,
    FieldElt
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
