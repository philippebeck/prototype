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
fieldset > * {
  --input-background-color: var(--grey-light);
  --input-border: medium outset var(--blue);
  --input-border-radius: 10px;
  --input-box-shadow: unset;
  --input-line-height: 1.8;
  --input-margin: 5px auto 10px;
  --input-outline: 0;
  --input-padding: 5px;
  --input-width: 70%;
  --field-box-sizing: border-box;
  --fieldset-place-content: end;
  --fieldset-place-items: center;
  --fieldset-border: none;
  --fieldset-display: flex;
  --fieldset-margin: 10px auto 20px;
  --fieldset-text-align: center;
  --fieldset-width: 100%;
  --label-color: var(--gray);
  --label-display: block;
  --label-font-size: 1.2rem;
  --label-margin: 5px auto 10px;
  --label-padding: 5px;
  --label-width: 30%;
  --legend-font-size: 0.8rem;
  --legend-font-style: italic;
  --legend-margin: 10px 0 0 var(--label-width);

  box-sizing: var(--field-box-sizing);
}

fieldset {
  display: var(--fieldset-display);
  place-items: var(--fieldset-place-items);
  place-content: var(--fieldset-place-content);
  margin: var(--fieldset-margin);
  border: var(--fieldset-border);
  width: var(--fieldset-width);
  text-align: var(--fieldset-text-align);
}

legend {
  margin: var(--legend-margin);
  width: var(--input-width);
  font-size: var(--legend-font-size);
  font-style: var(--legend-font-style);
}

label {
  display: var(--label-display);
  margin: var(--label-margin);
  padding: var(--label-padding);
  width: var(--label-width);
  font-size: var(--label-font-size);
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
  box-shadow: var(--input-box-shadow);
}

@media (min-width: 576px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 90%;
    --input-width: 70%;
    --label-width: 30%;
  }
}

@media (min-width: 768px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 80%;
    --input-width: 65%;
    --label-width: 35%;
  }
}

@media (min-width: 992px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 70%;
    --input-width: 60%;
    --label-width: 40%;
  }
}

@media (min-width: 1200px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 60%;
    --input-width: 55%;
    --label-width: 45%;
  }
}

@media (min-width: 1600px) {
  fieldset,
  fieldset > * {
    --fieldset-width: 50%;
    --input-width: 50%;
    --label-width: 50%;
  }
}
</style>
