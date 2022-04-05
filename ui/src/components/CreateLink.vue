<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-box-open fa-2x"></i>
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
          <label for="link">
            Link
          </label>
          <input 
            id="link" 
            name="link" 
            type="text" 
            maxlength="100" 
            placeholder="Fill in the link"
            required>
        </li>
        <li>
          <label for="category">
            Category
          </label>
          <select 
            id="category" 
            name="category" 
            title="Choose the category"
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
        link: "",
        category: ""
      }
    },
    methods: {
      createLink() {
        const payload = {
          name: this.name,
          link: this.link,
          category: this.category
        }
        this.$emit("createLink", payload)
        this.clearForm();
      },
      clearForm() {
        this.name = "";
        this.link = "";
        this.category = "";
      }
    }
  }
</script>
