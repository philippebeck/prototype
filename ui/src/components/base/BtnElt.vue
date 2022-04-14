<template>
  <button 
    :type="type"
    :name="name"
    @click="action">
    <slot></slot>
    {{ content }}
  </button>
</template>

<script>
  export default {
    name: "BtnElt",

    props: {
      type: {
        type: String,
        default: "button"
      },
      name: {
        type: String
      },
      content: {
        type: String
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
