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
      v-if="getFieldType() === 'number'"
      :id="id"
      :max="max"
      :min="min"
      :name="id"
      :step="step"
      :type="type"
      :value="value"
      @input="onInput">

    <input 
      v-else-if="getFieldType() === 'special'"
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      @input="onInput">

    <select
      v-else-if="getFieldType() === 'list'"
      :id="id"
      :name="id">
      <option
        v-for="(value, index) in list"
        :key="index"
        :value="value">
        {{ value }}
      </option>
    </select>

    <textarea
      v-else-if="getFieldType() === 'area'"
      :id="id"
      :name="id"
      :cols="cols"
      :maxlength="max"
      :minlength="min"
      :placeholder="info"
      :rows="rows"
      :value="value"
      @input="onInput"></textarea>

    <input 
      v-else
      :id="id"
      :maxlength="max"
      :minlength="min"
      :name="id"
      :placeholder="info"
      :type="type"
      :value="value"
      @input="onInput">
  </fieldset>
</template>

<script>
export default {
  name: "FieldElt",

  props: {
    model: {
      prop: "value",
      event: "update"
    },
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
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    
    onInput(event) {
      this.$emit('update:value', event.target.value)
    },

    getFieldType() {
      let fieldType = "";

      switch (this.type) {
        case "date":
        case "number":
        case "range":
        case "time":
          fieldType = "number";
          break;
        case "check":
        case "checkbox":
        case "color":
        case "radio":
          fieldType = "special";
          break;
        case "list":
        case "option":
        case "select":
          fieldType = "list";
          break;
        case "area":
        case "textarea":
          fieldType = "area";
          break;
        default:
          fieldType = "text";
      }

      return fieldType;
    }
  }
}
</script>

<style lang="scss" scoped>
fieldset,
legend,
label,
input,
select,
textarea {
  margin: 0;
  padding: 0;
}

fieldset {
  --fieldset-display: flex;
  --fieldset-align-items: center;
  --fieldset-border: none;
  --fieldset-text-align: center;

  display: var(--fieldset-display);
  align-items: var(--fieldset-align-items);
  border: var(--fieldset-border);
  text-align: var(--fieldset-text-align);
}

legend {
  --legend-font-size: 0.8rem;
  --legend-font-style: italic;
  --legend-margin: 10px auto 0;

  margin: var(--legend-margin);
  font-size: var(--legend-font-size);
  font-style: var(--legend-font-style);
}

label {
  --label-display: block;
  --label-font-size: 1.2rem;
  --label-width: 25vw;

  display: var(--label-display);
  width: var(--label-width);
  font-size: var(--label-font-size);
}

input,
select,
textarea {
  --field-width: 65vw;

  width: var(--field-width);
}

@media (min-width: 576px) {
  input,
  select,
  textarea {
    --field-width: 60%;
    --label-width: 26vw;
  }
}

@media (min-width: 768px) {
  input,
  select,
  textarea {
    --field-width: 55vw;
    --label-width: 27vw;
  }
}

@media (min-width: 992px) {
  input,
  select,
  textarea {
    --field-width: 50vw;
    --label-width: 28vw;
  }
}

@media (min-width: 1200px) {
  input,
  select,
  textarea {
    --field-width: 45vw;
    --label-width: 29vw;
  }
}

@media (min-width: 1600px) {
  input,
  select,
  textarea {
    --field-width: 40vw;
    --label-width: 30vw;
  }
}
</style>
