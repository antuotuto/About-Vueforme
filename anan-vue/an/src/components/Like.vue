<template>
  <div class="like">
    <div class="love-message"  >
      <div class="love-img  animated  fadeInLeft delay_300">
        <img src="http://ooi407n8x.bkt.clouddn.com/yao/oneyao-2.png" alt="">
      </div>
      <div class="love-box-in">
        <p class="love-title  animated  fadeInLeft delay_400">孙琼瑶</p>
        <p class="love-reason animated  fadeInLeft delay_600">喜欢的理由安身立命你打开静安店看见爱上能看到萨拉斯柯达来看打了卡你</p>
        <div class="personal-information">
          <h4 class="animated  fadeInLeft delay_800">你已经看完了所有信息</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {goodthings} from '@/data'

export default {
  name: 'like',
  data () {
    return {
      goodthings: goodthings,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">

@media screen and (max-width:750px){
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
          width:100px;
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
          width:100px;
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
