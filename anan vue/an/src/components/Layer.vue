<template>
  <div class="layer">
    <header>
      <h1 class="logo">
        王安安的想法
        <!-- <img src="" alt=""> -->
      </h1>
    </header>

    <main>
      <ul class="list">
        <li v-for="(nav,index) in navs" :key="nav.title">
          <a href="#" class="" :style="'background-color:'+nav.bgcolor+';'">{{ nav.title }}</a>
        </li>
      </ul>
    </main>

    <div class="middle">
      <ul>
        <li v-for="(nav,index) in myselfs" :key="nav.title">
          <span  :style="'background-color:'+nav.bgcolor+';'" @click="$emit(''+nav.click)">{{nav.title}}</span>
        </li>
      </ul>
    </div>

    <footer>
      <div class="login">
        <button type="button" name="button" @click="$emit('login')" >登录</button>
        <button type="button" name="button" class="on" @click="$emit('register')" >注册</button>
      </div>
    </footer>

  </div>
</template>

<script>
import {navs} from '@/data'
import {ans} from '@/data'
import {myselfs} from '@/data'

export default {
  name: 'layer',
  data () {
    return {
      msg: '王安安',
      navs:navs,
      ans:ans,
      myselfs,myselfs,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
  .layer{
    transition: .4s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: rgba(255, 255, 255, .98);
    font-weight: bold;
  }
  .logo{
    padding: 10px;
    text-align: center;
  }
  .list{
    box-sizing: border-box;
    margin: 0;
    padding: 9px;
    display: flex;
    flex-wrap: wrap;
  }
  .list li{
    padding: 0;
    list-style: none;
    flex-shrink: 1;
    flex-grow: 1;
    width: 30%;
    display: inline-block;
    text-align: center;
    padding: 1px;
    a{
      height:100%;
      width:100%;
      display: block;
      line-height: 60px;
      font-size: 14px;
      color:#fff;
      text-decoration: none;
      border-radius: 3px;
    }
  }
  .login{
    width:100%;
    position: absolute;
    bottom:0;
    left:0;
    button{
      width:50%;
      border: 0;
      padding: 0;
      float: left;
      background: #009688;
      color:#fff;
      line-height: 50px;
    }
    .on{
      background: #d9534f;
    }
  }

  .middle{
    width:100%;
    ul{
      margin: 0;
      padding: 9px;
    }
    li{
      list-style: none;
      flex-shrink: 1;
      flex-grow: 1;
      width: 50%;
      display: inline-block;
      text-align: center;
      padding: 1px;
      span{
        height:100%;
        width:100%;
        display: block;
        line-height: 60px;
        font-size: 14px;
        color:#fff;
        text-decoration: none;
        border-radius: 3px;
      }
    }
  }

</style>
