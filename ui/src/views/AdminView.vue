<template>
  <main class="admin">
    <input 
      id="menu-radio1" 
      class="menu-radio1" 
      type="radio" 
      name="menu" 
      checked>
    <input 
      id="menu-radio2" 
      class="menu-radio2" 
      type="radio" 
      name="menu">

    <nav class="menu">
      <label 
        for="menu-radio1" 
        title="Voir les Ressources">
        <i class="fas fa-box-open"></i>
        <span>
          Ressources
        </span>
      </label>
      <label 
        for="menu-radio2" 
        title="Voir les Administrateurs">
        <i class="fas fa-user-ninja"></i>
        <span>
          Administrateurs
        </span>
      </label>
    </nav>

    <section class="menu-relay">
      <h2>Datas</h2>

      <ListResources/>

      <ListUsers 
        v-if="users.length > 0" 
        :users="users"/>
    </section>
  </main>
</template>

<script>
import ListResources from '@/components/ListResources.vue'
import ListUsers from '@/components/ListUsers.vue'
import { getAllUsers, createUser } from '../services/UserService'

export default {
  name: 'AdminView',
  components: {
    ListResources,
    ListUsers
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log("getAllUsers()", response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    userCreate(data) {
      console.log("userCreate(data)", data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>
