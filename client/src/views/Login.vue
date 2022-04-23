<template>
  <div v-if="!getIsLoading">
    <div class="login-page log-block">
      <div class="login-form">
        <div
          class="abs-img1"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img src="/img/img1.png" alt="" />
        </div>

        <div
          class="abs-img2"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos="fade-left"
        >
          <img src="/img/img2.png" alt="" />
        </div>

        <div class="login-title">Login</div>

        <div class="log-error">
          <div v-if="getUserErrors.username">{{ getUserErrors.username }}</div>
        </div>

        <div class="simple-input">
          <input type="text" v-model="loginUsername" placeholder="Username" />
        </div>

        <div @click="loginHandler" class="login-btn">Go</div>
      </div>

      <div class="open-btn" v-bind:class="{ isOpen: isReg }">
        <span @click="openReg">+</span>

        <div class="register-page log-block" v-bind:class="{ isOpen: isReg }">
          <div class="register-page-inner">
            <div class="login-title">Register</div>

            <div class="log-error">
              <div v-if="getUserErrors.username">
                {{ getUserErrors.username }}
              </div>
            </div>

            <div class="simple-input">
              <input
                v-model="registerUsername"
                type="text"
                placeholder="Username"
              />
            </div>

            <div @click="registerHandler" class="login-btn">Go</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      isReg: false,
      loginUsername: '',
      registerUsername: '',
      clickSound: new Audio('/click.mp3'),
    };
  },
  computed: mapGetters(['getUserErrors', 'getIsLoading', 'getIsAuth']),
  methods: {
    ...mapActions(['login', 'register', 'clearErrors', 'setErrors']),
    openReg() {
      this.isReg = !this.isReg;
      this.clearErrors();
    },
    loginHandler() {
      if (this.loginUsername === '')
        this.setErrors({ username: 'Username is required' });
      else {
        const user = {
          username: this.loginUsername,
          password: '1111',
        };

        this.login(user).then(() => {
          this.$router.push('/home');
          this.clickSound.play();
        });
      }
    },
    registerHandler() {
      const user = {
        username: this.registerUsername,
      };

      this.register(user).then(() => {
        this.$router.push('/home');
        this.clickSound.play();
      });
    },
  },
  created() {
    if (this.getIsAuth && !this.getIsLoading) this.$router.push('/home');
  },
};
</script>

<style>
.abs-img1 {
  position: absolute;
  right: calc(100% + 85px);
  z-index: 3;
  width: 180px;
  bottom: -130px;
}

.abs-img2 {
  position: absolute;
  left: calc(100% + 85px);
  z-index: 3;
  width: 235px;
  bottom: -95px;
}

.abs-img2 img {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.log-error {
  font-size: 14px;
  display: flex;
  height: 14px;
  margin-bottom: 2px;
  font-weight: 500;
}

.login-page .log-error {
  color: #41c8c5;
}

.register-page .log-error {
  color: #fff;
}

.log-block {
  padding: 60px 40px;
  padding-bottom: 30px;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  position: relative;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-title {
  font-size: 38px;
  font-weight: 700;
  color: #41c8c5;
  margin-bottom: 35px;
  text-transform: uppercase;
  position: relative;
}

.login-title:before {
  content: '';
  width: 5px;
  height: calc(100% + 10px);
  position: absolute;
  left: -40px;
  top: -5px;
  display: block;
  background: #41c8c5;
}

.register-page .login-title {
  color: #fff;
}

.register-page .login-title:before {
  background: #fff;
  left: -48px;
}

.simple-input {
  width: 100%;
  margin-bottom: 25px;
  position: relative;
}

.log-block .simple-input:before {
  content: '';
  position: absolute;
  left: 0;
  top: 49%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: block;
  background: url('/img/user.png') no-repeat center;
  background-size: contain;
  filter: invert(66%) sepia(75%) saturate(359%) hue-rotate(129deg)
    brightness(90%) contrast(87%);
}

.register-page .simple-input:before {
  filter: invert(100%);
}

.simple-input input {
  border: none;
  border-radius: none;
  border-bottom: 1px solid #41c8c5;
  width: 100%;
  font-size: 26px;
  line-height: 60px;
  font-weight: 400;
  padding-left: 50px;
  color: #41c8c5;
  font-weight: 300;
  background: none;
}

.register-page input {
  border-color: #fff;
  font-weight: 300;
  color: #fff;
  display: none;
}

.register-page.isOpen input {
  display: block;
}

.simple-input input::placeholder {
  font-weight: 300;
  transition: 0.2s;
  color: #41c8c5;
}

.register-page input::placeholder {
  font-weight: 300;
  color: #fff;
}

.simple-input input:focus::placeholder {
  opacity: 0;
}

.login-btn {
  height: 90px;
  width: 90px;
  background: none;
  border: 5px solid #41c8c5;
  color: #41c8c5;
  font-size: 32px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 50%;
  align-self: center;
  cursor: pointer;
  transition: 0.4s;
}

.login-page .login-btn:hover {
  background: #41c8c5;
  color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.register-page .login-btn {
  color: #fff;
  border-color: #fff;
  display: none;
}

.register-page.isOpen .login-btn {
  display: flex;
}

.register-page .login-btn:hover {
  background: #fff;
  color: #41c8c5;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.4);
}

.open-btn {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #41c8c5;
  color: #fff;
  font-size: 60px;
  position: absolute;
  right: -60px;
  top: 25px;
  cursor: pointer;
  transition: right 0.5s, top 0.5s, width 0.5s, height 0.5s, border-radius 0.3s,
    box-shadow 0.5s;
  z-index: 2;
  overflow: hidden;
}

.open-btn span {
  transition: 0.4s;
  display: grid;
  position: absolute;
  /* right:42px;
        top:30px; */
  right: 0;
  top: 0;
  cursor: pointer;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.open-btn.isOpen {
  width: calc(100% + 20px);
  top: 10px;
  height: 375px;
  border-radius: 10px;
  right: -10px;
  z-index: 2;
  cursor: default;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.open-btn.isOpen span {
  transform: rotate(45deg);
  top: -25px;
  right: -25px;
  /* width: 70px;
        height: 70px; */
}

.login-page {
  background: #fff;
}

/* .login-page:before{
        content:'';
        display: block;
        position: absolute;
        width: calc(100% - 30px);
        height: 8px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: #ddd;
        left:15px;
        bottom:100%;
    } */

.register-page {
  padding-top: 0;
  position: absolute;
  left: 100%;
  top: 59%;
  transform: translate(-50%, -50%);
  z-index: 2;
  visibility: hidden;
  box-shadow: none;
  transition-delay: 0;
}

.register-page.isOpen {
  left: 50%;
  opacity: 1;
}

.register-page-inner {
  opacity: 0;
  transition: opacity 0.5s 0.1s, visibility 0s;
  display: flex;
  flex-direction: column;
}

.register-page.isOpen .register-page-inner {
  opacity: 1;
  visibility: visible;
}
</style>
