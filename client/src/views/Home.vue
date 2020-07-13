<template>
  <div v-if="!getIsLoading">
    <div class="center-circle circle">
      <div class="center-circle-inner circle" data-aos-delay="1500" data-aos-duration="1500" data-aos="fadeIn">
        <div class="center-circle-content"> 
          <div class="time-title">
            Time
          </div>

          <div class="time">
            {{this.datetime}}
          </div>
        </div>
      </div>

      <template v-for="(item,index) in getExcercises">
        <div class="small-circle circle" :class="{'disabled':!item.isBought}" @click="e => ((item.isBought) ? openEx(e) : null)" :key="index" :data-ex='index+1'>
          <div class="small-cirlce-content" :data-aos-delay="200+(150*(index+1))" data-aos-duration="1000" data-aos="fadeIn">
            <img :src="`/img/ico${index+1}.png`" alt="">
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

export default {

  name: 'Home',
  components: {

  },
  computed:mapGetters(['getIsLoading','getIsAuth','getExcercises']),
  methods:{
    getNow: function() {
        const today = new Date();
        const time = (today.getHours() < 10 ? '0' : '') + today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        this.datetime = time;
    },
    openEx: function(e){
      this.clickSound.play();
      const ex = e.target.closest('.small-circle').getAttribute('data-ex');
      this.$router.push({path:'/excercise',query:{ex}})
    }
  },
  data(){
    return {
      datetime:'',
      clickSound:new Audio('/click.mp3'),
    }
  },
  created(){
    this.getNow();
    setInterval(this.getNow,1000);
    if(!this.getIsAuth && !this.getIsLoading) this.$router.push('/');
  }
}
</script>

<style>
  .circle{
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center-circle{
    position: relative;
    width: 175px;
    height: 175px;
  }

  .center-circle-inner{
    width: 100%;
    height: 100%;
        display: flex;
    justify-content: center;
    align-items: center;
        /* border:4px solid #000; */
      background: #fff;
  }

  .center-circle-content{
    text-align: center;
    color:#000;
  }

  .time-title{
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 400;
  }

  .time{
    font-size: 40px;
    font-weight: 700;
  }

  .small-circle{
    width: 80px;
    height: 80px;
    position: absolute;
    cursor: pointer;
    transition: width 2s,height 2s, top 2s !important;
  }

  .small-circle.disabled{
    background: none !important;
    cursor: default;
  }

  .small-circle.disabled .small-cirlce-content{
    border-color:#ddd !important;
  }

  .small-circle.disabled .small-cirlce-content img{
    filter:  invert(80%) !important;
  }

  .small-cirlce-content{
    transition: .3s;
    border:3px solid black;
    min-width: 100%;
    height: 100%;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .small-cirlce-content img{
    max-width: 70%;
  }

  .small-circle.active img{
    opacity: 0;
  }



  .center-circle > *:nth-child(2){
    top:-110px;
  }

  .center-circle > *:nth-child(3){
    top:-65px;
    right:-65px;
  }

  .center-circle > *:nth-child(4){
    right:-110px;
  }

  .center-circle > *:nth-child(5){
    bottom:-65px;
    right:-65px;
  }

  .center-circle > *:nth-child(6){
    bottom:-110px;
  }

  .center-circle > *:nth-child(7){
    bottom:-65px;
    left:-65px;
  }

  .center-circle > *:nth-child(8){
    left:-110px;
  }

  .center-circle > *:nth-child(9){
    top:-65px;
    left:-65px;
  }






  .center-circle > *:nth-child(2) .small-cirlce-content{
    border-color:#50c0fb;
  }

  .center-circle > *:nth-child(3) .small-cirlce-content{

    border-color:#f68e4f;
  }

  .center-circle > *:nth-child(4) .small-cirlce-content{
    border-color:#7279a6;
  }

  .center-circle > *:nth-child(5) .small-cirlce-content{
    border-color: #fcb31f;
  }

  .center-circle > *:nth-child(6) .small-cirlce-content{
    border-color:#ff5757;
  }

  .center-circle > *:nth-child(7) .small-cirlce-content{
    border-color:#4f59ae;
  }

  .center-circle > *:nth-child(8) .small-cirlce-content{
    border-color:#33c4b3
  }

  .center-circle > *:nth-child(9) .small-cirlce-content{
     border-color:#e08fba;
  }






  .center-circle > *:nth-child(2).active,
  .center-circle > *:nth-child(2):hover{
    background:#50c0fb;
  }

  .center-circle > *:nth-child(3).active,
  .center-circle > *:nth-child(3):hover{
    background:#f68e4f;
  }

  .center-circle > *:nth-child(4).active,
  .center-circle > *:nth-child(4):hover{
    background:#7279a6;
  }

  .center-circle > *:nth-child(5).active,
  .center-circle > *:nth-child(5):hover{
    background: #fcb31f;
  }

  .center-circle > *:nth-child(6).active,
  .center-circle > *:nth-child(6):hover{
    background:#ff5757;
  }

  .center-circle > *:nth-child(7).active,
  .center-circle > *:nth-child(7):hover{
    background:#4f59ae;
  }

  .center-circle > *:nth-child(8).active,
  .center-circle > *:nth-child(8):hover{
    background:#33c4b3
  }

  .center-circle > *:nth-child(9).active,
  .center-circle > *:nth-child(9):hover{
    background:#e08fba;
  }







  .center-circle  div:nth-child(2) img{
    filter: invert(82%) sepia(42%) saturate(5153%) hue-rotate(167deg) brightness(101%) contrast(97%);
  }

  .center-circle  div:nth-child(3) img{
    filter: invert(73%) sepia(8%) saturate(7232%) hue-rotate(325deg) brightness(100%) contrast(93%);
  }

  .center-circle  div:nth-child(4) img{
    filter: invert(50%) sepia(5%) saturate(2884%) hue-rotate(195deg) brightness(95%) contrast(87%);
  }

  .center-circle  div:nth-child(5) img{
    filter: invert(76%) sepia(42%) saturate(2857%) hue-rotate(344deg) brightness(108%) contrast(98%);
  }

  .center-circle  div:nth-child(6) img{
    filter: invert(39%) sepia(78%) saturate(631%) hue-rotate(316deg) brightness(107%) contrast(100%);
  }

  .center-circle  div:nth-child(7) img{
    filter: invert(35%) sepia(7%) saturate(5175%) hue-rotate(197deg) brightness(96%) contrast(86%);
  }

  .center-circle  div:nth-child(8) img{

    filter: invert(60%) sepia(95%) saturate(297%) hue-rotate(124deg) brightness(91%) contrast(94%);
  }

  .center-circle  div:nth-child(9) img{

    filter: invert(71%) sepia(18%) saturate(1163%) hue-rotate(287deg) brightness(97%) contrast(81%);
  }

  .center-circle div:hover img{
    filter: invert(100%)
  }

</style>
