<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-link fa-lg"></i>
        Update Link
      </legend>
      <ul v-for="link in links" 
        :key="link.id">
        <li>
          <label for="name">
            Name
          </label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            maxlength="30" 
            placeholder="Fill in the name"
            :value="link.name"
            required>
        </li>
        <li>
          <label for="url">
            URL
          </label>
          <input 
            id="url" 
            name="url" 
            type="text" 
            maxlength="100" 
            placeholder="Fill in the URL"
            :value="link.url"
            required>
        </li>
        <li>
          <label for="category">
            Category
          </label>
          <select 
            id="cat" 
            name="cat" 
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
            class="btn-green">
            Update {{ link.name }}
          </button>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'ListLinks',

  props: ['links'],

  methods: {
    updateLink() {
      let link = {
        id: this._id,
        name: this.name,
        url: this.url,
        cat: this.cat
      }

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
          alert("Link updated successfully");
        })
        .catch(alert)
    }
  }
}
</script>
