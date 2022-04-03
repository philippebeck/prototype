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

      <section class="menu-target1">
        <h3>
          <i class="fas fa-box-open"></i>
          Ressources
        </h3>

        <CreateResource />

        <ListResources 
          v-if="resources.length > 0" 
          :resources="resources"/>
      </section>

      <section class="menu-target2">
        <h3>
          <i class="fas fa-user-ninja"></i>
          Utilisateurs
        </h3>

        <CreateUser />

        <ListUsers 
          v-if="users.length > 0" 
          :users="users"/>
        </section>
    </section>
  </main>
</template>

<script>
import CreateResource from '@/components/CreateResourceView.vue'
import ListResources from '@/components/ListResources.vue'
import CreateUser from '@/components/CreateUserView.vue'
import ListUsers from '@/components/ListUsers.vue'
import { getAllUsers, createUser } from '../services/UserService'
import { getAllResources, createResource } from '../services/ResourceService'

export default {
  name: 'AdminView',
  components: {
    CreateResource,
    ListResources,
    CreateUser,
    ListUsers
  },
  data() {
    return {
      users: [],
      numberOfUsers: 0,
      resources: [],
      numberOfResources: 0
    }
  },
  methods: {
    getAllResources() {
      getAllResources().then(response => {
        console.log("getAllResources()", response)
        this.resources = response
        this.numberOfResources = this.resources.length
      })
    },
    resourceCreate(data) {
      console.log("resourceCreate(data)", data)
      createResource(data).then(response => {
        console.log(response);
        this.getAllResources();
      });
    },
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
    this.getAllResources();
    this.getAllUsers();
  }
}
</script>
