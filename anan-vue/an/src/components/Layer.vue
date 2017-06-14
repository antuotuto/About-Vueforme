<template>
  <div class="layer">
    <header>
      <p class="logo" @click="$emit('linkTo')">
        <router-link to="/">
          王安安的介绍页
        </router-link>
      </p>
    </header>
    <main>
      <ul class="list">
        <li v-for="(nav,index) in navs" :key="nav.title" @click="$emit('linkTo')" >
          <router-link :to="nav.router">
            <i class="icon iconfont"  :class="nav.icon"></i>
            {{ nav.title }}
          </router-link>
        </li>
      </ul>
    </main>
    <footer>
      <div class="login">
        <button type="button" name="button" @click="$emit('login')">登录</button>
        <button type="button" name="button" class="on" @click="$emit('register')">注册</button>
      </div>
    </footer>
  </div>
</template>

<script>
  import {
    navs
  } from '@/data'
  import {
    ans
  } from '@/data'

  export default {
    name: 'layer',
    data() {
      return {
        msg: '王安安',
        navs: navs,
        ans: ans,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media screen and (max-width:940px) {
    .layer {
      header {
        height: 70px;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 23px 15px;
        p {
          margin: 0;
          font-size: 23px;
          font-weight: bold;
          a{
            color: rgba(0,0,0,0.7);
            text-decoration: none;
          }
        }
      }
      main {
        .list {
          padding: 5px;
          li {
            list-style: none;
            width: 100%;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            flex-direction: wrap-reverse;
            display: inline-block;
            flex-wrap: wrap;
            position: relative;
            height: 60px;
            margin-top: 5px;
            .router-link-active{
              color:#db4437;
              border: 1px solid #db4437;
              .icon{
                color:#db4437;
              }
            }
            .router-fade-enter-active,
            .router-fade-leave-active {
          	  	transition: opacity .3s;
          	}
            .router-fade-enter,
            .router-fade-leave-active {
          	  	opacity: 0;
          	}
            a {
              flex-grow: 1;
              height:100%;
              width:100%;
              display: inline-block;
              text-align: left;
              font-weight: bold;
              letter-spacing: 1px;
              font-size: 15px;
              border-radius: 5px;
              border: 1px solid #eee;
              color: rgba(0,0,0,0.87);
              line-height: 60px;
              padding-left: 20px;
              text-decoration: none;
              .icon{
                color:#757575;
              }
            }
          }
        }
      }
      footer {
        .login {
          width: 100%;
          position: absolute;
          bottom: 0;
          button {
            height: 45px;
            width: 50%;
            border: 0;
            padding: 0;
            float: left;
            font-weight: bold;
            color: rgba(0,0,0,0.78);
            font-size: 17px;
            border-top: 1px solid #eee;
            border-right: 1px solid #eee;
            background: #fff;
          }
          .on {
            border-right: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width:950px) {
    .layer {
      height: 100%;
      width: 100%;
      overflow: hidden;
      header {
        height: 70px;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 23px 15px;
        p {
          margin: 0;
          font-size: 23px;
          font-weight: bold;
          a{
            color: rgba(0,0,0,0.7);
          }
        }
      }
      main {
        .list {
          padding: 5px;
          li {
            list-style: none;
            width: 100%;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            flex-direction: wrap-reverse;
            display: inline-block;
            flex-wrap: wrap;
            position: relative;
            height: 60px;
            margin-top: 5px;
            .router-link-active{
              color:#db4437;
              border: 1px solid #db4437;
              .icon{
                color:#db4437;
              }
            }
            a {
              flex-grow: 1;
              height:100%;
              width:100%;
              display: inline-block;
              text-align: left;
              font-weight: bold;
              letter-spacing: 1px;
              font-size: 15px;
              border-radius: 5px;
              border: 1px solid #d2d2d2;
              color: rgba(0,0,0,0.87);
              line-height: 60px;
              padding-left: 20px;
              text-decoration: none;
              .icon{
                color:#757575;
              }
            }
          }
        }
      }
      footer {
        .login {
          width: 100%;
          position: absolute;
          bottom: 0;
          button {
            height: 45px;
            width: 50%;
            border: 0;
            padding: 0;
            float: left;
            font-weight: bold;
            color: rgba(0,0,0,0.78);
            font-size: 17px;
            border-top: 1px solid #eee;
            border-right: 1px solid #eee;
            background: #fff;
          }
          .on {
            border-right: 0;
          }
        }
      }
    }
  }
</style>
