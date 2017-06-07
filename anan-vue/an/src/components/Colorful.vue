<template>
  <div class="colorful">
    <div class="color-box">
      <div class="color-size">
        <div class="color-four">
          <a href="#">
            <div class="color-frist">

            </div>
            <div class="color-second">

            </div>
            <div class="color-third">

            </div>
            <div class="color-fourth">

            </div>
          </a>
        </div>
        <div class="love-color">
            <p>an</p>
        </div>
      </div>
      <div class="color-size">
        <div class="color-four">
          <a href="#">
            <div class="color-frist">

            </div>
            <div class="color-second">

            </div>
            <div class="color-third">

            </div>
            <div class="color-fourth">

            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'colorful',
  data () {
    return {

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
    padding: 10px;
    margin: 0 auto;
    .color-box{
      .color-size{
        background: #fff;
        width: 150px;
        margin: 10px;
        padding: 15px 15px 20px 15px;
        display: inline-block;
        border-radius: 4px;
        .color-four{
          width:100%;
          height:120px;
          border-radius: 4px;
          overflow: hidden;
          .color-frist{
            height:50px;
            background: #FFFB85;
          }
          .color-second{
            height:30px;
            background: #FFD464;
          }
          .color-third{
            height: 20px;
            background: #FA5B75;
          }
          .color-fourth{
            height: 20px;
            background: #5A3662;
          }
        }
        .love-color{
          padding: 4px 12px 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid #cddbee;
          box-sizing: border-box;
          border: 1px solid #E6EAEE;
          display: inline-block;
        }
      }
    }
  }


</style>
