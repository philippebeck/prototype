<template>
  <header class="head">
    <h1>{{ title }}</h1>
    <strong>{{ text }}</strong>
  </header>
</template>

<script>
  export default {
    name: "Head",
    props: ["title", "text"]
  }
</script>

<style lang="scss" scoped>
  .head {
    --head-margin: 50px auto;
    --head-border: double thick var(--secondary);
    --head-border-radius: 20px;
    --head-padding: 20px;
    --head-max-width: 90%;
    --head-font-family: var(--serif);
    --head-font-size: 110%;
    --head-text-align: center;
    --head-box-shadow: inset 0 0 10px 2px var(--secondary);
    --head-background-color: var(--white);
    --head-color: var(--primary);
    --head-title-margin: 0 auto 5px;
    --head-title-text-transform: uppercase;
    --head-hover-transform: scale(1.1);
    --head-hover-transition: transform 2s 200ms;
    --head-selection-background-color: var(--black);
    --head-selection-color: var(--green);
    display: block;
    margin: var(--head-margin);
    border: var(--head-border);
    border-radius: var(--head-border-radius);
    padding: var(--head-padding);
    max-width: var(--head-max-width);
    font-family: var(--head-font-family);
    font-size: var(--head-font-size);
    text-align: var(--head-text-align);
    box-shadow: var(--head-box-shadow);
    background-color: var(--head-background-color);
    color: var(--head-color);
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6 {
      margin: var(--head-title-margin);
      text-transform: var(--head-title-text-transform);
    }
    &:hover,
    &:focus {
      transform: var(--head-hover-transform);
      transition: var(--head-hover-transition);
    }
    &::selection,
    & > *::selection {
      background-color: var(--head-selection-background-color);
      color: var(--head-selection-color);
    }
  }
  @media (min-width: 768px) {
    .head {
        --head-max-width: 80%;
        --head-font-size: 115%;
    }
  }
  @media (min-width: 992px) {
    .head {
        --head-max-width: 70%;
        --head-font-size: 120%;
    }
  }
  @media (min-width: 1200px) {
    .head {
        --head-max-width: 60%;
        --head-font-size: 125%;
    }
  }
  @media (min-width: 1600px) {
    .head {
        --head-max-width: 50%;
        --head-font-size: 130%;
    }
  }
</style>
