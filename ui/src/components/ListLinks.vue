<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fa-solid fa-link fa-lg"></i>
        Gérer les Liens
      </legend>
      <ul v-for="(link, index) in links" 
        :key="index">
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
          </select>
        </li>
        <li>
          <button 
            type="button" 
            @click="updateLink(index)" 
            class="btn-blue">
            Modifier {{ link.name }}
          </button>
          <button 
            type="button" 
            @click="deleteLink(index)" 
            class="btn-red">
            Supprimer {{ link.name }}
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'ListLinks',
  /* eslint-disable */
  props: ['links'],
  methods: {
    updateLink(index) {
      let link = {
        id: this.links[index]._id,
        name: this.links[index].name,
        url: this.links[index].url,
        cat: this.links[index].cat
      }
      fetch(`http://localhost:3000/api/links/${this.links[index]._id}`, {
          method: "PUT",
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },
          body: JSON.stringify(link)
        })
        .then(response => {
          if(response.ok) {
            return response.json()
          } else {
            return response.text()
            .then((text) => {
              throw new Error(text)}
            )
          }
        })
        .then(() => {
          alert("Lien mis à jour avec succès");
        })
        .then(() => {
            this.$router.go()
        })
        .catch(alert)
    },
    deleteLink(index) {
      const token = JSON.parse(localStorage.getItem("userToken"))

      if (confirm("Confirmez la suppression du lien") === true) {
        fetch(`http://localhost:3000/api/links/${this.links[index]._id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
            body : JSON.stringify(this.links[index])
        })
        .then(response => response.json())
        .then(data => (this.links[index] = data))
        .then(() => {
            this.$router.go()
        })
        .catch(alert)
      }
    }
  }
}
</script>
