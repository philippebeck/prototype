<template>
  <ul :class="display">
    <li 
      v-for="item in list"
      :key="item">
      <slot :name="item"></slot>
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ListElt",
    props: {
      list: {
        type: Array,
        required: true
      },
      display: {
        type: String,
        default: "col"
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    margin: 0 0 10px;
    padding: 0;
    list-style: none;
  }
  .flex,
  .col,
  .row {
    display: flex;
    place-content: center;
  }
  .flex {
    flex-wrap: wrap;
  }
  .col {
    flex-direction: column;
    padding: 0 10px;
  }
  .row {
    flex-direction: row;
    padding: 10px 0;
    & > * {
      padding: 5px;
    }
  }
</style>
