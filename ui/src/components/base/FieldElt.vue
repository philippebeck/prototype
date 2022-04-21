<template>
  <fieldset :title="info">
    <legend v-if="hasSlot('legend')">
      <slot name="legend"></slot>
    </legend>

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

    <label 
      v-if="hasSlot('label')"
      :for="id">
      <slot name="label"></slot>
    </label>
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
fieldset > * {
  --input-background-color: var(--white);
  --input-border: medium outset var(--blue);
  --input-border-radius: 10px;
  --input-hover-background-color: var(--grey);
  --input-hover-border: medium inset var(--green);  
  --input-line-height: 1.8;
  --input-margin: auto;
  --input-outline: 0;
  --input-padding: 5px;
  --input-width: 100%;
  --field-box-sizing: border-box;
  --field-hover-label-visibility: visible;
  --fieldset-place-items: center;
  --fieldset-border: none;
  --fieldset-display: flex;
  --fieldset-margin: 5px auto 10px;
  --fieldset-padding: 10px;
  --fieldset-text-align: center;
  --fieldset-width: 100%;
  --label-color: var(--blue);
  --label-display: block;
  --label-font-size: 0.8rem;
  --label-font-style: italic;
  --label-margin: auto;
  --label-padding: 5px;
  --label-visibility: hidden;
  --label-width: 100%;
  --legend-color: var(--gray);
  --legend-font-size: 1.2rem;
  --legend-margin: auto;
  --legend-padding: 5px;
  --legend-width: 100%;

  box-sizing: var(--field-box-sizing);
}

fieldset {
  display: var(--fieldset-display);
  flex-wrap: wrap;
  place-items: var(--fieldset-place-items);
  margin: var(--fieldset-margin);
  border: var(--fieldset-border);
  padding: var(--fieldset-padding);
  width: var(--fieldset-width);
  text-align: var(--fieldset-text-align);
}

legend {
  margin: var(--legend-margin);
  padding: var(--legend-padding);
  width: var(--legend-width);
  font-size: var(--legend-font-size);
  color: var(--legend-color);
}

label {
  display: var(--label-display);
  margin: var(--label-margin);
  padding: var(--label-padding);
  width: var(--label-width);
  visibility: var(--label-visibility);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  color: var(--label-color);
}

input,
select,
textarea {
  margin: var(--input-margin);
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  outline: var(--input-outline);
  padding: var(--input-padding);
  width: var(--input-width);
  line-height: var(--input-line-height);
  background-color: var(--input-background-color);
}

input:hover,
input:focus,
select:hover,
select:focus,
textarea:hover,
textarea:focus {
  border: var(--input-hover-border);
  background-color: var(--input-hover-background-color);
}

input:hover + label,
input:focus + label,
select:hover + label,
select:focus + label,
textarea:hover + label,
textarea:focus + label {
  visibility: var(--field-hover-label-visibility);
}

@media (min-width: 576px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 75%;
  }
}

@media (min-width: 768px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 55%;
  }
}

@media (min-width: 992px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 40%;
  }
}

@media (min-width: 1200px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 30%;
  }
}

@media (min-width: 1600px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 25%;
  }
}
</style>
