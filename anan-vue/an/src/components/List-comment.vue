<template>
  <div id="list-comment">
    <ul>
      <li class="item-comment" v-for="item in comments">
        <div class="float-left avatar">
          <!-- <img src="../assets/avatar.jpg" alt=""> -->
        </div>
        <div class="overflow">
          <p class="meta">
            <span class="nickname">{{item.nickname}}</span>
            <span class="float-right date">{{item.date}}</span>
          </p>
          <p v-html="talk"  class="markdown-body"></p>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
import {comments} from '@/data'
var marked = require('marked');
import '@/assets/css/github-markdown.css'


export default {
  name: 'list-comment',
  data () {
    return {
      comments : comments,
      talk:'王安安'
    }
  },
  created(){
    this.talk = marked(' ``` \n\n 王安安 \n\n ``` ');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">



</style>
