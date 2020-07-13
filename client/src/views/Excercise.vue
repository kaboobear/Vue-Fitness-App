<template>
  <div v-if="!getIsLoading">
      <div class="ex-content active">
        <div class="ex-glob-title">
                <!-- <div class="glob-title-img"><img v-bind:src="`/img/ico${this.$route.query.ex}.png`" alt=""></div> -->
                <div class="glob-title-img">{{this.excercise.complexTitle}}</div>
        </div>

        <div class="ex-block">
            <div class="ex-title">
                {{this.title}}
            </div>

            <div class="ex-photo">
                <img src="" alt="">

                <div class="ex-timer">
                    <div class="ex-timer-inner">
                        <div class="timer-circle"></div>
                        <div class="timer-line"></div>
                    </div>
                </div>

                <div class="countdown">

                </div>
            </div>
        </div>
        
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
        loadScreen(){
            document.querySelector('.ex-content').classList.toggle('active');
        },
        countdown(){
            const countElem = document.querySelector('.countdown');
            countElem.innerText = "3";
            this.tickSound.play();
            setTimeout(()=>{
                countElem.innerText = "2";
                this.tickSound.play();
                setTimeout(()=>{
                    countElem.innerText = "1";
                    this.tickSound.play();
                    setTimeout(()=>{
                        countElem.innerText = "";
                            document.querySelector('.ex-timer').classList.toggle('active');
                                this.end.play();
                            return;
                    },1000)
                },1000)
            },1000)
        },
        startExcercice(ind){
            const title = this.excercise.complexTitle;
            const complex = this.excercise.complexArray[ind];

            if(ind < this.excercise.complexArray.length){
                document.querySelector('.ex-block .ex-title').innerText = complex.title;
                document.querySelector('.ex-block .ex-photo img').setAttribute('src',`/img/${title}/${complex.img}.jpg`);
                setTimeout(()=>{
                    this.loadScreen();
                    setTimeout(()=>{
                        document.querySelector('.ex-block').classList.toggle('active');
                        setTimeout(()=>{
                            this.countdown();
                            setTimeout(()=>{
                                document.querySelector('.timer-line').style.animation = `rotate linear ${complex.time}s`;
                                setTimeout(() => {
                                    document.querySelector('.ex-timer').style.animation = `bounce 1s`;
                                    this.endSound.play();
                                    setTimeout(() => {
                                        this.loadScreen();
                                        setTimeout(()=>{
                                            document.querySelector('.ex-block').classList.toggle('active');
                                            document.querySelector('.ex-timer').classList.toggle('active');
                                            document.querySelector('.timer-line').style.animation = 'none';
                                            document.querySelector('.ex-timer').style.animation = `none`;
                                            this.currentEx = this.currentEx+1;
                                            this.startExcercice(this.currentEx);
                                        },500)
                                    }, 2000);
                                }, (complex.time)*1000);
                            },3100)
                        },1000)
                    },2000)
                },300)
            }
            else this.end();
        },
        start(){
            setTimeout(() => {
                this.loadScreen();
                setTimeout(()=>{
                    this.loadScreen();
                    setTimeout(()=>{
                        document.querySelector('.glob-title-img').style.display = 'none';
                        document.querySelector('.ex-block').style.display = 'block';
                        this.startExcercice(this.currentEx);
                    },500)
                },1500)
            },300)
        },
        end(){
            document.querySelector('.ex-glob-title').innerText="Congratulations"
            document.querySelector('.ex-block').style.display = 'none';
            setTimeout(()=>{
                this.loadScreen();
                setTimeout(()=>{
                    this.loadScreen();
                    setTimeout(() => {
                        this.$router.push('/home');
                    }, 500);
                },1500)
            },250)
        },
        exEngine(){
            this.start();
        }
  },
  data(){
    return {
        bgMusic:new Audio('/intro.mp3'),
        tickSound:new Audio('/tick.mp3'),
        endSound:new Audio('/end.mp3'),
        excercise:{},
        currentEx:0,
    }
  },
  created(){
    if(!this.getIsAuth && !this.getIsLoading) this.$router.push('/');
    this.excercise = this.getExcercises[this.$route.query.ex-1];

    this.endSound.volume = .8;
    this.bgMusic.loop = true;
    this.bgMusic.volume = .6;
    this.bgMusic.play();

    this.exEngine();
  },
  beforeDestroy(){
      this.bgMusic.pause();
  }
}
</script>

<style>
    @keyframes rotate{
        0%{
            transform:  rotateZ(0deg);
        }

        100%{
            transform:  rotateZ(360deg);
        }
    }

    @keyframes bounce {
        0%{
            transform: scale(1) ;
        }

        50%{
            transform: scale(.8) ;
        }

        100%{
            transform: scale(1) ;
        }
    }

    .ex-content{
        opacity: 1;
        transition: .5s;
    }

    .ex-content.active{
        opacity: 0;
    }

    .ex-page{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .ex-glob-title{
        font-size: 50px;
        /* color:#33c4b3; */
        text-align: center;
    }

    .ex-glob-title .glob-title-img{
        /* width: 120px;
        height: 120px;
        border-radius: 50%; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* border:4px solid #33c4b3; */
    }

    .ex-glob-title .glob-title-img img{
        width: 75%;
        /* filter: invert(69%) sepia(82%) saturate(402%) hue-rotate(117deg) brightness(86%) contrast(80%); */
    }

    
    .ex-block{
        display: none;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }

    .ex-title{
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        padding: 15px;
        background: #33c4b3;
        color:#fff;
    }

    .ex-photo{
        position: relative;
    }

    .ex-photo:before{
        content:'';
        display: block;
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.1);
        /* opacity: 0; */
        transition: .5s;
    }

    .ex-block.active .ex-photo:before{
        background: rgba(0,0,0,.7);
    }

    .countdown{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        font-size: 75px;
        color:#fff;
        font-weight: 500;
    }

    .ex-timer{
        position: absolute;
        left:0;
        top:0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color:#fff;
        opacity: 0;
        width: 100%;
        height: 100%;
    }

    .ex-timer-inner{
        position: relative;
    }

    .timer-circle{
        width: 200px;
        height: 200px;
        border:4px solid #fff;
        border-radius: 50%;
    }

    .timer-line{
        height: calc(100px - 9px);
        width: 4px;
        display: block;
        background: #fff;
        position: absolute;
        left:49%;
        top:9px;
        overflow: hidden;
        transform-origin: 50% 100%;
        transform:  rotateZ(0deg);
    }

    .ex-timer.active{
        opacity: 1;
    }


    .load-screen{
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        z-index: 2;
        background: rgb(235,235,235);
        opacity: 0;
        transition: .3s;
    }

    .load-screen.active{
        opacity: 1;
    }
</style>
