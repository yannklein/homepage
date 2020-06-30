import Vue from 'vue';

const initCardComponent = () => {
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

  Vue.component('vueCard', {
    props: ['type', 'url', 'img', 'title', 'description', 'lang1', 'lang2', 'lang3', 'gif', 'isFirst'],
    data: () => {
      return {
        icons: icons,
        langIcons: langIcons
      };
    },
    template: `
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
    `
  });
};

export default initCardComponent;
