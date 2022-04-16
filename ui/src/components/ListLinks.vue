<template>
  <section>
    <h3>
      <i class="fa-solid fa-link fa-lg"></i>
      Gérer les Liens
    </h3>

    <form
      v-for="(cat, index) in cats" 
      :key="index"
      :id="cat"
      class="form">
      <legend>
        <i :class="`fa-brands fa-${cat} fa-6x color-blue`"></i>
      </legend>
      <fieldset
        v-for="link in linksCat(cat).sort((a, b) => (a.name > b.name) ? 1 : -1)"
        :key="link._id">
        <ul>
          <li>
            <label for="name">
              Nom
            </label>
            <input 
              id="name" 
              name="name" 
              v-model="link.name"
              type="text" 
              maxlength="30" 
              required>
          </li>
          <li>
            <label for="url">
              URL
            </label>
            <input 
              id="url" 
              name="url" 
              v-model="link.url"
              type="text" 
              maxlength="100" 
              required>
          </li>
          <li>
            <label for="cat">
              Catégorie
            </label>
            <select 
              id="cat" 
              name="cat" 
              v-model="link.cat"
              required>
              <option :value="link.cat">
                {{ link.cat }}
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
          <li>
            <button 
              type="button" 
              @click="updateLink(link._id)" 
              class="btn-blue">
              Modifier {{ link.name }}
            </button>
            <button 
              type="button" 
              @click="deleteLink(link._id)" 
              class="btn-red">
              Supprimer {{ link.name }}
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  </section>
</template>

<script>
import { updateData, deleteData } from '@/services/AxiosService'
import { checkName, checkUrl } from '@/services/CheckService';
import { rewriteName, rewriteUrl } from '@/services/RewriteService';

export default {
  name: 'ListLinks',

  props: ['links'],

  computed: {
    cats() {
      const cats = new Set();
      this.links.forEach(link => cats.add(link.cat));
      return Array.from(cats); 
    }
  },

  methods: {
    linksCat(cat) {
      return this.links
        .filter(link => link.cat === cat);
    },

    updateLink(id) {
      let link = {};

      for (let i = 0; i < this.links.length; i++ ) {
        if (this.links[i]._id === id) {
          link = {
            id: this.links[i]._id,
            name: this.links[i].name,
            url: this.links[i].url,
            cat: this.links[i].cat
          }
        }
      }

      if (checkName(link.name) === true && checkUrl(link.url) === true) {
        if (link.cat === "") {
          alert("Choisissez la catégorie");

        } else {
          link.name = rewriteName(link.name);
          link.url  = rewriteUrl(link.url);

          updateData(`/api/links/${id}`, link)
            .then(() => {
              alert(link.name + " mis à jour !");
              this.$router.go();
            });
        }
      }
    },

    deleteLink(id) {
      if (confirm("Confirmez la suppression du lien") === true) {
        let linkName = "";

        for (let i = 0; i < this.links.length; i++ ) {
          if (this.links[i]._id === id) {
            linkName = this.links[i].name;
          }
        }

        deleteData(`/api/links/${id}`)
          .then(() => {
            alert(linkName + " supprimé !");
            this.$router.go();
          });
      }
    }
  }
}
</script>
