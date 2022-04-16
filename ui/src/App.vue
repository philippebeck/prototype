<template>
  <nav>
    <router-link to="/"></router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
:root {
  --sans-serif: 'Geo', sans-serif;
  --serif: 'Rozha One', serif;
  --monospace: 'Syne Mono', monospace;

  --primary: rgb(119, 123, 179); /* PHP */
  --primary-dark: rgba(119, 123, 179, var(--opacity-dark));
  --primary-light: rgba(119, 123, 179, var(--opacity-light));
  --secondary: rgb(50, 51, 48); /* JS */
  --secondary-dark: rgba(50, 51, 48, var(--opacity-dark));
  --secondary-light: rgba(50, 51, 48, var(--opacity-light));
}
</style>
