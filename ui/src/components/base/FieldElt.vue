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
      :name="id"
      @input="onInput">
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
  box-sizing: border-box;
}

fieldset {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  margin: auto;
  border: none;
  padding: 10px;
  width: 90vw;
  text-align: center;
  
  & > * {
    margin: 0;
  }
}

legend {
  padding: 5px;
  width: 100%;
  font-size: 1.2rem;
  color: var(--gray);
}

label {
  padding: 5px;
  width: 100%;
  visibility: hidden;
  font-size: 0.8rem;
  font-style: italic;
  color: var(--cyan);
}

input,
select,
textarea {
  border: medium outset var(--blue);
  border-radius: 10px;
  outline: none;
  padding: 5px;
  width: 100%;
  line-height: 1.8;
  background-color: var(--white);
}

fieldset:hover legend,
legend:hover {
  color: var(--black);
}

fieldset:hover > input,
fieldset:hover > select,
fieldset:hover > textarea,
input:focus,
select:focus,
textarea:focus {
  border: medium inset var(--green);
  border-radius: 0;
  background-color: var(--grey);
  transition: all 1s;
}

fieldset:hover > label,
input:focus + label,
select:focus + label,
textarea:focus + label {
  visibility: visible;
  transform: scale(1.1);
  transition: all 1s;
}

@media (min-width: 576px) {
  fieldset,
  fieldset > * {
    width: 50vw;
  }
}

@media (min-width: 768px) {
  fieldset,
  fieldset > * {
    width: 40vw;
  }
}

@media (min-width: 992px) {
  fieldset,
  fieldset > * {
    width: 30vw;
  }
}

@media (min-width: 1200px) {
  fieldset,
  fieldset > * {
    width: 20vw;
  }
}

@media (min-width: 1600px) {
  fieldset,
  fieldset > * {
    width: 10vw;
  }
}
</style>
