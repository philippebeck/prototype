<template>
  <form 
    class="form" 
    method="post" 
    action="#" 
    enctype="multipart/form-data">
    <input 
      name="MAX_FILE_SIZE" 
      type="hidden" 
      value="5000000">
    <fieldset>
      <legend>
        <i class="fas fa-users fa-2x"></i>
      </legend>
      <ul>
        <li>
          <label for="name">
            Nom
          </label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            maxlength="50" 
            placeholder="Insérer le Nom" 
            required>
        </li>
        <li>
          <label for="file">
            Photo (max 5Mo)
          </label>
          <input 
            name="file" 
            type="file" 
            accept=".jpg, .jpeg, .png, .svg, .gif" 
            required>
        </li>
        <li>
          <label for="email">
            Courriel
          </label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            maxlength="100" 
            minlength="5" 
            placeholder="Insérer le Courriel"
            required>
        </li>
        <hr>
        <li>
          <label for="pass">
            Mot de Passe
          </label>
          <input 
            id="pass" 
            name="pass" 
            type="password" 
            placeholder="Insérer le Mot de Passe" 
            maxlength="100"
            minlength="8" 
            required>
        </li>
        <li>
          <label for="conf-pass">
            Confirmer
          </label>
          <input 
            id="conf-pass" 
            name="conf-pass" 
            type="password" 
            placeholder="Confirmer le Mot de Passe" 
            maxlength="100"
            minlength="8" 
            required>
        </li>
      </ul>
      <ul>
        <li>
          <input 
            type="reset" 
            value="Réinitialiser">
          <button 
            type="button" 
            @click='createUser()' 
            class="btn-green">
            Create
          </button>
        </li>
      </ul>
    </fieldset>
    <a 
      class="btn-black btn-lg" 
      href="#">
      Quitter
    </a>
  </form>
</template>

<script>
  export default {
    name: 'CreateUser',
    data() {
      return {
        name: '',
        file: '',
        email: '',
        pass: ''
      }
    },
    methods: {
      createUser() {
        console.log("createUser()", this.name)
        const payload = {
          name: this.name,
          file: this.file,
          email: this.email,
          pass: this.pass
        }
        this.$emit('createUser', payload)
        this.clearForm();
      },
      clearForm() {
        this.name = "";
        this.file = "";
        this.email = "";
        this.pass = "";
      }
    }
  }
</script>