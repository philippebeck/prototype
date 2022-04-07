<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-link fa-lg"></i>
        Update Link
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
            placeholder="Fill in the name"
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
            placeholder="Fill in the URL"
            required>
        </li>
        <li>
          <label for="category">
            Category
          </label>
          <select 
            id="cat" 
            name="cat" 
            v-model="link.cat"
            required>
            <option :value="link.cat">
              {{ link.cat }}
            </option>
            <option value="HTML">
              HTML
            </option>
            <option value="CSS">
              CSS
            </option>
            <option value="JS">
              JavaScript
            </option>
            <option value="PHP">
              PHP
            </option>
            <option value="SQL">
              SQL
            </option>
            <option value="Git">
              Git
            </option>
            <option value="Media">
              Media
            </option>
          </select>
        </li>
        <li>
          <button 
            type="button" 
            @click="updateLink()" 
            class="btn-blue">
            Update {{ link.name }}
          </button>
          <button 
            type="button" 
            @click="removeLink(index)" 
            class="btn-red">
            Remove {{ link.name }}
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
    updateLink() {
      let link = {
        id: this._id,
        name: this.name,
        url: this.url,
        cat: this.cat
      }

      console.log(link);

      fetch(`http://localhost:3000/api/links/${link.id}`, {
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
        .catch(alert)
    },
    deleteLink() {
      const token = JSON.parse(localStorage.getItem("userToken"))

      if (confirm("Confirmez la suppression du lien") === true) {

          fetch(`http://localhost:3000/api/links/${this.links[index].id}`, {
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
  },

  computed: {
    console: () => console,
    window: () => window
  }
}
</script>
