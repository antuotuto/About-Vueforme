<template>
  <div class="">
    <ul class="list-article">
      <li class="item-article" v-for="item in items">
        <router-link :to="{ name: 'article', params: { id: item.id }}">
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
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'list-article',
  data() {
    return {
      items: this.initItems
    }
  },
  props: {
    initItems: {
      type: Array,
      default: function() {

      }
    }
  }
}
</script>

<style scoped lang="scss">

  .list-article{
    width:100%;
    padding: 15px;
    a{
      color:#000;
    }
    li{
      list-style: none;
    }
  }


</style>
