<template>
  <footer class="foot">
    <input 
      id="foot-developers" 
      class="foot-check1" 
      type="checkbox">
    <input 
      id="foot-websites" 
      class="foot-check2" 
      type="checkbox">

    <ul class="foot-list">
      <li class="foot-target1">
        <h3>
          <label for="foot-developers">
            {{ first }}
            <i class="fa-solid fa-caret-up"></i>
            <i class="fa-solid fa-caret-down"></i>
          </label>
        </h3>
        <slot name="first" class="foot-goal1"></slot>
      </li>

      <li class="foot-target2">
        <h3>
          <label for="foot-websites">
            {{ second }}
            <i class="fa-solid fa-caret-up"></i>
            <i class="fa-solid fa-caret-down"></i>
          </label>
        </h3>
        <slot name="second" class="foot-goal2"></slot>
      </li>
    </ul>
    
    <slot name="main" class="foot-visual"></slot>
  </footer>
</template>

<script>
  export default {
    name: "FootElt",
    props: {
      first: {
        type: String,
        default: "Developers"
      },
      second: {
        type: String,
        default: "Websites"
      }
    }
  }
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
}

ol {
  display: flex;
  flex-direction: column;
  place-content: space-evenly;
  padding: 10px 0;
  background-color: var(--primary);

  li {
    list-style-type: none;
  }

  :slotted(a) {
    font-size: 1.5rem;
    color: var(--white);

    &:hover,
    &:focus {
      color: var(--secondary);
    }
  }
}

h3 {
  margin: 0;
  font-size: 2rem;
  color: var(--grey);
}

footer > :deep(ul) {
  display: flex;
  flex-direction: row;
  place-content: center;
}

@media screen and (min-width: 768px) {
  ol {
    flex-direction: row;
  }
}
</style>
