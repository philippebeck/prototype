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
          maxlength="30" 
          placeholder="Indiquer le nom"
          required>
      </li>

      <li>
        <label for="url">
          URL
        </label>
        <input 
          id="url" 
          name="url" 
          v-model="url"
          type="text" 
          maxlength="100" 
          placeholder="Indiquer l'URL"
          required>
      </li>
      
      <li>
        <label for="category">
          Catégorie
        </label>
        <select 
          id="cat" 
          name="cat" 
          v-model="cat" 
          required>
          <option value="">
            Choisissez la Catégorie
          </option>
          <option value="html5">
            HTML
          </option>
          <option value="css3">
            CSS
          </option>
          <option value="js">
            JS
          </option>
          <option value="php">
            PHP
          </option>
          <option value="python">
            Python
          </option>
          <option value="git">
            Git
          </option>
          <option value="dev">
            Dev
          </option>
        </select>
      </li>
    </ul>

    <BtnElt
      type="button"
      content="Créer"
      @click="createLink()" 
      class="btn-green"/>
  </form>
</template>

<script>
import BtnElt from '@/components/base/BtnElt';
import { checkString, rewriteString, postData } from "@/script/services";

export default {
  name: "CreateLink",
  components: {
    BtnElt
  },
  data() {
    return {
      name: "",
      url: "",
      cat: ""
    }
  },

  methods: {
    createLink() {
      let link = {
        name: this.name,
        url: this.url,
        cat: this.cat
      };

      if (checkString(link.name, "name") === true 
        && checkString(link.url, "url") === true) {
        if (link.cat === "") {
          alert("Choisissez la catégorie");
          
        } else {
          link.name = rewriteString(link.name, "name");
          link.url  = rewriteString(link.url, "url");

          console.log(link);

          postData("/api/links", link)
            .then(() => {
              alert(link.name + " créé !");
              this.$router.go();
            });
        }
      }
    }
  }
}
</script>
