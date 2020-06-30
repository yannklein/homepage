<template>
  <div v-bind:class="'card-'+type+' '+isFirst" class="card">
    <a v-bind:href="url">
      <div class="card-header">
        <div class="card-title">
          <h2>{{title}}</h2>
          <div class="icon">
            <div class="icon-lang">
              <i v-bind:class="langIcons[lang1]"></i>
              <i v-if="lang2" v-bind:class="langIcons[lang2]"></i>
              <i v-if="lang3" v-bind:class="langIcons[lang3]"></i>
            </div>
            <i v-bind:class="'icon-'+type+' '+icons[type]" class="fas"></i>
          </div>
        </div>
        <p>{{description}}</p>
      </div>
      <img v-if="gif == 'true'" class="card-img-fix" v-bind:src="img" alt="project preview">
      <img v-if="gif == 'true'" class="card-img-gif" v-bind:src="img" alt="project preview">
      <img v-else class="card-img" v-bind:src="img" alt="project preview">
    </a>
  </div>
</template>

<script>

// require.context('../../images', false, /\.(jpe?g|png|gif)$/);

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

<style>
.card {
  background-color: rgba(240,240,240,0.2);
  backdrop-filter: blur(4px);
  position: relative;
  padding: 24px;
}

.card a {
  display: flex;
  flex-direction: column;
  color: rgb(40,40,40);
  height: 100%;
}

.card-header {
  height: 104px;
  margin-bottom: 24px;
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card .icon {
  color: gray;
  font-size: 24px;
  display: flex;
}

.card .icon-lang {
  font-size: 20px;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  margin-right: 16px;
}


.card-title h2 {
  width: 90%;
  font-size: 20px;
  margin-bottom: 24px;
}

.card-title p {
  margin-bottom: 24px;
}

.card img {
  flex-grow: 1;
  width: 100%;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  object-fit: cover;
  object-position: 50% 50%;
}

.card-img-gif {
  display: none;
}

.card a:hover .card-img-fix {
  display: none;
}

.card a:hover .card-img-gif {
  display: block;
}

@media (max-width: 1170px) {
}
@media (max-width: 969px) {
  .card {
    padding: 16px;
  }
  .card-header {
    height: 102px;
  }
  .card-header h2 {
    font-size: 20px;
  }
  .card .icon {
    top: 16px;
    right: 16px;
  }
}
@media (max-width: 769px) {
  .card {
    padding: 8px;
  }
  .card-header {
    height: 96px;
  }
  .card-header h2 {
    font-size: 16px;
  }
  .card-header p {
    font-size: 12px;
  }
  .card .icon {
    top: 8px;
    right: 8px;
  }

  .card .icon {
    font-size: 16px;
  }
  .card .icon-lang {
    font-size: 14px;
    margin-right: 8px;
  }
}
@media (max-width: 480px) {
}
</style>
