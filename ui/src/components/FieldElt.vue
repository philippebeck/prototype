<template>
  <fieldset :title="info">
    <legend v-if="hasSlot('legend')">
      <slot name="legend"></slot>
    </legend>

    <label 
      v-if="hasSlot('label')"
      :for="id">
      <slot name="label"></slot>
    </label>

    <input 
      v-if="getFieldType() === 'text'"
      :id="id"
      :maxlength="max"
      :minlength="min"
      :name="id"
      :placeholder="info"
      :type="type"
      :value="value">

    <input 
      v-if="getFieldType() === 'number'"
      :id="id"
      :max="max"
      :min="min"
      :name="id"
      :step="step"
      :type="type"
      :value="value">

    <input 
      v-if="getFieldType() === 'special'"
      :id="id"
      :name="name"
      :type="type"
      :value="value">

    <select
      v-if="getFieldType() === 'list'"
      :id="id"
      :name="id">
      <option
        v-for="(item, index) in list"
        :key="index"
        :value="item">
        {{ item }}
      </option>
    </select>

    <textarea
      v-if="getFieldType() === 'area'"
      :id="id"
      :name="id"
      :cols="cols"
      :maxlength="max"
      :minlength="min"
      :placeholder="info"
      :rows="rows"></textarea>
  </fieldset>
</template>

<script>
export default {
  name: "FieldElt",

  props: {
    list: {
      type: Array,
      default: null
    },

    id: {
      type: String,
      required: true
    },
    info: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: null
    },

    cols: {
      type: Number,
      default: 20
    },
    max: {
      type: Number,
      default: 50
    },
    min: {
      type: Number,
      default: 2
    },
    rows: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    }
  },

  methods: {
    getFieldType() {
      let fieldType = "";

      switch (this.type) {
        case "date":
        case "number":
        case "range":
        case "time":
          fieldType = "number";
          break;
        case "checkbox":
        case "color":
        case "radio":
          fieldType = "special";
          break;
        case "option":
        case "select":
          fieldType = "list";
          break;
        case "textarea":
          fieldType = "area";
          break;
        default:
          fieldType = "text";
      }

      return fieldType;
    },

    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
}
</script>

<style lang="scss" scoped>
fieldset {
  --fieldset-border: none;
  --fieldset-text-align: center;
  --label-font-size: 2rem;
  --legend-font-size: calc(var(--label-font-size) * 1.5);
  --legend-font-weight: bold;
  --legend-margin: auto;

  border: var(--fieldset-border);
  text-align: var(--fieldset-text-align);
}

legend {
  margin: var(--legend-margin);
  font-size: var(--legend-font-size);
  font-weight: var(--legend-font-weight);
}

label {
  font-size: var(--label-font-size);
}
</style>
