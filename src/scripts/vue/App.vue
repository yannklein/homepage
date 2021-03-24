<template>
  <div class="main-content main-content-visible">
    <SideBar></SideBar>
    <div class="container">
      <div class="portfolio">
        <Card v-for="project in projects"
          :key="project.url"
          :type="project.type"
          :url="project.url"
          :img="project.img"
          :title="project.title"
          :description="project.description"
          :lang1="project.lang1"
          :lang2="project.lang2"
          :gif="project.gif"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import SideBar from './SideBar.vue'

export default {
  props: ['projects'],
  components: {
    Card,
    SideBar
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

  .portfolio .card-frame:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
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
