<template>
  <div class="list-article">
    <ul class="list-article">
      <li v-for="item in items" class="item-article" >
        <a href="#" class="content">
          <h4 class="title">{{item.title}}</h4>
          <p class="des">{{item.description}}</p>
          <div class="cover">
            <img :src="item.cover" alt="">
          </div>
          <div class="meta">
            <div class="float-left avatar">
              <img :src="item.avatar" alt="">
            </div>
            <p class="overflow">
              <span class="float-right date">{{item.date}}</span>
              <span class="overflow author-name">{{item.author}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {articles} from '@/data'

export default {
  name: 'list-article',
  data () {
    return {
      msg: '王安安',
      items: articles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-article{
  margin: 0;
  padding: 0;
  height:100%;
  width:100%;
  overflow: scroll;
}
.list-article li{
  list-style: none;
}
.item-article .title{
    color: black;
    margin-bottom: 10px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.item-article .des{
    color: black;
    font-size: 12px;
    margin-bottom: 10px;
    //
    overflow: hidden;
    text-overflow: ellipsis;
    //
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.item-article .meta{
    padding:15px 0;
    line-height: 20px;
}
.item-article .date{
    color: black;
    font-size: 12px;
}
.item-article .avatar{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.cover img{
  width:100%;
}
.item-article .avatar img{
    border-radius: 50%;
    height:100%;
    width:100%;
}
.item-article .author-name{
    display: block;
    padding:0 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
    font-size: 12px;
}

</style>
