<template>
  <div class="myself">
    <header>
      <div class="myImg">

      </div>
      <div class="myName">
        <p>安</p>
      </div>
      <div class="interest">
        <h2>王安安</h2>
        <button type="button" name="button">发表文章</button>
        <p class="like">王安喜欢的文章</p>
      </div>
    </header>
    <footer>
      <div class="love-box">
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message">
          <div class="love-img">

          </div>
        </div>
        <div class="love-message love-box-blank"></div>
      </div>
      <div class="personal-information">
        <p>王安的信息</p>
        <h4>你已经看完了所有信息</h4>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'myself',
  data () {
    return {

    }
  },
  components:{  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped   lang="scss">
@media screen and (max-width:750px){
  .myself{
    height:100%;
    width:100%;
    overflow: scroll;
    background: #eee;
    header{
      position: relative;
      .myImg{
        height:180px;
        width:100%;
        background: #34A853;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
      }
      .myName{
        height:80px;
        width:80px;
        border-radius: 80px;
        background: #C2185B;
        position: relative;
        top:-40px;
        margin: 0 auto;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        p{
          line-height: 80px;
          text-align: center;
          color:#fff;
          font-weight: bold;
          font-size: 18px;
          letter-spacing: 2px;
        }
      }
      .interest{
        h2{
          text-align: center;
          margin: 0;
        }
        button{
          width:100px;
          height:40px;
          color:#fff;
          font-size: 15px;
          background: #4385F5;
          border: 0;
          border-radius: 3px;
          display: block;
          margin: 20px auto;
          font-weight: 400;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
        }
        .like{
          color: rgba(0,0,0,0.54);
          font-size: 16px;
          font-weight: 500;
          margin: 32px 16px 20px 16px;
        }
      }
    }

    footer{
      .love-box{
        display: flex;
        flex-direction:wrap-reverse;
        flex-wrap:wrap;
        .love-message{
          margin: 2px;
          width:48%;
          flex-grow:1;
          height:200px;
          display: inline-block;
          background: #fff;
          .love-img{
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
        }
      }
    }
  }
}


@media screen and (min-width:950px){
  .myself{
    height:100%;
    width:100%;
    overflow: scroll;
    background: #eee;
      header{
        position: relative;
        width:850px;
        margin: 0 auto;
        .myImg{
          height:480px;
          width:100%;
          background: #34A853;
        }
        .myName{
          height:80px;
          width:80px;
          border-radius: 80px;
          background: #C2185B;
          position: relative;
          top:-100px;
          left:30px;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
          p{
            line-height: 80px;
            text-align: center;
            color:#fff;
            font-weight: bold;
            font-size: 18px;
            letter-spacing: 2px;
          }
        }
        .interest{
          h2{
            position: absolute;
            bottom: 130px;
            left: 136px;
            color:#fff;
          }
          button{
            width:100px;
            height:40px;
            color:#fff;
            font-size: 15px;
            background: #4385F5;
            border: 0;
            border-radius: 3px;
            display: block;
            margin: 20px auto;
            font-weight: 400;
            position: absolute;
            bottom: 116px;
            right: 40px;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
          }
          .like{
            top:-40px;
            position: relative;
            color: rgba(0,0,0,0.54);
            font-size: 16px;
            font-weight: 500;
          }
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
            margin: 2px;
            width:180px;
            flex-grow:1;
            height:200px;
            display: inline-block;
            background: #fff;
            box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
            margin-right: 20px;
            .love-img{
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
          }
        }
      }
    }
  }


</style>
