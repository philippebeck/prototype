<template>
  <ul :class="display">
    <li 
      v-for="(item, index) in items"
      :key="index">
      <slot 
        name="items"
        :index="index"
        :item="item">
      </slot>
      <ul v-if="isNested()">
        <li 
          v-for="(value, key) in item"
          :key="key">
          <slot 
            name="nested"
            :index="index"
            :item="item"
            :key="key"
            :value="value">
          </slot>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ListElt",
    props: {
      items: {
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

li ul {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
}

.col {
  flex-direction: column;
}

.row {
  flex-direction: row;
}
</style>
