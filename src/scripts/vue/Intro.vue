<template>
  <div class="intro-card-frame">
    <div class="intro-card" v-html="formattedIntro"></div>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it'

  export default {
    data() {
      return {
        introText: ""
      }
    },
    computed: {
      formattedIntro() {
        const md = new MarkdownIt();
        return md.render(this.introText);
      }
    },
    created() {
      const url = "https://raw.githubusercontent.com/yannklein/yannklein/master/readme.md"
      fetch(url)
        .then(response => response.text())
        .then((data) => {
          console.log(data)
          this.introText = data
      })
    }
  }
</script>

<style lang="scss">
  .intro-card {
    h1 {
      text-align: center;
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
    }
  }
</style>

<style lang="scss" scoped>
  .intro-card {
    padding: 80px 16%;
    background-color: rgba(240, 240, 240, 0.3);
    backdrop-filter: blur(8px);
    line-height: 1.5em;
    text-align: justify;
  }
  .intro-card-frame {
    padding-top: 24px;
  }
  @media (max-width: 600px) {
    .intro-card {
      padding: 80px 16px;
    }
  }
</style>