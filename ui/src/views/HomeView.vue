<template>
  <main>
    <NavElt/>

    <header>
      <a
        class="button-violet"
        href="/link">
        <h1>Links2Code</h1>
        <p>Des Liens pour Coder !</p>

        <figure class="flex mar-top-md">
          <i class="fa-brands fa-html5 fa-fw fa-2x"></i>
          <i class="fa-brands fa-css3 fa-fw fa-2x"></i>
          <i class="fa-brands fa-js fa-fw fa-2x"></i>
          <i class="fa-brands fa-php fa-fw fa-2x"></i>
          <i class="fa-brands fa-python fa-fw fa-2x"></i>
          <i class="fa-brands fa-git fa-fw fa-2x"></i>
          <i class="fa-brands fa-usb fa-fw fa-2x"></i>
        </figure>

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
