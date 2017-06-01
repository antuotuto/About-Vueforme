<template>
<div class="home">
  <header>
    <h1 class="banner"><img :src="banner[0]" alt=""></h1>
  </header>
  <main>
    <h1 class="title-primary">
      <a href="#">今日最新</a>
    </h1>
    <div class="container">
      <list-article :initItems="articles"></list-article>
    </div>
  </main>
</div>
</template>

<script>
import listArticle from '@/components/List-article';
export default {
  name: 'home',
  data() {
    return {
      banner: ['http://ooi407n8x.bkt.clouddn.com/yao/oneyao-2.png'],
      articles: [{
        title: 'hah'
      }]
    }
  },
  components: {
    listArticle
  },
  created() {
    this.getArticles()
  },
  watch: {},
  methods: {
    getArticles() {
      var that = this
      var xhr = new XMLHttpRequest()
      xhr.open('GET', '/articles', false)
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var resData = JSON.parse(xhr.responseText)
            console.log(resData)
            that.articles = resData
            console.log(that.articles);
          } else {
            console.log('error')
          }
        }
      }
      xhr.send()
    }
  }
}
</script>

<style scoped lang="scss">

.Home{
  height:100%;
  width:100%;
}
header{
  width:100%;
}
header h1{
  margin: 0;
}
header img{
  width:100%;
}
main{
  padding-top: 30px;
}
.container{
  padding:0 15px;
}
.title-primary{
  margin-bottom: 30px;
  font-size: 16px;
  color: black;
  text-align: center;
}
.title-primary a{
    display: inline-block;
    padding:0 15px;
    line-height: 30px;
    border: 1px solid black;
    color: black;
}
.banner{
  width:100%;
}


</style>
