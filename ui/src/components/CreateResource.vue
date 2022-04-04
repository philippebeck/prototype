<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-box-open fa-2x"></i>
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
            placeholder="Insérer le Nom"
            required>
        </li>
        <li>
          <label for="link">
            Lien
          </label>
          <input 
            id="link" 
            name="link" 
            type="text" 
            maxlength="100" 
            placeholder="https://"
            required>
        </li>
        <li>
          <label for="technology">
            Technologie
          </label>
          <select 
            id="technology" 
            name="technology" 
            title="Choisissez la Technologie"
            required>
            <option value="">
              Choisissez une Technologie
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
          <label for="category">
            Catégorie
          </label>
          <input 
            id="category" 
            name="category" 
            type="text" 
            maxlength="30" 
            placeholder="Insérer la Catégorie"
            required>
        </li>
        <li>
          <label for="description">
            Description
          </label>
          <textarea 
            id="description" 
            name="description" 
            rows="5" 
            cols="30" 
            placeholder="Insérer la Description"
            required></textarea>
        </li>
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click='createResource()' 
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
    name: 'CreateResource',
    data() {
      return {
        name: '',
        link: '',
        technology: '',
        category: '',
        description: ''
      }
    },
    methods: {
      createResource() {
        console.log("createResource()", this.name)
        const payload = {
          name: this.name,
          link: this.link,
          technology: this.technology,
          category: this.category,
          description: this.description
        }
        this.$emit('createResource', payload)
        this.clearForm();
      },
      clearForm() {
        this.name = "";
        this.link = "";
        this.technology = "";
        this.category = "";
        this.description = "";
      }
    }
  }
</script>
