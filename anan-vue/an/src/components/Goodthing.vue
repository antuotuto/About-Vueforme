<template>
  <div class="goodthing">
    <header>
      <router-link to="/">
        <div class="name animated  bounceInDown delay_0">
          <p class=" animated  bounceInDown delay_100">an</p>
        </div>
      </router-link>
    </header>
    <main>
      <p class=" animated  fadeInLeft delay_200">推荐社区</p>
    </main>
    <footer>
      <div class="love-box  animated  fadeInLeft delay_200">
        <div class="love-message" v-for="(nav,index) in goodthings" :key="nav.title" >
          <router-link :to="{ name: 'like', params: { id: nav.id }}">
            <div class="love-img  animated  fadeInLeft delay_300">
              <img :src="nav.img" alt="">
            </div>
            <div class="love-box-in">
              <p class="love-title  animated  fadeInLeft delay_330">{{nav.title}}</p>
              <p class="love-reason animated  fadeInLeft delay_300">{{nav.reason}}</p>
              <p class="product animated  fadeInLeft delay_600">喜欢物品</p>
            </div>
          </router-link>
        </div>
        <div class="love-message love-box-blank"></div>
      </div>
      <div class="personal-information">
        <h4>你已经看完了所有信息</h4>
      </div>
    </footer>
  </div>
</template>

<script>
import {goodthings} from '@/data'

export default {
  name: 'goodthing',
  data () {
    return {
      goodthings : goodthings,
      wantOther: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:940px){
  .goodthing{
    height:100%;
    width:100%;
    overflow: scroll;
    header{
      height:200px;
      background: #0f9d58;
      position: relative;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
      .name{
        height:50px;
        width:50px;
        background: #C2185B;
        border-radius: 50px;
        position: relative;
        bottom:-175px;
        margin: 0 auto;
        line-height: 50px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        p{
          text-align: center;
          color:#fff;
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
    main{
      p{
        color: rgba(0,0,0,0.54);
        font-size: 16px;
        font-weight: 500;
        margin: 32px 16px 0;
        white-space: nowrap;
      }
    }
    footer{
      .love-box{
        display: flex;
        flex-direction:wrap-reverse;
        flex-wrap:wrap;
        .love-message:nth-child(2n){
          margin-left: 1%;
          margin-right: 0;
        }
        .love-message{
          margin-top: 8px;
          margin-right: 1%;
          width:49%;
          flex-grow:1;
          height:270px;
          display: inline-block;
          background: #fff;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
          .love-img{
            height:120px;
            overflow: hidden;
            background: #eee;
            img{
              width:100%;
            }
          }
          .love-box-in{
            padding: 15px;
            position: relative;
            .love-title{
              font-size: 16px;
              line-height: 20px;
              max-height: 40px;
              margin-top: 4px;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-word;
              color:#000;
              margin: 0;
            }
            .love-reason{
              font-size: 12px;
              margin-top: 4px;
              overflow: hidden;
              // text-overflow: ellipsis;
              // white-space: nowrap;
              color:rgba(0,0,0,0.45);
            }
            .product{
              color: #0f9d58;
              position: absolute;
              top: 110px;
              left:15px;
            }
          }
        }
      }
      .love-message.love-box-blank{
        background: #e9e9e9;
      }
      .personal-information{
        p{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 32px 16px 0;
          white-space: nowrap;
        }
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

@media screen and (min-width:950px){
  .goodthing{
    height:100%;
    width:100%;
    background: #eee;
    overflow: scroll;
    header{
      height:300px;
      background: #0f9d58;
      position: relative;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
      .name{
        height:50px;
        width:50px;
        background: #C2185B;
        border-radius: 50px;
        position: relative;
        top:275px;
        margin: 0 auto;
        line-height: 50px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        p{
          text-align: center;
          color:#fff;
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
    main{
      p{
        color: rgba(0,0,0,0.54);
        font-size: 16px;
        font-weight: 500;
        margin: 20px auto;
        white-space: nowrap;
        width:850px;
      }
    }
    footer{
      position: relative;
      width:850px;
      margin: 0 auto;
      .love-box{
        display: flex;
        flex-direction:wrap-reverse;
        flex-wrap:wrap;
        .love-message{
          margin: 8px 2px;
          width:190px;
          height:235px;
          display: inline-block;
          background: #fff;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
          margin-right: 20px;
          .love-img{
            height:100px;
            overflow: hidden;
            background: #eee;
            img{
              width:100%;
            }
          }
          .love-box-in{
            padding: 15px;
            position: relative;
            .love-title{
              font-size: 16px;
              line-height: 20px;
              max-height: 40px;
              margin-top: 4px;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-word;
              color:#000;
              margin: 0;
            }
            .love-reason{
              font-size: 12px;
              margin-top: 4px;
              overflow: hidden;
              // text-overflow: ellipsis;
              // white-space: nowrap;
              color:rgba(0,0,0,0.45);
            }
            .product{
              color: #0f9d58;
              position: absolute;
              top: 100px;
              left:15px;
            }
          }
        }
      }
      .love-message.love-box-blank{
        background: #e9e9e9;
      }
      .personal-information{
        p{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 32px 16px 0;
          white-space: nowrap;
        }
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

</style>
