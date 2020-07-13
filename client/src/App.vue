<template>
    <div id="app" class="wrapper">
            <router-view/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name : 'App',
        components:{},
        methods:{
          ...mapActions(['fetchUser'])
        },
        created(){
          this.fetchUser()
          // .then(res => {
          //   if(res.data.user && this.$route.path != '/home') this.$router.push('/home');
          // }).catch(()=>{
          //   if (this.$route.path != '/') this.$router.push('/');
          // })
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  a,
  button,
  input,
  textarea {
    border: none;
    box-shadow: none;
    border-radius: 0;
    -webkit-appearance: none;
    outline: none;
  }

  html{
    height: 100%;
  }

  body {
    color: #232323;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    height: 100%;
            background: rgba(0,0,0,.04);
  }

  body * {
    background-attachment: scroll;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
    /* background: url(/img/bg.jpg) no-repeat center;
    background-size: contain; */
    position: relative;
    overflow: hidden;
  }

  .container{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }


</style>