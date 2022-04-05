<template>
  <nav class="navbar">
    <input 
      id="navbar-close" 
      class="navbar-close" 
      type="radio" 
      name="navbar" 
      checked>
    <input 
      id="navbar-open" 
      class="navbar-open" 
      type="radio" 
      name="navbar">

    <a 
      class="anima-slideB-this" 
      href="/" 
      title="Accueil">
      <img 
        src="logo.svg" 
        alt="Logo Phi" 
        width="30" 
        height="30">
    </a>

    <ul>
      <li>
        <a 
          href="/resource#html" 
          title="Voir les Ressources HTML">
          <i class="fab fa-html5 fa-fw"></i>
          <strong>HTML</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#css" 
          title="Voir les Ressources CSS">
          <i class="fab fa-css3-alt fa-fw"></i>
          <strong>CSS</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#js" 
          title="Voir les Ressources JavaScript">
          <i class="fab fa-js-square fa-fw"></i>
          <strong>JS</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#php" 
          title="Voir les Ressources PHP">
          <i class="fab fa-php fa-fw"></i>
          <strong>PHP</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#sql" 
          title="Voir les Ressources SQL">
          <i class="fas fa-database fa-fw"></i>
          <strong>SQL</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#git" 
          title="Voir les Ressources Git">
          <i class="fab fa-git-alt fa-fw"></i>
          <strong>Git</strong>
        </a>
      </li>
      <li>
        <a 
          href="/resource#media" 
          title="Voir les Ressources Media">
          <i class="fas fa-file-image fa-fw"></i>
          <strong>Media</strong>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a 
          class="onto-color-blue" 
          href="/contact" 
          title="Contact">
          <i class="fas fa-at fa-lg fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="onto-color-cyan" 
          href="https://paypal.me/philippebeck" 
          title="Go to the Donation Page">
          <i class="fab fa-paypal fa-lg fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="onto-color-pink" 
          href="https://github.com/sponsors/philippebeck" 
          title="Go to the Sponsor Page">
          <i class="far fa-heart fa-lg fa-fw"></i>
        </a>
      </li>
      <li>
        <a 
          class="onto-color-red" 
          href="/login" 
          title="Go to the Login Page">
          <i class="fas fa-sign-in-alt fa-lg fa-fw"></i>
        </a>
      </li>
    </ul>

    <label 
      for="navbar-close" 
      title="Close the Navigation Menu">
      <i class="fas fa-angle-double-up fa-lg"></i>
    </label>
    <label 
      for="navbar-open" 
      title="Open the Navigation Menu">
      <i class="fas fa-angle-double-down fa-lg"></i>
    </label>
  </nav>
</template>

<script>
export default {
  name: "NavElt"
}
</script>

<style lang="scss" scoped>
:root {
  --navbar-height: 80px;
}
.navbar {
  --navbar-place-content: center;
  --navbar-place-items: center;
  --navbar-position: fixed;
  --navbar-top: 0;
  --navbar-right: 0;
  --navbar-bottom: unset;
  --navbar-left: 0;
  --navbar-z-index: 1000;
  --navbar-background-color: var(--primary-dark);
  --navbar-color: var(--white);
  --navbar-link-padding: 20px 10px;
  --navbar-link-color: var(--white);
  --navbar-link-cursor: pointer;
  --navbar-icon-place-self: center;
  --navbar-list-place-items: center;
  --navbar-list-margin: 0;
  --navbar-list-padding: 0;
  --navbar-list-list-style: none;
  --navbar-list-link-flex-direction: column;
  --navbar-link-hover-color: var(--secondary);
  --navbar-first-list-link-hover-scale: 0.9;
  --navbar-last-list-img-margin: 5px;
  --navbar-last-list-height: 50px;
  --navbar-last-list-link-hover-scale: 1.5;
  --navbar-brand-link-left: 0;
  --navbar-brand-link-img-height: 40px;
  --navbar-label-right: 10px;
  --navbar-label-hover-color: var(--secondary);
  --navbar-first-list-span-font-size: 2rem;
  --navbar-first-list-span-text-align: center;

  place-content: var(--navbar-place-content);
  place-items: var(--navbar-place-items);
  position: var(--navbar-position);
  top: var(--navbar-top);
  right: var(--navbar-right);
  bottom: var(--navbar-bottom);
  left: var(--navbar-left);
  z-index: var(--navbar-z-index);
  height: var(--navbar-height);
  background-color: var(--navbar-background-color);
  color: var(--navbar-color);

  &,
  & > ul:first-of-type a,
  & > ul:first-of-type label,
  & > ul:last-of-type a,
  & > ul:last-of-type label {
    display: flex;
  }

  & > ul:first-of-type span,
  & > ul:last-of-type span {
    display: none;
  }

  a,
  label {
    padding: var(--navbar-link-padding);
    color: var(--navbar-link-color);
    cursor: var(--navbar-link-cursor);
  }

  i {
    place-self: var(--navbar-icon-place-self);
  }

  & + * {
    margin-top: var(--navbar-height);
  }

  & > ul {
    place-items: var(--navbar-list-place-items);
    margin: var(--navbar-list-margin);
    padding: var(--navbar-list-padding);
    list-style: var(--navbar-list-list-style);

    a,
    label {
      flex-direction: var(--navbar-list-link-flex-direction);
    }

    &:first-of-type {
      a:hover,
      a:focus,
      label:hover,
      label:focus {
        color: var(--navbar-link-hover-color);
        transform: scale(var(--navbar-first-list-link-hover-scale));
      }
    }

    &:last-of-type {
      img,
      svg {
        margin: var(--navbar-last-list-img-margin);
        height: var(--navbar-last-list-height);
      }

      a:hover,
      a:focus,
      label:hover,
      label:focus {
        transform: scale(var(--navbar-last-list-link-hover-scale));
      }
    }
  }

  & > input + a:first-of-type,
  & > input + label:first-of-type {
    position: absolute;
    left: var(--navbar-brand-link-left);
  }

  & > a:first-of-type img,
  & > a:first-of-type svg {
    height: var(--navbar-brand-link-img-height);
  }

  & > [for*="navbar"] {
    position: absolute;
    right: var(--navbar-label-right);
    &:hover,
    &:focus {
      color: var(--navbar-label-hover-color);
    }
  }

  &-close:checked ~ ul:first-of-type,
  &-open:checked ~ ul:last-of-type {
    display: flex;
  }

  &-close,
  &-open,
  &-open:checked ~ ul:first-of-type,
  &-close:checked ~ ul:last-of-type,
  &-close:checked ~ [for="navbar-close"],
  &-open:checked ~ [for="navbar-open"] {
    display: none;
  }
}

@media (min-width: 576px) {
  .navbar {
    --navbar-flex-direction: row;
    --navbar-place-content: space-around;
    --navbar-padding: 10px;
  }
}

@media (min-width: 768px) {
  .navbar {
    --navbar-place-content: space-evenly;
    & > ul {
      display: flex !important;
    }
    & > input + a:first-of-type,
    & > input + label:first-of-type {
      position: static;
    }
    & > [for*="navbar"] {
      display: none;
    }
  }
}

@media (min-width: 992px) {
  .navbar > ul:first-of-type span {
    display: inline;
    font-size: var(--navbar-first-list-span-font-size);
    text-align: var(--navbar-first-list-span-text-align);
  }
}
</style>
