<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fa-solid fa-link fa-lg"></i>
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
            placeholder="Indiquer le nom"
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
            placeholder="Indiquer l'URL"
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
  /* eslint-disable */

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

      const regexName = /^[a-zA-Z0-9.-_\s]+$/;
      const regexUrl  = /(https?|ftp|ssh|mailto):\/\/[a-z0-9\/:%_+.,#?!@&=-]+$/;

      if (this.name === "") {
        alert("Indiquer le nom");

      } else if (regexName.test(this.name) !== true) {
        alert("2 à 50 caractères avec seulement des lettres sans caractères spéciaux");

      } else if (this.url === "") {
        alert("Indiquer l'url");

      } else if (regexUrl.test(this.url) !== true) {
        alert("Indiquer une url valide");

      } else if (this.cat === "") {
        alert("Choisissez la catégorie");

      } else {
        link.url = this.url.replace(/(^\w+:|^)\/\//, "");

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
}
</script>
