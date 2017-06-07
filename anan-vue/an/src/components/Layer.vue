<template>
  <div class="layer">
    <header>
      <p class="logo">
        王安安的想法
        <!-- <img src="" alt=""> -->
      </p>
    </header>
    <main>
      <ul class="list">
        <li v-for="(nav,index) in navs" :key="nav.title" @click="$emit('linkTo')" :style="'background-color:'+nav.bgcolor+';'">
          <router-link :to="nav.router">
            <!-- <i class="icon iconfont"  :class="nav.icon"></i> -->
            <p>{{ nav.title }}</p>
          </router-link>
        </li>
      </ul>
    </main>
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

export default {
  name: 'layer',
  data () {
    return {
      msg: '王安安',
      navs:navs,
      ans:ans,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:940px){
  .layer{
    header{
      height: 70px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding: 23px 15px;
      p{
        margin: 0;
        font-size: 23px;
        font-weight: bold;
      }
    }
    main{
      .list{
        padding: 5px;
        li{
          list-style: none;
          width:33.3%;
          line-height:60px;
          border-radius: 6px;
          box-sizing: border-box;
          display: flex;
          flex-direction:wrap-reverse;
          display: inline-block;
          flex-wrap:wrap;
          border: 1px solid #fff;
          a{
            flex-grow:1;
            color: #757575;
            p{
              color:#fff;
              text-align: center;
              margin: 0 auto;
              font-weight: bold;
              letter-spacing: 1px;
              font-size: 15px;
            }
          }
        }
      }
    }
    footer{
      .login{
        width:100%;
        position: absolute;
        bottom: 0;
        button{
          height:45px;
          width:50%;
          border: 0;
          padding: 0;
          float: left;
          background: rgba(0, 136, 122,.7);
          color:#fff;
          font-size: 17px;
        }
        .on{
          background: rgba(210, 47, 47,.7);
        }
      }
    }
  }
}
@media screen and (min-width:950px){
  .layer{
    height:100%;
    width:100%;
    header{
      height: 70px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding: 23px 15px;
      p{
        margin: 0;
        font-size: 23px;
        font-weight: bold;
      }
    }
    main{
      .list{
        padding: 5px;
        li{
          list-style: none;
          width:33.3%;
          line-height:60px;
          border-radius: 6px;
          box-sizing: border-box;
          display: flex;
          flex-direction:wrap-reverse;
          display: inline-block;
          flex-wrap:wrap;
          border: 1px solid #fff;
          a{
            flex-grow:1;
            color: #757575;
            p{
              color:#fff;
              text-align: center;
              margin: 0 auto;
              font-weight: bold;
              letter-spacing: 1px;
              font-size: 15px;
            }
          }
        }
      }
    }
    footer{
      .login{
        width:100%;
        position: absolute;
        bottom: 0;
        button{
          height:45px;
          width:50%;
          border: 0;
          padding: 0;
          float: left;
          background: #EF6C00;
          color:#fff;
          font-size: 17px;
        }
        .on{
          background: #6A1B9A;
        }
      }
    }
  }
}


</style>
