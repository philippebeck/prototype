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

  --red: rgb(227, 76, 38); /* HTML */
  --blue: rgb(38, 77, 228); /* CSS */
  --cyan: rgb(0, 117, 143); /* SQL */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1,
h2 {
  --title-color: var(--secondary);
}

.head {
  --head-border: thick solid var(--secondary);
  --head-color: var(--cyan);
}

.table {
  --table-even-background-color: var(--white);
  --table-odd-color: var(--black);
  --table-row-hover-color: var(--white);
}
</style>
