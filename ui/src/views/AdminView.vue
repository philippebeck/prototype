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
        <i class="fa-solid fa-link"></i>
        <span>
          Liens
        </span>
      </label>
      <label 
        for="menu-radio2" 
        title="Voir les Administrateurs">
        <i class="fa-solid fa-users"></i>
        <span>
          Utilisateurs
        </span>
      </label>
    </nav>

    <section class="menu-relay">
      <h2>Admin</h2>
      <section class="menu-target1">
        <h3>
          <i class="fa-solid fa-link fa-2x"></i>
          Liens
        </h3>

        <CreateLink />

        <ListLinks 
          v-if="links.length > 0" 
          :links="links"/>

      </section>
      <section class="menu-target2">
        <h3>
          <i class="fa-solid fa-users fa-2x"></i>
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
      users: []
    }
  },
  methods: {
    getAllLinks() {
      getAllLinks().then(response => {
        this.links = response
      })
    },
    getAllUsers() {
      getAllUsers().then(response => {
        this.users = response
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
