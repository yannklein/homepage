<template>
  <div>
    <div class="sidebar sidebar-left">
      <a href="#" class="icon icon-vr">
        <i class="fas fa-vr-cardboard"></i>
        <p class="icon-text">VR/AR</p>
      </a>
      <a href="#" class="icon icon-code">
        <i class="fas fa-laptop-code"></i>
        <p class="icon-text">I code</p>
      </a>
      <a href="#" class="icon icon-maker">
        <i class="fas fa-tools"></i>
        <p class="icon-text">I make</p>
      </a>
      <a href="#" class="icon icon-help">
        <i class="fas fa-hands-helping"></i>
        <p class="icon-text">I care</p>
      </a>
      <a href="#" class="icon icon-love">
        <i class="fas fa-heart"></i>
        <p class="icon-text">I love</p>
      </a>
    </div>
    <div class="sidebar sidebar-right">
      <a href="https://github.com/yannklein">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://twitter.com/yannlucklein">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/yann-klein/">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
  @import "../../styles/utils/mixins";

  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 10%;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    top: 50%;
    transform: translatey(-50%);
  }

  .sidebar a {
    display: inline-block;
    margin: 16px 0;
    text-decoration: none;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar-right {
    right: 0px;
  }

  .sidebar-right a{
    color: rgba(140, 140, 140, 0.4);
  }

  .sidebar-left {
    left: 0px;
  }

  .sidebar-left .icon {
    color: rgba(80, 80, 80, 0.4);
  }


  .sidebar-left .icon-text {
    font-size: 24px;
    display: none;
  }

  .sidebar-left .icon:hover .icon-text {
    display: block;
  }

  .sidebar-left .icon:hover i {
    display: none;
  }

  @include respond-to('wrapper') {
  }
  @include respond-to('desktop') {
    .sidebar a {
      font-size: 32px;
    }
    .sidebar-left .icon-text {
      font-size: 16px;
    }
  }
  @include respond-to('tablet') {
    .sidebar a {
      font-size: 24px;
    }
    .sidebar-left .icon-text {
      font-size: 8px;
    }
  }
  @include respond-to('mobile') {
    .sidebar-right {
      position: relative;
      flex-direction: row;
      width: 100%;
      transform: none;
      justify-content: space-evenly;
    }
    .sidebar-right a {
      color: #282828;
    }
    .sidebar-left {
      display: none;
    }
    .sidebar a {
      font-size: 40px;
    }
  }
</style>
