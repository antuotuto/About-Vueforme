<template>
  <div class="colorful">

    <div class="color-box">
      <div class="color-size" v-for="(nav,index) in colorfuls" :key="nav.title" >
        <div class="color-four">
            <div class="color-frist"  :style="'background-color:'+nav.colorone+';'">
              <p>{{nav.colorone}}</p>
            </div>
            <div class="color-second" :style="'background-color:'+nav.colortwo+';'">
              <p>{{nav.colortwo}}</p>
            </div>
            <div class="color-third" :style="'background-color:'+nav.colorthree+';'">
              <p>{{nav.colorthree}}</p>
            </div>
            <div class="color-fourth" :style="'background-color:'+nav.colorfour+';'">
              <p>{{nav.colorfour}}</p>
            </div>
        </div>
        <div class="love-color">
          <i class="icon iconfont icon-woguanzhudepinpai"></i>
          <p>8</p>
        </div>
        <p class="left-font"><span>{{nav.title}}</span> Days</p>
      </div>
    </div>

  </div>
</template>

<script>
import {colorfuls} from '@/data'

export default {
  name: 'colorful',
  data () {
    return {
      colorfuls : colorfuls,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">

  .colorful{
    color: #546576;
    background: #F0F4F8;
    height:100%;
    width:100%;
    overflow: scroll;
    padding: 10px;
    margin: 0 auto;
    .color-box{
      margin: 0 auto;
      width:340px;
      .color-size{
        background: #fff;
        width: 150px;
        margin: 10px;
        padding: 15px 15px 20px 15px;
        display: inline-block;
        border-radius: 4px;
        position: relative;
        .color-four{
          width:100%;
          height:120px;
          border-radius: 4px;
          overflow: hidden;
          p{
            display: none;
          }
          .color-frist{
            height:50px;
            background: #FFFB85;
            line-height: 50px;
            padding-left:10px;
            &:hover p{
              display: block;
            }
          }
          .color-second{
            height:30px;
            background: #FFD464;
            line-height: 30px;
            padding-left:10px;
            &:hover p{
              display: block;
            }
          }
          .color-third{
            height: 20px;
            background: #FA5B75;
            padding-left:10px;
            line-height: 20px;
            &:hover p{
              display: block;
            }
          }
          .color-fourth{
            height: 20px;
            background: #5A3662;
            padding-left:10px;
            line-height: 20px;
            &:hover p{
              display: block;
            }
          }
        }
        .love-color{
          border-radius: 4px;
          border: 1px solid #cddbee;
          box-sizing: border-box;
          border: 1px solid #E6EAEE;
          display: inline-block;
          height:30px;
          width:50px;
          margin-top: 8px;
          box-sizing: border-box;
          padding:0 10px 0 5px;
          position: relative;
          i{
            color: #000;
            font-size: 17px;
            line-height: 25px;
            position: absolute;
            top: 2px;
            left: 9px;
          }
          p{
            margin: 0;
            line-height: 30px;
            text-align: right;
          }
        }
        .left-font{
          display: inline-block;
          margin: 0 ;
          font-size: 10px;
          position: absolute;
          right: 18px;
          bottom: 21px;
        }
      }
    }
  }


</style>
