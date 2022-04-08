<template>
  <main id="admin">
    <NavElt/>

    <h1>Admin</h1>
    <nav class="sidebar">
      <input 
        id="sidebar-class"
        class="sidebar-check" 
        type="checkbox">
      <label 
        for="sidebar-class"
        class="sidebar-open" 
        title="Afficher">
        <i class="far fa-eye fa-fw"></i>
      </label>
      <label 
        for="sidebar-class"
        title="Cacher">
        <i class="far fa-eye-slash fa-fw color-violet"></i>
      </label>
      <a 
        href="#links" 
        title="Créer un lien">
        <i class="fas fa-link fa-fw color-violet"></i>
      </a>
      <a 
        v-for="(cat, index) in cats" 
        :key="index"
        :href="`#${cat}`" 
        :title="`Gérer les liens ${cat}`">
        <i :class="`fa-brands fa-${cat} fa-fw color-violet`"></i>
      </a>
      <a 
        href="#user" 
        title="Créer un utilisateur">
        <i class="fas fa-user fa-fw color-violet"></i>
      </a>
      <a 
        href="#users" 
        title="Gérer les utilisateurs">
        <i class="fas fa-users fa-fw color-violet"></i>
      </a>
      <a 
        href="#admin" 
        title="Haut de page">
        <i class="fas fa-chevron-circle-up fa-fw color-violet"></i>
      </a>
    </nav>

    <section>
      <h2 id="links">
        <i class="fa-solid fa-link fa-lg"></i>
        Liens
      </h2>

      <CreateLink />

      <ListLinks 
        v-if="links.length > 0" 
        :links="links"/>

    </section>
    <section>
      <h2 id="user">
        <i class="fa-solid fa-users fa-lg"></i>
        Utilisateurs
      </h2>

      <CreateUser />

      <ListUsers 
        v-if="users.length > 0" 
        :users="users"/>

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
  computed: {
    cats() {
      const cats = new Set();
      this.links.forEach(link => cats.add(link.cat));
      return Array.from(cats); 
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
