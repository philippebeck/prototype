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
            Developers
            <i class="fa-solid fa-caret-up"></i>
            <i class="fa-solid fa-caret-down"></i>
          </label>
        </h3>
        <ul class="foot-goal1">
          <li>
            <a 
              href="https://animadio.org"
              title="Animadio CSS Framework">
              Animadio
            </a>
          </li>
          <li>
            <a 
              href="https://links2code.philippebeck.net"
              title="Des Liens pour Coder">
              Links2Code
            </a>
          </li>
          <li>
            <a 
              href="https://pam.philippebeck.net"
              title="PHP Adaptive Microframework">
              Pam
            </a>
          </li>
        </ul>
      </li>
      <li class="foot-target2">
        <h3>
          <label for="foot-websites">
            Websites
            <i class="fa-solid fa-caret-up"></i>
            <i class="fa-solid fa-caret-down"></i>
          </label>
        </h3>
        <ul class="foot-goal2">
          <li>
            <a 
              href="https://asperger.philippebeck.net"
              title="Tests pour le Syndrome d'Asperger">
              Asperger
            </a>
          </li>
          <li>
            <a 
              href="https://astronomy.philippebeck.net"
              title="NASA & CDS APIs">
              Astronomy
            </a>
          </li>
          <li>
            <a 
              href="https://philippebeck.net"
              title="Portail">
              Philippe Beck
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="row">
      <li>
        <a 
          class="btn-gh"
          href="https://github.com/philippebeck"
          title="Philippe Beck @GitHub">
          <i class="fa-brands fa-github fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="btn-tw"
          href="https://twitter.com/ph_beck"
          title="Philippe Beck @Twitter">
          <i class="fa-brands fa-twitter fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="btn-in"
          href="https://www.linkedin.com/in/philippebeck"
          title="Philippe Beck @LinkedIn">
          <i class="fa-brands fa-linkedin-in fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="btn"
          href="https://codepen.io/philippebeck"
          title="Philippe Beck @CodePen">
          <i class="fa-brands fa-codepen fa-fw"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: "FootElt"
  }
</script>

<style lang="scss" scoped>
.foot {
  --foot-text-align: center;
  --foot-title-margin: 10px;
  --foot-title-font-size: 2rem;
  --foot-title-color: var(--secondary);
  --foot-list-flex-direction: column;
  --foot-list-place-content: space-evenly;
  --foot-list-margin: 0;
  --foot-list-background-color: var(--primary);
  --foot-list-cursor: pointer;
  --foot-list-color: var(--white);
  --foot-list-hover-color: var(--secondary);
  --foot-target-margin-left: 2px;
  --foot-label-cursor: pointer;
  --foot-label-hover-color: var(--white);
  --foot-label-hover-transform: scale(1.2);
  --foot-label-hover-transition: transform 1s;
  --foot-visual-place-content: center;
  --foot-visual-margin: 0;
  --foot-visual-padding: 10px 0;
  --foot-visual-background-color: var(--white);
  --foot-visual-link-cursor: crosshair;

  text-align: var(--foot-text-align);

  h3,
  h4,
  h5,
  h6 {
    margin: var(--foot-title-margin);
    font-size: var(--foot-title-font-size);
    color: var(--foot-title-color);
  }

  label {
    cursor: var(--foot-label-cursor);
  }
}

.foot-list {
  display: flex;
  flex-direction: var(--foot-list-flex-direction);
  place-content: var(--foot-list-place-content);
  margin: var(--foot-list-margin);
  background-color: var(--foot-list-background-color);

  a {
    color: var(--foot-list-color);
    cursor: var(--foot-list-cursor);

    &:hover,
    &:focus {
      color: var(--foot-list-hover-color);
    }
  }
}

[class*="foot-target"] [class*="up"],
[class*="foot-target"] [class*="down"] {
  margin-left: var(--foot-target-margin-left);
}

[for*="foot"]:hover [class*="up"],
[for*="foot"]:focus [class*="up"],
[for*="foot"]:hover [class*="down"],
[for*="foot"]:focus [class*="down"] {
  transform: var(--foot-label-hover-transform);
  transition: var(--foot-label-hover-transition);
  color: var(--foot-label-hover-color);
}

.foot-visual {
  display: flex;
  place-content: var(--foot-visual-place-content);
  margin: var(--foot-visual-margin);
  padding: var(--foot-visual-padding);
  background-color: var(--foot-visual-background-color);

  a {
    cursor: var(--foot-visual-link-cursor);
  }
}

[class*="foot-goal"],
.foot [class*="up"],
.foot-check1:checked ~ .foot .foot-target1 [class*="down"],
.foot-check2:checked ~ .foot .foot-target2 [class*="down"],
.foot-check3:checked ~ .foot .foot-target3 [class*="down"],
.foot-check4:checked ~ .foot .foot-target4 [class*="down"],
.foot-check5:checked ~ .foot .foot-target5 [class*="down"] {
  display: none;
}

.foot-check1:checked ~ .foot .foot-target1 [class*="up"],
.foot-check2:checked ~ .foot .foot-target2 [class*="up"],
.foot-check3:checked ~ .foot .foot-target3 [class*="up"],
.foot-check4:checked ~ .foot .foot-target4 [class*="up"],
.foot-check5:checked ~ .foot .foot-target5 [class*="up"] {
  display: inline-block;
}

.foot-check1:checked ~ .foot .foot-goal1,
.foot-check2:checked ~ .foot .foot-goal2,
.foot-check3:checked ~ .foot .foot-goal3,
.foot-check4:checked ~ .foot .foot-goal4,
.foot-check5:checked ~ .foot .foot-goal5 {
  display: block;
}

@media (min-width: 768px) {
  .foot {
    --foot-list-flex-direction: row;
  }

  [class*="foot-goal"] {
    display: block;
  }

  [class*="foot-target"] [class*="up"],
  [class*="foot-target"] [class*="down"] {
    display: none;
  }
}
</style>
