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
[class*="check"],
[class*="radio"] {
  display: none;
}

footer {
  text-align: center;

  h3 {
    margin: 10px;
    font-size: 2rem;
    color: var(--secondary);
  }

  label {
    cursor: pointer;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    place-content: space-evenly;
    margin: 0;
    background-color: var(--primary);

    a {
      color: var(--white);
      cursor: pointer;

      &:hover,
      &:focus {
        color: var(--secondary);
      }
    }
  }
}

[class*="foot-target"] [class*="up"],
[class*="foot-target"] [class*="down"] {
  margin-left: 2px;
}

[for*="foot"]:hover [class*="up"],
[for*="foot"]:focus [class*="up"],
[for*="foot"]:hover [class*="down"],
[for*="foot"]:focus [class*="down"] {
  transform: scale(1.2);
  transition: transform 1s;
  color: var(--white);
}

.foot-visual {
  display: flex;
  place-content: center;
  margin: 0;
  padding: 10px 0;
  background-color: var(--white);

  a {
    cursor: crosshair;
  }
}

[class*="foot-goal"],
.foot [class*="up"],
.foot-check1:checked ~ .foot-list .foot-target1 [class*="down"],
.foot-check2:checked ~ .foot-list .foot-target2 [class*="down"] {
  display: none;
}

.foot-check1:checked ~ .foot-list .foot-target1 [class*="up"],
.foot-check2:checked ~ .foot-list .foot-target2 [class*="up"] {
  display: inline-block;
}

.foot-check1:checked ~ .foot-list .foot-goal1,
.foot-check2:checked ~ .foot-list .foot-goal2 {
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
