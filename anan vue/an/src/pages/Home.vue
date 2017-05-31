<template>
  <div class="Home">
    <header>
      <h1 class="banner"><img :src="banner[0]" alt=""></h1>
    </header>

    <main>
      <h1 class="title-primary">
        <a href="#">今日最新</a>
      </h1>
      <div class="container">
        <list-article></list-article>
      </div>
    </main>


  </div>
</template>

<script>
import listArticle from '@/components/List-article';
export default {
  name: 'Home',
  data () {
    return {
      banner: ['http://ooi407n8x.bkt.clouddn.com/yao/oneyao-2.png'],
      msg: '王安安',
    }
  },
  components:{ listArticle }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped  >
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
