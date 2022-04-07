<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-link fa-lg"></i>
        Créer un Lien
      </legend>
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
            placeholder="Remplissez le nom"
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
            placeholder="Remplissez l'URL"
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
            <option value="HTML">
              HTML
            </option>
            <option value="CSS">
              CSS
            </option>
            <option value="JS">
              JS
            </option>
            <option value="PHP">
              PHP
            </option>
            <option value="Python">
              Python
            </option>
            <option value="SQL">
              SQL
            </option>
            <option value="NoSQL">
              NoSQL
            </option>
            <option value="Git">
              Git
            </option>
            <option value="Media">
              Media
            </option>
          </select>
        </li>
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click="createLink()" 
            class="btn-green">
            Créer
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "CreateLink",
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
      fetch("http://localhost:3000/api/links", {
          method: "POST",
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
          alert("Lien créé avec succès !");
        })
        .then(() => {
              this.$router.go()
          })
        .catch(alert)
    }
  }
}
</script>
