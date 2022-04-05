<template>
  <main>
    <NavElt/>

    <header class="head font-monospace">
      <p>
        Tools2Code propose des
        <strong>Ressources</strong>
        pour toute personne qui code ou qui apprend à coder !
      </p>
    </header>

    <section class="container-90tn">
      <h2>Ressources</h2>

      <ul class="flex anima-slideT-global">
        <li>
          <a 
            class="btn-red btn-lg" 
            href="/link#html" 
            title="Voir les Ressources HTML">
            <i class="fab fa-html5 fa-4x fa-fw"></i>
            <strong>HTML</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-blue btn-lg" 
            href="/link#css" 
            title="Voir les Ressources CSS">
            <i class="fab fa-css3-alt fa-4x fa-fw"></i>
            <strong>CSS</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-secondary btn-lg" 
            href="/link#js" 
            title="Voir les Ressources JavaScript">
            <i class="fab fa-js-square fa-4x fa-fw"></i>
            <strong>JS</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-primary btn-lg" 
            href="/link#php" 
            title="Voir les Ressources PHP">
            <i class="fab fa-php fa-4x fa-fw"></i>
            <strong>PHP</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-cyan btn-lg" 
            href="/link#sql" 
            title="Voir les Ressources SQL">
            <i class="fas fa-database fa-4x fa-fw"></i>
            <strong>SQL</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-gh btn-lg" 
            href="/link#git" 
            title="Voir les Ressources Git">
            <i class="fab fa-git-alt fa-4x fa-fw"></i>
            <strong>Git</strong>
          </a>
        </li>
        <li>
          <a 
            class="btn-violet btn-lg" 
            href="/link#media" 
            title="Voir les Ressources Media">
            <i class="fas fa-file-image fa-4x fa-fw"></i>
            <strong>Media</strong>
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Apprentissage</h2>

      <section>
        <h3>Francophone</h3>

        <ul>
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
        <h3>Anglophone</h3>

        <ul>
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
