<template>
  <form class="form">
    <fieldset>
      <legend>Login Example</legend>
      <ul>
        <li>
          <label for="email">
            Email
          </label>
          <input 
            id="email" 
            type="email" 
            placeholder="me@mail.com">
        </li>
        <li>
          <label for="password">
            Password
          </label>
          <input 
            id="password" 
            type="password" 
            placeholder="********">
        </li>
      </ul>
      <ul>
        <li>
          <input 
            type="reset" 
            value="Cancel">
          <input 
            type="submit" 
            value="Send">
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "FormElt"
}
</script>

<style lang="scss" scoped>
.form {
  --form-margin: 20px auto;
  --form-border: thick outset var(--secondary);
  --form-border-radius: 5px;
  --form-padding: 20px;
  --form-width: 90%;
  --form-background-color: var(--white);
  --form-box-shadow: unset;

  --form-fieldset-border: 0;

  --form-legend-margin: auto;
  --form-legend-font-size: 2.5rem;
  --form-legend-font-weight: bold;

  --form-list-flex-direction: column;
  --form-list-place-content: center;
  --form-list-place-items: baseline;

  --form-label-margin: auto;
  --form-label-padding: 5px;
  --form-label-font-size: 150%;
  --form-label-color: var(--gray);
  --form-label-text-decoration: none;

  --form-field-margin: 10px 0 20px;
  --form-field-border: medium outset var(--secondary);
  --form-field-border-radius: 10px;
  --form-field-outline: 0;
  --form-field-padding: 5px;
  --form-field-width: 100%;
  --form-field-line-height: 1.8;
  --form-field-background-color: var(--grey-light);
  --form-field-box-shadow: unset;

  --form-field-hover-border: medium inset var(--green);
  --form-field-hover-box-shadow: inset 0 0 5px 2px var(--gray);

  --form-field-placeholder-font-style: italic;
  --form-field-placeholder-color: var(--primary);

  --form-action-margin: 10px auto;
  --form-action-width: 80%;
  --form-action-font-size: 110%;
  --form-action-font-weight: bold;
  --form-action-line-height: 2;
  --form-action-shadows: inset 0 0 5px 2px;
  --form-action-cursor: pointer;

  --form-action-hover-shadows: inset 0 0 10px 10px;
  --form-action-hover-transform: scale(1.1);
  --form-action-hover-transition: all 1s;

  --form-reset-border: medium inset var(--red);
  --form-reset-box-shadow: var(--form-action-shadows) var(--red);
  --form-reset-background-color: var(--white);
  --form-reset-color: var(--red);

  --form-reset-hover-border: medium outset var(--red);
  --form-reset-hover-box-shadow: var(--form-action-hover-shadows) var(--white);
  --form-reset-hover-background-color: var(--red);
  --form-reset-hover-color: var(--white);

  --form-submit-border: medium inset var(--green);
  --form-submit-box-shadow: var(--form-action-shadows) var(--green);
  --form-submit-background-color: var(--white);
  --form-submit-color: var(--green);

  --form-submit-hover-border: medium outset var(--green);
  --form-submit-hover-box-shadow: var(--form-action-hover-shadows) var(--white);
  --form-submit-hover-background-color: var(--green);
  --form-submit-hover-color: var(--white);
}

@media (min-width: $breakpoint-sm) {
  .form {
    --form-width: 80%;
    --form-action-width: 60%;
  }
}

@media (min-width: $breakpoint-md) {
  .form {
    --form-width: 75%;
    --form-fieldset-margin-left: 0;
    --form-list-flex-direction: row;
    --form-list-place-content: space-around;
    --form-list-place-items: center;
    --form-field-width: 50%;
    --form-action-width: 30%;
  }
}

@media (min-width: $breakpoint-lg) {
  .form {
    --form-width: 70%;
  }
}

@media (min-width: $breakpoint-xl) {
  .form {
    --form-width: 65%;
  }
}

@media (min-width: $breakpoint-wd) {
  .form {
    --form-width: 60%;
  }
}

.form {
  margin: var(--form-margin);
  border: var(--form-border);
  border-radius: var(--form-border-radius);
  padding: var(--form-padding);
  width: var(--form-width);
  background-color: var(--form-background-color);
  box-shadow: var(--form-box-shadow);

  fieldset {
    border: var(--form-fieldset-border);
  }

  legend {
    margin: var(--form-legend-margin);
    font-size: var(--form-legend-font-size);
    font-weight: var(--form-legend-font-weight);
  }

  li {
    display: flex;
    flex-direction: var(--form-list-flex-direction);
    place-content: var(--form-list-place-content);
    place-items: var(--form-list-place-items);
  }

  label {
    margin: var(--form-label-margin);
    padding: var(--form-label-padding);
    font-size: var(--form-label-font-size);
    color: var(--form-label-color);
    text-decoration: var(--form-label-text-decoration);
  }

  input,
  select,
  textarea {
    margin: var(--form-field-margin);
    border: var(--form-field-border);
    border-radius: var(--form-field-border-radius);
    outline: var(--form-field-outline);
    padding: var(--form-field-padding);
    width: var(--form-field-width);
    line-height: var(--form-field-line-height);
    background-color: var(--form-field-background-color);
    box-shadow: var(--form-field-box-shadow);

    &:hover,
    &:focus {
      border: var(--form-field-hover-border);
      box-shadow: var(--form-field-hover-box-shadow);
    }

    &::placeholder {
      font-style: var(--form-field-placeholder-font-style);
      color: var(--form-field-placeholder-color);
    }
  }

  [type="reset"],
  [type="submit"] {
    margin: var(--form-action-margin);
    width: var(--form-action-width);
    font-size: var(--form-action-font-size);
    font-weight: var(--form-action-font-weight);
    line-height: var(--form-action-line-height);
    cursor: var(--form-action-cursor);

    &:hover,
    &:focus {
      transform: var(--form-action-hover-transform);
      transition: var(--form-action-hover-transition);
    }
  }

  [type="reset"] {
    border: var(--form-reset-border);
    box-shadow: var(--form-reset-box-shadow);
    background-color: var(--form-reset-background-color);
    color: var(--form-reset-color);

    &:hover,
    &:focus {
      border: var(--form-reset-hover-border);
      box-shadow: var(--form-reset-hover-box-shadow);
      background-color: var(--form-reset-hover-background-color);
      color: var(--form-reset-hover-color);
    }
  }

  [type="submit"] {
    border: var(--form-submit-border);
    box-shadow: var(--form-submit-box-shadow);
    background-color: var(--form-submit-background-color);
    color: var(--form-submit-color);

    &:hover,
    &:focus {
      border: var(--form-submit-hover-border);
      box-shadow: var(--form-submit-hover-box-shadow);
      background-color: var(--form-submit-hover-background-color);
      color: var(--form-submit-hover-color);
    }
  }
}
</style>