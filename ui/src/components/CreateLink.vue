<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-link fa-lg"></i>
        Create Link
      </legend>
      <ul>
        <li>
          <label for="name">
            Name
          </label>
          <input 
            id="name" 
            name="name" 
            v-model="name" 
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
            v-model="url"
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
            v-model="cat" 
            required>
            <option value="">
              Choose the category
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
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click="createLink()" 
            class="btn-green">
            Create
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
          alert("Link created successfully");
        })
        .catch(alert)
    },
  }
}
</script>
