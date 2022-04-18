<template>
  <div>
    <NavElt>
      <template #brand>
        <a 
          class="anima-slideB-this" 
          href="/" 
          title="Accueil">
          <img 
            src="logo.svg" 
            alt="Logo Phi" 
            width="30" 
            height="30">
        </a>
      </template>

      <template #nav>
        <ul>
          <li>
            <a 
              href="/">
              <i class="fa-solid fa-link fa-fw"></i>
              <strong>Liens</strong>
            </a>
          </li>
          <li>
            <a 
              href="/contact">
              <i class="fa-brands fa-at fa-fw"></i>
              <strong>Contact</strong>
            </a>
          </li>
        </ul>
      </template>

      <template #admin>
        <ul v-if="!userId">
          <li>
            <a 
              class="onto-color-cyan" 
              href="https://paypal.me/philippebeck" 
              title="Donation">
              <i class="fa-brands fa-paypal fa-lg fa-fw"></i>
            </a>
          </li>
          <li>
            <a 
              class="onto-color-pink" 
              href="https://github.com/sponsors/philippebeck" 
              title="Sponsor">
              <i class="far fa-heart fa-lg fa-fw"></i>
            </a>
          </li>
          <li>
            <a 
              class="onto-color-red" 
              href="/login" 
              title="Login">
              <i class="fa-solid fa-sign-in-alt fa-lg fa-fw"></i>
            </a>
          </li>
        </ul>

        <ul v-else>
          <li>
            <a 
              class="onto-color-red" 
              href="/admin" 
              title="Admin">
              <i class="fa-solid fa-user-ninja fa-lg fa-fw"></i>
            </a>
          </li>
          <li>
            <button 
              class="onto-color-red" 
              type="button"
              @click="logout()"
              title="Logout">
              <i class="fa-solid fa-sign-out-alt fa-lg fa-fw"></i>
            </button>
          </li>
        </ul>
      </template>
    </NavElt>

    <router-view/>
    <FootElt/>
  </div>
</template>

<script>
import NavElt from "@/components/NavElt.vue";
import FootElt from "@/components/FootElt.vue";

export default {
  name: 'App',
  components: {
    NavElt,
    FootElt
  },

  data() {
    return {
      userId: null
    }
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  },

  mounted() {
    if (localStorage.userId) {
      this.userId = JSON.parse(localStorage.userId);
    }
  }
};
</script>
