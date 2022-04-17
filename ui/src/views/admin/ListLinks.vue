<template>
  <form>
    <TableElt 
      :title="table[0].cat"
      :items="table"
      v-for="table in itemsByCat(links)"
      :key="table"
      :id="table[0].cat">

      <template #title>
        <i :class="`fa-brands fa-${table[0].cat} fa-5x color-blue`"></i>
      </template>

      <template #thead>
        actions
      </template>

      <template #td-_id="slotProps">
        {{ slotProps.index + 1 }}
      </template>

      <template #td-name="slotProps">
        <input 
          id="name" 
          name="name" 
          v-model="table[slotProps.index].name"
          type="text" 
          maxlength="30" 
          required>
      </template>

      <template #td-url="slotProps">
        <input 
          id="url" 
          name="url" 
          v-model="table[slotProps.index].url"
          type="text" 
          maxlength="100" 
          required>
      </template>

      <template #td-cat="slotProps">
        <select 
          id="cat" 
          name="cat" 
          v-model="table[slotProps.index].cat"
          required>
          <option :value="table[slotProps.index].cat">
            {{ table[slotProps.index].cat }}
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
      </template>

      <template #tbody="slotProps">
        <button 
          type="button" 
          @click="updateLink(table[slotProps.index]._id)" 
          class="btn-blue"
          title="Modifier">
          <i class="fa-solid fa-edit"></i>
        </button>
        <button 
          type="button" 
          @click="deleteLink(table[slotProps.index]._id)" 
          class="btn-red"
          title="Supprimer">
          <i class="fa-solid fa-trash-alt"></i>
        </button>
      </template>
    </TableElt>
  </form>

</template>

<script>
import TableElt from "@/components/TableElt.vue";
import { updateData, deleteData } from '@/services/AxiosService'
import { checkName, checkUrl } from '@/services/CheckService';
import { rewriteName, rewriteUrl } from '@/services/RewriteService';

export default {
  name: 'ListLinks',
  props: ['links'],
  components: {
    TableElt
  },

  methods: {
    itemsByCat(items) {
      const itemsByCat = {};
      items.forEach(item => {
        if (!itemsByCat[item.cat]) {
          itemsByCat[item.cat] = [];
        }
        itemsByCat[item.cat].push(item);
        itemsByCat[item.cat].sort((a, b) => (a.name > b.name) ? 1 : -1);
      });
      return itemsByCat;
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