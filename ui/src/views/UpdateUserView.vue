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
        <img 
          class="bord-violet" 
          src="img/user/{{ user.image }}" 
          alt="Photo de {{ user.name }}">
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
            value="{{ user.name }}"
            required>
        </li>
        <li>
          <label for="file">
            Photo (max 5Mo)
          </label>
          <input 
            name="file" 
            type="file" 
            accept=".jpg, .jpeg, .png, .gif">
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
            value="{{ user.email }}"
            required>
        </li>
        <hr>
        <li>
          <label for="old-pass">
            Ancien Mot de Passe
          </label>
          <input 
            id="old-pass" 
            name="old-pass" 
            type="password" 
            placeholder="Insérer votre Ancien Mot de Passe" 
            maxlength="100" 
            minlength="8">
        </li>
        <li>
          <label for="new-pass">
            Nouveau Mot de Passe
          </label>
          <input 
            id="new-pass" 
            name="new-pass" 
            type="password" 
            placeholder="Insérer votre Nouveau Mot de Passe" 
            maxlength="100" 
            minlength="8">
        </li>
        <li>
          <label for="conf-pass">
            Confirmer
          </label>
          <input 
            id="conf-pass" 
            name="conf-pass" 
            type="password" 
            placeholder="Confirmer votre Nouveau Mot de Passe" 
            maxlength="100" 
            minlength="8">
        </li>
      </ul>
      <ul>
        <li>
          <input 
            type="reset" 
            value="Réinitialiser">
          <input 
            type="submit" 
            value="Mettre à Jour">
        </li>
      </ul>
    </fieldset>
    <a 
      class="btn-black btn-lg" 
      href="{{ url('admin') }}">
      Quitter
    </a>
  </form>
</template>

<script>
  export default {
    name: 'UpdateUser',
    data() {
      return {
        name: '',
        file: '',
        email: '',
        pass: ''
      }
    },
    methods: {
      updateUser() {
        console.log("updateUser()", this.name)
        const payload = {
          name: this.name,
          file: this.file,
          email: this.email,
          pass: this.pass
        }
        this.$emit('updateUser', payload)
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
