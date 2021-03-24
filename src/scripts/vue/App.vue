<template>
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
</template>

<script>
import Card from './Card.vue'

export default {
  props: ['projects'],
  components: {
    Card
  }
}
</script>

<style scoped>
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
