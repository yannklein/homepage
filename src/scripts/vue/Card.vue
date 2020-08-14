<template>
  <div v-bind:class="'card-'+type+' '+isFirst" class="card">
    <a v-bind:href="url">
      <div class="header">
        <div class="card-title">
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
      <div class="card-media" v-bind:style="'background-image: url('+img+'.png)'">
        <video v-if="gif == 'true'" loop="" muted="muted" autoplay="" v-bind:src="img+'.webm'"></video>
      </div>
    </a>
  </div>
</template>

<script>

require.context('../../images', false, /\.(jpe?g|png|gif)$/);

const icons = {
  vr: 'fa-vr-cardboard',
  code: 'fa-laptop-code',
  help: 'fa-hands-helping',
  maker: 'fa-tools',
  love: 'fa-heart'
};

const langIcons = {
  rails: 'devicon-rails-plain-wordmark',
  python: 'devicon-python-plain',
  javascript: 'devicon-javascript-plain',
  react: 'devicon-react-original',
  ruby: 'devicon-ruby-plain'
};

module.exports = {
  props: ['type', 'url', 'img', 'title', 'description', 'lang1', 'lang2', 'lang3', 'gif', 'isFirst'],
  data: () => {
    return {
      icons: icons,
      langIcons: langIcons
    }
  }
}
</script>

<style scoped>
  .card {
    background-color: rgba(240,240,240,0.2);
    backdrop-filter: blur(4px);
    position: relative;
    padding: 24px;

    a {
      display: flex;
      flex-direction: column;
      color: rgb(40,40,40);
      height: 100%;

      .header {
        height: 104px;
        margin-bottom: 24px;

        .card-title {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          h2 {
            width: 90%;
            font-size: 20px;
            margin-bottom: 24px;
          }

          p {
            margin-bottom: 24px;
          }

          .icon {
            color: gray;
            font-size: 24px;
            display: flex;

            .lang {
              font-size: 20px;
              letter-spacing: 4px;
              display: flex;
              align-items: center;
              margin-right: 16px;
            }
          }
        }
      }
    }

    img {
      flex-grow: 1;
      width: 100%;
      box-shadow: 0 0 4px rgba(0,0,0,0.3);
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .card-media {
    position: relative;
    height: 280px;
    background-size: cover;
    video {
      position: absolute;
      z-index: 2;
      display: none;
      height: 100%;
      width: 100%;
    }
  }

  .card a:hover .card-media video {
    display: block;
  }

  .first {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  @media (max-width: 969px) {
    .card {
      padding: 16px;

      .header {
        height: 102px;

        h2 {
          font-size: 20px;
        }

        .icon {
          top: 16px;
          right: 16px;
        }
      }
    }
  }
  @media (max-width: 769px) {
    .card {
      padding: 8px;

      .header {
        height: 96px;

        h2 {
          font-size: 20px;
        }

        p {
          font-size: 16px;
        }

        .icon {
          top: 8px;
          right: 8px;
          font-size: 16px;

          .lang {
            font-size: 14px;
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>
