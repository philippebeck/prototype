<template>
  <main>
    <NavElt/>

    <header>
      <a
        class="button-violet"
        href="/link">
        <h1>Links2Code</h1>
        <p>Des Liens pour Coder !</p>
      </a>
    </header>

      <section>
        <h2>Fr</h2>

        <ul class="flex">
          <li>
            <a 
              class="button-blue button-lg" 
              href="https://openclassrooms.com/fr"
              title="Formations Diplômantes & Cours">
              OpenClassrooms
            </a>
          </li>
          <li>
            <a 
              class="button-blue button-lg" 
              href="https://developer.mozilla.org/fr/docs/Web/Tutorials"
              title="Tutoriels & Documentations">
              MDN
            </a>
          </li>
          <li>
            <a 
              class="button-blue button-lg" 
              href="https://grafikart.fr" 
              title="Formations & Tutoriels">
              Grafikart
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>En</h2>

        <ul class="flex">
          <li>
            <a 
              class="button-red button-lg" 
              href="https://web.dev" 
              title="Parcours & Articles">
              Web.dev
            </a>
          </li>
          <li>
            <a 
              class="button-red button-lg" 
              href="https://www.freecodecamp.org" 
              title="Exercices & Projets">
              Free Code Camp
            </a>
          </li>
          <li>
            <a 
              class="button-red button-lg" 
              href="https://www.sololearn.com" 
              title="Cours & Défis">
              SoloLearn
            </a>
          </li>
        </ul>
      </section>

    <FootElt/>
  </main>
</template>

<script>
import NavElt from '@/components/NavElt.vue';
import FootElt from '@/components/FootElt.vue';

export default {
  name: "HomeView",
  components: {
    NavElt,
    FootElt
  }
}
</script>
