<template>
  <form class="form">
    <fieldset>
      <legend>
        <i class="fas fa-users fa-2x"></i>
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
            minlength="2" 
            maxlength="50" 
            placeholder="Fill in the name" 
            required>
        </li>
        <li>
          <label for="email">
            Email
          </label>
          <input 
            id="email" 
            name="email" 
            v-model="email" 
            type="email" 
            maxlength="50" 
            minlength="5" 
            placeholder="Fill in the email"
            required>
        </li>
        <li>
          <label for="pass">
            Password
          </label>
          <input 
            id="pass" 
            name="pass" 
            v-model="pass" 
            type="password" 
            placeholder="Fill in the password" 
            maxlength="50"
            minlength="8" 
            required>
        </li>
      </ul>
      <ul>
        <li>
          <button 
            type="button" 
            @click="createUser()"
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
  name: "CreateUserView",
  data() {
    return {
      name: "",
      email: "",
      pass: "",
    }
  },
  
  methods: {
    createUser() {
      let data = {
        name: this.name,
        email: this.email,
        pass: this.pass
      };

      const regexName   = /^[a-zA-Z-\s]+$/;
      const regexEmail  = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
      const regexPass   = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

      if (this.name === "") {
        alert("Please fill in the name");

      } else if (regexName.test(this.name) === false) {
        alert("2 to 50 characters with letters only and no special characters");}
      
      if (this.email === "") {
        alert("Please fill in the email address");

      } else if (regexEmail.test(this.email) === false) {
        alert("Please enter a valid email address");}

      if (this.pass === "") {
        alert("Please fill in the password");

      } else if (regexPass.test(this.pass) === false) {
        alert("8 to 50 characters with a capital letter, a lower case letter and a number");

      } else if ((regexName.test(this.name) === true) && regexEmail.test(this.email) === true && regexPass.test(this.pass) === true ) {

        fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
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
          alert("User created successfully");
          this.$router.push("/login");
        })
        .catch(alert)
      }
    }
  }
}
</script>