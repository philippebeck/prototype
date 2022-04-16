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

    <button 
      type="button" 
      @click="createLink()" 
      class="btn-green">
      Créer
    </button>
  </form>
</template>

<script>
import { createData } from '@/services/AxiosService';
import { checkName, checkUrl } from '@/services/CheckService';
import { rewriteName, rewriteUrl } from '@/services/RewriteService';

export default {
  name: "CreateLink",
  /* eslint-disable */

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

      if (checkName(link.name) === true && checkUrl(link.url) === true) {
        if (link.cat === "") {
          alert("Choisissez la catégorie");

        } else {
          link.name = rewriteName(link.name);
          link.url  = rewriteUrl(link.url);

          createData("/api/links", link)
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
