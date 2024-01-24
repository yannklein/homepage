<template>
  <div class="main-content main-content-visible">
    <SideBar></SideBar>
    <div class="container">
      <Intro></Intro>
      <div class="portfolio">
        <Card v-for="project in projects" :key="project.url" v-bind="project"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import SideBar from './SideBar.vue'
import Intro from './Intro.vue'

export default {
  props: ['projects'],
  components: {
    Card,
    SideBar,
    Intro
  }
}
</script>

<style scoped>
  @import "../../styles/utils/mixins";

  .portfolio {
    padding: 24px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 24px;
  }

  .portfolio::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .card-frame.visible {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .card-frame.visible ~ .card-frame.visible {
    grid-row: unset;
    grid-column: unset;
  }

  .container {
    width: 80%;
    margin: 0 auto;
  }

  @include respond-to('mobile') {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 1100px) {
    .portfolio {
      grid-template-columns: 1fr 1fr;
      padding: 32px 0;
    }
  }

  @media (max-width: 600px){
    .portfolio {
      grid-template-columns: 1fr;
    }
  }
</style>
