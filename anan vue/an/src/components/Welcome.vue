<template>
  <div class="welcome">
    <div class="frist-paper">
      <h1>That is all</h1>
      <div class="system">
        <div class="system-box">
          <p class="free">Me</p>
          <p class="price">this all</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <button type="button" name="button">button</button>
        </div>
        <div class="system-box visible-xs-*">
          <p class="free">Me</p>
          <p class="price">this all</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <button type="button" name="button">button</button>
        </div>
        <div class="system-box visible-xs-*">
          <p class="free">Me</p>
          <p class="price">this all</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <p class="some-explain">explain</p>
          <button type="button" name="button">button</button>
        </div>
      </div>
    </div>
    <div class="second-paper">
        <p class="top-message">您可以在任意设备上查看我的个人网站  包括 Iphone and Android</p>
        <p class="top-message-explain">您可以在任意设备上查看我的个人网站  包括 Iphone and Android 您可以在任意设备上查看我的个人网站  包括 Iphone and Android 您可以在任意设备上查看我的个人网站  包括 Iphone and Android</p>
        <div class="phone">
          <div class="android">

          </div>
          <div class="iphone">

          </div>
        </div>
        <div class="apple">
          <div class="close-button close1">

          </div>
          <div class="close-button close2">

          </div>
          <div class="close-button close3">

          </div>
          <div class="close-button close4">

          </div>
          <div class="apple-paper">
            <div class="camera"></div>
            <div class="receiver"></div>
            <div class="screen">

            </div>
          </div>
        </div>
    </div>
    <div class="third-paper">
      <p class="hot">Hot an an</p>
      <p class="mind">FORGET ME NOT</p>
      <button type="button" name="button">button</button>
    </div>
  </div>
</template>

<script>
import {ans} from '@/data'

export default {
  name: 'welcome',
  data () {
    return {
      ans: ans,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:750px){
  .welcome{
    height:100%;
    width:100%;
    overflow: scroll;
    font-weight: bold;
    .frist-paper{
      height:100%;
      width:100%;
      background: #03a67b;
      h1{
        margin:0;
        padding-top:150px;
        text-align:center;
        color:#fff;
      }
      .system{
        margin:100px auto;
        margin-bottom: 0;
        width:1150px;
        height:350px;
        .system-box:last-child{
          margin: 0;
        }
        .system-box{
          height:350px;
          width:330px;
          background:#fff;
          border-radius:5px;
          margin-right: 50px;
          float: left;
          .free{
            text-align: center;
            margin-top: 30px;
          }
          .price{
            font-size: 30px;
            color:#000;
            text-align: center;
          }
          .some-explain{
            text-align: center;
            color:#999999;
          }
          button{
            display: block;
            margin:  0 auto;
            border-radius: 5px;
            border: 1px solid #03a67b;
            background: #fff;
            padding: 10px 70px;
            letter-spacing: 2px;
            color: #03a67b;
            transition: .6s;
            font-size: 15px;
            &:hover{
              background: #03a67b;
              color:#fff;
            }
          }
        }
      }
    }
    .second-paper{
      background: #fff;
      height:100%;
      width:100%;
      position: relative;
      box-sizing: border-box;
      .top-message{
        text-align: center;
        color:#333333;
        padding-top: 150px;
        font-size: 25px;
      }
      .top-message-explain{
        text-align: center;
        width:650px;
        margin: 0 auto;
        color:#a3a3a3;
      }
      .phone{
        margin: 40px auto;
        height:60px;
        width:425px;
        .android{
          width:200px;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
          display: inline-block;
          margin-right: 20px;
        }
        .iphone{
          width:200px;
          display: inline-block;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
        }
      }
      .apple{
        height:300px;
        width:250px;
        margin: auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        // background: #03a67b;
        border: 2px solid #03a67b;
        border-bottom: 0;
        border-radius: 32px 32px 0 0;
        .close-button{
          height:43px;
          width:8px;
          border-radius: 2px;
          background: #03a67b;
        }
        .close1{
          position: absolute;
          top:120px;
          right:-5px;
        }
        .close2{
          position: absolute;
          top:62px;
          left:-5px;
          height:35px;
        }
        .close3{
          position: absolute;
          top:113px;
          left:-5px;
        }
        .close4{
          position: absolute;
          top:171px;
          left:-5px;
        }
        .apple-paper{
          height:100%;
          width: 100%;
          background: #fff;
          position: absolute;
          top:0;
          left:0;
          border-radius: 32px 32px 0 0;
          .camera{
            height:8px;
            width:8px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:80px;
            top:30px;
          }
          .receiver{
            height:8px;
            width:50px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:100px;
            top:30px;
          }
          .screen{
            width:90%;
            height:80%;
            border-left: 2px solid #03a67b;
            border-right: 2px solid #03a67b;
            border-top: 2px solid #03a67b;
            // background: #03a67b;
            margin: 0 auto;
            position: absolute;
            left:0;
            right:0;
            bottom: 0;
          }
        }
      }
    }
    .third-paper{
      background: #03a67b;
      height:100%;
      width:100%;
      .hot{
        text-align: center;
        color:#fff;
        font-size: 14px;
        padding-top: 60px;
      }
      .mind{
        text-align: center;
        color:#fff;
        font-size: 40px;
      }
      button{
        display: block;
        margin:  0 auto;
        border-radius: 5px;
        border: 1px solid #fff;
        background: #fff;
        padding: 10px 70px;
        letter-spacing: 2px;
        color: #03a67b;
        transition: .6s;
        font-size: 15px;
        &:hover{
          background: #03a67b;
          color:#fff;
        }
      }
    }
  }
}
@media screen and (min-width:950px){
  .welcome{
    height:100%;
    width:100%;
    overflow: scroll;
    font-weight: bold;
    .frist-paper{
      height:100%;
      width:100%;
      background: #03a67b;
      h1{
        margin:0;
        padding-top:150px;
        text-align:center;
        color:#fff;
      }
      .system{
        margin:100px auto;
        margin-bottom: 0;
        width:1150px;
        height:350px;
        .system-box:last-child{
          margin: 0;
        }
        .system-box{
          height:350px;
          width:330px;
          background:#fff;
          border-radius:5px;
          margin-right: 50px;
          float: left;
          .free{
            text-align: center;
            margin-top: 30px;
          }
          .price{
            font-size: 30px;
            color:#000;
            text-align: center;
          }
          .some-explain{
            text-align: center;
            color:#999999;
          }
          button{
            display: block;
            margin:  0 auto;
            border-radius: 5px;
            border: 1px solid #03a67b;
            background: #fff;
            padding: 10px 70px;
            letter-spacing: 2px;
            color: #03a67b;
            transition: .6s;
            font-size: 15px;
            &:hover{
              background: #03a67b;
              color:#fff;
            }
          }
        }
      }
    }
    .second-paper{
      background: #fff;
      height:100%;
      width:100%;
      position: relative;
      box-sizing: border-box;
      .top-message{
        text-align: center;
        color:#333333;
        padding-top: 150px;
        font-size: 25px;
      }
      .top-message-explain{
        text-align: center;
        width:650px;
        margin: 0 auto;
        color:#a3a3a3;
      }
      .phone{
        margin: 40px auto;
        height:60px;
        width:425px;
        .android{
          width:200px;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
          display: inline-block;
          margin-right: 20px;
        }
        .iphone{
          width:200px;
          display: inline-block;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
        }
      }
      .apple{
        height:300px;
        width:250px;
        margin: auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        // background: #03a67b;
        border: 2px solid #03a67b;
        border-bottom: 0;
        border-radius: 32px 32px 0 0;
        .close-button{
          height:43px;
          width:8px;
          border-radius: 2px;
          background: #03a67b;
        }
        .close1{
          position: absolute;
          top:120px;
          right:-5px;
        }
        .close2{
          position: absolute;
          top:62px;
          left:-5px;
          height:35px;
        }
        .close3{
          position: absolute;
          top:113px;
          left:-5px;
        }
        .close4{
          position: absolute;
          top:171px;
          left:-5px;
        }
        .apple-paper{
          height:100%;
          width: 100%;
          background: #fff;
          position: absolute;
          top:0;
          left:0;
          border-radius: 32px 32px 0 0;
          .camera{
            height:8px;
            width:8px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:80px;
            top:30px;
          }
          .receiver{
            height:8px;
            width:50px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:100px;
            top:30px;
          }
          .screen{
            width:90%;
            height:80%;
            border-left: 2px solid #03a67b;
            border-right: 2px solid #03a67b;
            border-top: 2px solid #03a67b;
            // background: #03a67b;
            margin: 0 auto;
            position: absolute;
            left:0;
            right:0;
            bottom: 0;
          }
        }
      }
    }
    .third-paper{
      background: #03a67b;
      height:100%;
      width:100%;
      .hot{
        text-align: center;
        color:#fff;
        font-size: 14px;
        padding-top: 60px;
      }
      .mind{
        text-align: center;
        color:#fff;
        font-size: 40px;
      }
      button{
        display: block;
        margin:  0 auto;
        border-radius: 5px;
        border: 1px solid #fff;
        background: #fff;
        padding: 10px 70px;
        letter-spacing: 2px;
        color: #03a67b;
        transition: .6s;
        font-size: 15px;
        &:hover{
          background: #03a67b;
          color:#fff;
        }
      }
    }
  }

}



</style>
