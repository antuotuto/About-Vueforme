<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
      <button type="button" name="button" class="btn"  @click="toggleView">
        <i class="icon iconfont"  :class="{'icon-all':currentView == 'view-main','icon-close':currentView != 'view-main'}"></i>
      </button>
    </div>

    <div class="view-down" :class="{ active: currentView == 'view-down' }">
      <components v-bind:is="viewDownComponent"  @login="switchView( 'view-up','login')"  @register="switchView('view-up','register')"  @myself="switchView( 'view-up','myself')"  ></components>
    </div>

    <div class="view-up" :class="{ active: currentView == 'view-up' }">
      <component v-bind:is="viewUpComponent"></component>
    </div>

  </div>
</template>

<script>
import layer from '@/components/Layer'
import login from '@/pages/login'
import register from '@/pages/Register';
import myself from '@/pages/Myself';

export default {
  name: 'app',
  data(){
    return{
      currentView: 'view-main',
      viewDownComponent: 'layer',
      viewUpComponent: 'login',
      viewmyselfComponent: 'myself'
    }
  },
  methods: {
    toggleView: function() {
       if (this.currentView == 'view-main') {
         this.currentView = 'view-down'
         this.viewDownComponent = 'layer'
       } else {
         this.currentView = 'view-main'
       }
     },
     switchView: function(view, component) {
       this.currentView = view;
       this.viewUpComponent = component;
     }
   },
  components: {
    layer,
    login,
    register,
    myself,
  }

}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width:100%;
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none !important;
  }
  .main{
    height:100%;
    width:100%;
    overflow: scroll;
  }
  .btn{
      position: fixed;
      top: 30px;
      right: 15px;
      width: 40px;
      height: 40px;
      padding:0;
      border: 0;
      background: rgba(0, 0, 0,.7);
      border-radius: 3px;
      outline: none;
      font-weight: bold;
      font-size: 17px;
      z-index: 1000;
  }

  .iconfont{
      color: #fff;
      height:100%;
      width:100%;
      font-size: 20px;
  }

  .blank{
    display: none;
    height:100%;
    width:100%;
    background: rgba(0,0,0,.5);
    position: absolute;
    top:0;
    left:0;
    z-index: 1000;
  }
  .blank.active{
    display: block;
  }

  .me{
    height:100%;
    width:100%;
    background: rgba(0,0,0,.8);
    position: absolute;
    top:0;
    left:0;
    color:#fff;
    transform: translate(0, -100%);
    transition: .6s;
  }

  .me.active{
    transform: translate(0, 0);
  }

  .view-down{
    height:100%;
    width:100%;
    background: #fff;
    position: fixed;
    top:0;
    left:0;
    overflow: scroll;
    transition: .4s;
    transform: translate3d(100%, 0, 0);
    &.active{
      transform: translate3d(0, 0, 0);
    }
  }

  .view-up{
    height:100%;
    width:100%;
    background: #fff;
    position: fixed;
    top:0;
    left:0;
    transition: .4s;
    overflow: scroll;
    transform: translate3d(-100%, 0, 0);
    &.active{
      transform: translate3d(0, 0, 0);
    }
  }


</style>
