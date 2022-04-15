<template>
  <button 
    v-if="isBtn === true"
    :type="type"
    :name="name"
    @click="action">
    <slot></slot>
    {{ content }}
  </button>

  <a 
    v-else
    :href="href"
    :title="title">
    <slot></slot>
    {{ content }}
  </a>
</template>

<script>
  export default {
    name: "BtnElt",

    props: {
      content: {
        type: String
      },
      href: {
        type: String
      },
      isBtn: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      title: {
        type: String
      },
      type: {
        type: String,
        default: "button"
      }
    },

    methods: {
      action() {
        alert("test !")
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: var(--primary);
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: var(--violet);
  }

  button {
    background-color: var(--primary);
    color: var(--secondary);
  }

  button:hover,
  button:focus {
    background-color: var(--secondary);
    color: var(--primary);
  }

  
</style>
