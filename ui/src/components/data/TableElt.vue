<template>
  <table>
    <caption v-if="hasSlot('title')">
      <slot name="title"></slot>
    </caption>

    <thead>
      <tr>
        <th
          v-for="(value, key) in items[0]"
          :key="key">
          {{ key === "_id" ? key = "id" : key }}
        </th>
        <th v-if="hasSlot('head')">
          <slot name="head"></slot>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr 
        v-for="(item, index) in items"
        :key="index">
        <td
          v-for="(value, key) in item"
          :key="key">
          <slot 
            :name="`cell-${key}`" 
            :index="index"
            :item="item"
            :key="key"
            :value="value">
          </slot>
        </td>
        <td v-if="hasSlot('body')">
          <slot 
            name="body" 
            :index="index"
            :item="item">
          </slot>
        </td>
      </tr>
    </tbody>

    <tfoot v-if="hasSlot('foot')">
      <slot name="foot"></slot>
    </tfoot>
  </table>
</template>

<script>

export default {
  name: "TableElt",
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  },
  
  methods: {
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  display: table;
  border-collapse: collapse;
  border-spacing: 10px;
  margin: 50px auto;
  width: auto;
  max-width: 100%;
  font-size: calc(var(--body-font-size) * 110 / 100);
  box-shadow: 5px 5px 10px 5px var(--grey);
}

caption {
  caption-side: top;
  margin: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: var(--black);
  text-shadow: 1px 1px 2px;
}

th {
  font-size: calc(var(--body-font-size) * 120 / 100);
  font-style: italic;
  background-color: var(--primary);
  color: var(--white);
}

th,
td {
  border: solid thin var(--black);
  border-radius: 0;
  padding: 2px;
  text-align: center;
  vertical-align: middle;
}

td {
  word-break: normal;
  cursor: cell;
}

tbody tr {
  &:nth-child(even) {
    background-color: var(--grey);
    color: var(--black);
  }

  &:nth-child(odd) {
    background-color: var(--white);
    color: var(--gray);
  }

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--secondary);
  }
}

@media (min-width: 768px) {
  table {
    max-width: 95%;
  }
}

@media (min-width: 992px) {
  table {
    max-width: 90%;
  }
}

@media (min-width: 1200px) {
  table {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  table {
    max-width: 70%;
  }
}
</style>
