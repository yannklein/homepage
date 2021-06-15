<template>
  <div v-bind:class="'card-'+type+' card-frame visible'">
    <a v-bind:href="url" target="_blank">
      <div class="header">
        <div class="title">
          <h2>{{title}}</h2>
          <div class="icon">
            <div class="lang">
              <i v-bind:class="langIcons[lang1]"></i>
              <i v-if="lang2" v-bind:class="langIcons[lang2]"></i>
              <i v-if="lang3" v-bind:class="langIcons[lang3]"></i>
            </div>
            <i v-bind:class="'icon-'+type+' '+icons[type]" class="fas"></i>
          </div>
        </div>
        <p>{{description}}</p>
      </div>
      <div v-if="gif == 'true'">
        <div class="media" v-bind:style="clBackgroundImage('video/upload')">
          <video loop="" muted="muted" autoplay="" v-bind:src="'https://res.cloudinary.com/yanninthesky/video/upload/'+img+'.webm'"></video>
        </div>
      </div>
      <div v-else>
        <div class="media" v-bind:style="clBackgroundImage('image/upload/yannklein.me')">
        </div>
      </div>
    </a>
  </div>
</template>

<script>

  require.context('../../assets', false, /\.(jpe?g|png|gif)$/);

  const icons = {
    vr: 'fa-vr-cardboard',
    code: 'fa-laptop-code',
    help: 'fa-hands-helping',
    maker: 'fa-tools',
    love: 'fa-heart'
  };

  const langIcons = {
    rails: 'devicon-rails-plain',
    python: 'devicon-python-plain',
    javascript: 'devicon-javascript-plain',
    react: 'devicon-react-original',
    ruby: 'devicon-ruby-plain',
    vue: 'vuejs-icon',
    firebase: 'devicon-firebase-plain',
    svelte: 'svelte-icon'
  };

  module.exports = {
    props: ['type', 'url', 'img', 'title', 'description', 'lang1', 'lang2', 'lang3', 'gif'],
    data: () => {
      return {
        icons: icons,
        langIcons: langIcons
      }
    },
    methods: {
      isPad() {
        return (/iPad/i.test(navigator.userAgent));
      },
      clBackgroundImage(type) {
        return `background-image: url(https://res.cloudinary.com/yanninthesky/${type}/${this.img}${this.isPad() ? '.png' : '.webp'})`
      }
    }
  }
</script>

<style scoped>
  .svelte-icon {
    width: 1em;
    height: 1em;
    filter: grayscale(1);
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg');
  }
  
  .svelte-icon:before {
    content: "　";
  }

  .vuejs-icon {
    width: 1em;
    height: 1em;
    filter: grayscale(1);
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png');
  }
  .vuejs-icon:before {
    content: "　";
  }

  .card-frame {
    background-color: rgba(240,240,240,0.2);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: relative;
    padding: 24px;
  }

  a {
    display: flex;
    flex-direction: column;
    color: rgb(40,40,40);
    height: 100%;
  }

  .header {
    height: 104px;
    margin-bottom: 24px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title h2 {
    width: 90%;
    font-size: 20px;
    margin-bottom: 24px;
  }

  .title p {
    margin-bottom: 24px;
  }

  .icon {
    color: gray;
    font-size: 24px;
    display: flex;
  }

  .lang {
    font-size: 20px;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .media {
    position: relative;
    height: 320px;
    background-size: cover;
    background-position: 50% 50%;
  }

  video {
    position: absolute;
    z-index: 2;
    display: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  a:hover video {
    display: block;
  }

  @media (max-width: 969px) {
    .card-frame {
      padding: 16px;
    }

    .header {
      height: 102px;
    }

    .header  h2 {
      font-size: 20px;
    }

    .icon {
      top: 16px;
      right: 16px;
    }
  }

  @media (max-width: 769px) {
    .card-frame {
      padding: 8px;
    }

    .header {
      height: 96px;
    }

    .header h2 {
      font-size: 20px;
    }

    .header p {
      font-size: 16px;
    }

    .icon {
      top: 8px;
      right: 8px;
      font-size: 16px;
    }

    .lang {
      font-size: 14px;
      margin-right: 8px;
    }
  }
</style>
