<template>
  <form>
    <table
      v-for="(cat, index) in cats" 
      :key="index"
      :id="cat"
      class="table">
      <caption>
        <i :class="`fa-brands fa-${cat} fa-6x color-blue`"></i>
      </caption>
      <thead>
        <tr>
          <th>Nom - URL - Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="link in linksCat(cat).sort((a, b) => (a.name > b.name) ? 1 : -1)"
          :key="link._id">
          <td>
            <input 
              id="name" 
              name="name" 
              v-model="link.name"
              type="text" 
              maxlength="30" 
              required>
            <input 
              id="url" 
              name="url" 
              v-model="link.url"
              type="text" 
              maxlength="100" 
              required>
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
          </td>
          <td>
            <button 
              type="button" 
              @click="updateLink(link._id)" 
              class="btn-blue"
              title="Modifier">
              <i class="fa-solid fa-edit"></i>
            </button>
            <button 
              type="button" 
              @click="deleteLink(link._id)" 
              class="btn-red"
              title="Supprimer">
              <i class="fa-solid fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
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
              alert(link.name + " modifié !");
              this.$router.go();
            });
        }
      }
    },

    deleteLink(id) {
      let linkName = "";

      for (let i = 0; i < this.links.length; i++ ) {
        if (this.links[i]._id === id) {
          linkName = this.links[i].name;
        }
      }

      if (confirm(`Supprimer ${linkName} ?`) === true) {
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
<style>
  input,
  select {
    margin: 10px;
  }
</style>