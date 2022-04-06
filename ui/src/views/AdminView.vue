<template>
  <main class="admin">
    <NavElt/>

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

        <CreateLink />

        <ListLinks 
          v-if="links.length > 0" 
          :links="links"/>

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

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/NavElt.vue';
import FootElt from '@/components/FootElt.vue';

import CreateLink from '@/components/CreateLink.vue'
import CreateUser from '@/components/CreateUser.vue'
import ListLinks from '@/components/ListLinks.vue'
import ListUsers from '@/components/ListUsers.vue'

import { getAllUsers, createUser } from '@/services/UserService'
import { getAllLinks, createLink } from '@/services/LinkService'

export default {
  name: 'AdminView',
  components: {
    NavElt,
    FootElt,
    CreateLink,
    CreateUser,
    ListLinks,
    ListUsers
  },
  data() {
    return {
      links: [],
      users: [],
      numberOfLinks: 0,
      numberOfUsers: 0
    }
  },
  methods: {
    getAllLinks() {
      getAllLinks().then(response => {
        this.links = response
        this.numberOfLinks = this.links.length
      })
    },
    getAllUsers() {
      getAllUsers().then(response => {
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    linkCreate(data) {
      createLink(data).then(response => {
        console.log(response);
        this.getAllLinks();
      });
    },
    userCreate(data) {
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllLinks();
    this.getAllUsers();
  }
}
</script>
