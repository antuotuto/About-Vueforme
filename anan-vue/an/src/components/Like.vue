<template>
  <div class="like">
    <div class="love-message">
      <div class="love-img  animated  fadeInLeft delay_300">
        <img :src="goodthing.img" alt="">
      </div>
      <div class="love-box-in">
        <p class="love-title  animated  fadeInLeft delay_400">{{goodthing.title}}</p>

        <p class="love-reason love-reason-title animated  fadeInLeft delay_600">{{goodthing.reason}}</p>
        <p class="love-reason animated  fadeInLeft delay_600">{{goodthing.content}}</p>
      </div>
    </div>
    <section class="wrap-list">
      <h2 class="title-primary">评论列表</h2>
      <list-comment></list-comment>
      <!-- <p v-html="an" class="markdown-body"></p>
      <p v-html="yao" class="markdown-body"></p> -->
    </section>
  </div>
</template>

<script>
import {goodthings} from '@/data'
import {mackdoms} from '@/data'
var marked = require('marked');
import '@/assets/css/github-markdown.css'
import listComment from '@/components/list-comment';
import {comments} from '@/data'


export default {
  name: 'like',
  data () {
    return {
      goodthings: goodthings,
      an:'',
      yao:'',
      mackdoms:mackdoms,
      goodthing:{},
    }
  },
  created(){
    this.an = marked(this.mackdoms[0].title)
    this.yao = marked(this.mackdoms[0].content)
    this.goodthing = goodthings[this.$route.params.id -1]
  },
  components: {
    listComment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">

@media screen and (max-width:940px){
  .like{
    height:100%;
    width:100%;
    overflow: scroll;
    .love-message{
      .love-img{
        width:100%;
      }
      .love-box-in{
        padding: 20px;
        .love-title{
          margin: 0 auto;
          padding: 5px;
          width:130px;
          text-align: center;
          margin-top: 20px;
          border: 1px solid #000;
        }
        .love-reason{
          padding: 0 30px 0 30px;
        }
        .love-reason-title{
          font-size: 17px;
          font-weight: bold;
          padding: 30px;
        }
      }
    }
    section{
      padding: 30px;
    }
  }
}

@media screen and (min-width:950px){
  .like{
    height:100%;
    width:100%;
    overflow: scroll;
    .love-message{
      .love-img{
        width:100%;
      }
      .love-box-in{
        .love-title{
          margin: 0 auto;
          width:130px;
          padding: 5px;
          text-align: center;
          margin-top: 20px;
          border: 1px solid #000;
        }
        .love-reason{
          padding: 30px;
        }
        .personal-information{
          h4{
            color: #9e9e9e;
            text-align: center;
            margin: 20px;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
