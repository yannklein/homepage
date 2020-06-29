import Vue from 'vue';

const initCardComponent = () => {
  const icons = {
    vr: 'fa-vr-cardboard',
    code: 'fa-laptop-code',
    help: 'fa-hands-helping',
    maker: 'fa-tools',
    love: 'fa-heart'
  };

  Vue.component('vueCard', {
    props: ['type', 'url', 'img', 'title', 'description', 'lang1', 'lang2', 'lang3'],
    data: () => {
      return {
        icons: icons
      };
    },
    template: `
      <div v-bind:class="'card-'+type" class="card card-first">
        <a v-bind:href="url">
          <div class="card-header">
            <div class="card-title">
              <h2>{{title}}</h2>
              <div class="icon">
                <div class="icon-lang">
                  <i v-bind:class="lang1"></i>
                </div>
                <i v-bind:class="'icon-'+type+' '+icons[type]" class="fas"></i>
              </div>
            </div>
            <p>{{description}}</p>

          </div>
          <img class="card-img" v-bind:src="img" alt="project preview">
        </a>
      </div>
    `
  });
};

export default initCardComponent;
