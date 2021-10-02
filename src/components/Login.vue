<template>
  <div class="login flex center">
    <transition>
      <div v-if="loginError" class="login-error flex center">
        <img src="../assets/img/warning.svg" alt="" />
        &nbsp;
        <span>Login failed. Please try again.</span>
      </div>
    </transition>
    <span class="login-title">Sign in to <span class="ft">ft</span> crm</span>
    <div class="login-container" :class="{ short: showGoogleLogin }">
      <transition>
        <div v-if="showGoogleLogin">
          <button
            ref="ftGoogleSignInButton"
            class="login-btn flex center"
            @click="triggerGoogleLogin"
          >
            <div v-if="loading" class="loading">
              <div class="ball" />
              <div class="ball" />
              <div class="ball" />
              <div class="ball" />
            </div>
            <div v-else class="flex center">
              <img src="../assets/img/google.svg" class="g-logo" alt="" />
              <span>Sign In</span>
            </div>
          </button>
        </div>
      </transition>
      <transition>
        <div v-if="!showGoogleLogin">
          <form @submit.prevent="onSubmit">
            <vue-recaptcha
              v-if="!showGoogleLogin"
              ref="vueRecaptcha"
              site-key="6Lf29EQUAAAAALFiD7lhOASZ5cM3mb8mbGpKYKss"
              size="invisible"
              @verify="recaptchaVerified"
              @expire="recaptchaExpired"
              @fail="recaptchaError"
            />
            <fieldset>
              <div class="floating-label">
                <input
                  id="username"
                  v-model="username"
                  class="floating-input"
                  name="username"
                  type="text"
                  placeholder=" "
                />
                <span class="highlight" />
                <label id="emailLabel">Enter your email</label>
                <span class="focus-border" />
              </div>

              <div class="floating-label">
                <input
                  id="password"
                  v-model="password"
                  class="floating-input"
                  name="password"
                  type="password"
                  autocomplete="on"
                  placeholder=" "
                />
                <span class="highlight" />
                <label id="passwordLabel">Enter your password</label>
                <span class="focus-border" />
              </div>

              <button
                id="normalLoginButton"
                type="submit"
                class="login-btn flex center"
              >
                Sign In
              </button>
            </fieldset>
          </form>
        </div>
      </transition>
    </div>
    <p
      v-if="!showGoogleOnly"
      class="login-switcher"
      :class="{ padded: !showGoogleLogin }"
    >
      <button @click="showGoogleLogin = !showGoogleLogin">
        {{
          showGoogleLogin
            ? 'Login with Username / Password'
            : 'Login with Google'
        }}
      </button>
    </p>
  </div>
</template>

<script>
import { loginAdminCaptcha, googleLogin } from '../api/login';
import { setUser, getCookie, setCookie, googleOnly } from '../scripts/utils';
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'Login',
  components: {
    vueRecaptcha,
  },
  data() {
    return {
      loading: false,
      showGoogleLogin: false,
      loginError: false,
      username: '',
      password: '',
      showGoogleOnly: false,
    };
  },
  watch: {
    loginError(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.loginError = false;
        }, 3000);
      }
    },
    showGoogleLogin(newVal) {
      setCookie('ft-spf-google-login', newVal, true);
    },
  },
  async mounted() {
    this.showGoogleOnly = await googleOnly();
    this.showGoogleLogin =
      getCookie('ft-spf-google-login') === 'true' || this.showGoogleOnly;
  },
  methods: {
    async triggerGoogleLogin() {
      const googleUser = await this.$gAuth.signIn();
      if (!googleUser) {
        return null;
      }

      this.toggleLoading(true);
      this.performGoogleLogin(googleUser);
    },
    async performGoogleLogin(googleUser) {
      const res = await googleLogin(googleUser.getAuthResponse().id_token);

      this.loginError = !res.data.Success;
      if (res.data.Success) {
        this.loginSuccess(res.data.Data);
      }
    },
    async loginSuccess(data) {
      setUser(data);

      this.$router.push({ path: '/' });
    },
    async onSubmit() {
      if (!this.username.trim() || !this.password.trim()) {
        this.loginError = true;
        return;
      }
      grecaptcha.execute(); // eslint-disable-line
    },
    recaptchaVerified(response) {
      try {
        const recaptchaToken = response;

        loginAdminCaptcha({
          username: this.username,
          password: this.password,
          recaptchaToken,
        }).then((res) => {
          this.loginError = !res.data.Success;
          if (res.data.Success) {
            this.loginSuccess(res.data.Data);
          }
          this.$refs.vueRecaptcha.reset();
        });
      } catch (error) {
        console.error('Login error: ', error);
      }
    },
    recaptchaError(error) {
      console.error('Error with recaptcha:', error);
    },
    recaptchaExpired() {
      console.log('Recaptcha expired');
    },
    toggleLoading(show) {
      this.loading = show;
    },
  },
};
</script>

<style lang="less" scoped>
.floating-label {
  position: relative;
  margin-bottom: 40px;
}

.floating-input {
  color: #ffffff;
  font-size: 16px;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px rgba(95, 95, 95, 0.62);
  padding: 15px;
  padding-bottom: 20px;
  margin-top: 30px;
  text-align: center;
}

.floating-label label {
  color: #666666;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-label #emailLabel {
  left: 30%;
}

.floating-label #passwordLabel {
  left: 25%;
}

.floating-label #filterLabel {
  width: 100%;
  text-align: center;
}

#username:focus ~ label,
#username:not(:placeholder-shown) ~ label,
#username:-webkit-autofill ~ label {
  top: -20px;
  left: 35% !important;
  font-size: 12px;
  color: #ea528e;
  text-align: center;
}

#password:focus ~ label,
#password:not(:placeholder-shown) ~ label,
#password:-webkit-autofill ~ label {
  top: -20px;
  left: 32% !important;
  font-size: 12px;
  color: #ea528e;
  text-align: center;
}

input[type='search']:focus ~ label,
input[type='search']:not(:placeholder-shown) ~ label,
input[type='search']:-webkit-autofill ~ label {
  top: -20px;
  left: 0;
  font-size: 12px;
  color: #ea528e;
  text-align: center;
  width: 100%;
}

.floating-select:focus ~ label,
.floating-select:not([value='']):valid ~ label {
  top: -20px;
  left: 20px;
  font-size: 12px;
  color: #ea528e;
}

/* active state */

.floating-input:focus ~ .bar:before,
.floating-input:focus ~ .bar:after,
.floating-select:focus ~ .bar:before,
.floating-select:focus ~ .bar:after {
  width: 50%;
}

.floating-input ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ea528e;
  transition: 0.4s;
}

.floating-input:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
  left: 0;
}

fieldset {
  border: 0;
}

.btn-small,
.btn-normal {
  background: #313133;
  color: #fff;
  padding: 3px 20px;
  font-size: 11px;
  font-weight: 900;
  border-radius: 40px;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #000;
    transition: all 0.1s cubic-bezier(0.25, 0.1, 0.2, 1);
  }

  i {
    margin-right: 5px;
  }
}

.btn-normal {
  font-size: 12px;
  padding: 8px 20px;
}

.login-btn {
  font-family: inherit;
  margin-top: 20px;
  background: #fff;
  color: #262626;
  border: 0;
  width: 300px;
  height: 60px;
  border-radius: 100px;
  cursor: pointer;
  font-size: 18.5px;
  font-weight: 500;

  @media (min-width: 768px) {
    &:hover {
      background: #ea528e;
      color: #fff;
      transition: all 0.4s cubic-bezier(0.25, 0.1, 0.2, 1);
    }
  }

  span {
    padding-left: 15px;
  }

  .loading {
    padding-top: 10px;
    display: flex;
  }

  .loading .ball {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    animation: move1 1s ease-in-out infinite;
    margin: 0 3px;
  }

  .loading .ball:nth-child(1) {
    background: #4285f4;
    animation-delay: 0s;
  }

  .loading .ball:nth-child(2) {
    background: #ea4335;
    animation-delay: 0.2s;
  }

  .loading .ball:nth-child(3) {
    background: #fbbc05;
    animation-delay: 0.3s;
  }

  .loading .ball:nth-child(4) {
    animation-delay: 0.375s;
    background: #34a853;
  }

  @keyframes move1 {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }
  }
}

.flex {
  display: flex;

  &.center {
    align-items: center;
    justify-content: center;
  }
}

input,
button {
  outline: none;
}

@media (max-width: 767px) {
  .ant-modal {
    top: 0;
  }
}

.login {
  height: 100vh;
  flex-direction: column;

  .login-container {
    height: 235px;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &.short {
      height: 80px;
    }

    > div {
      transition-duration: 0.4s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: transform, opacity;

      &.v-leave-to {
        display: none;
      }

      &.v-enter {
        transform: translateY(10px);
        opacity: 0;
      }
    }
  }

  .g-logo {
    width: 25px;
  }

  .login-title {
    font-size: 30px;
    font-weight: 300;
  }

  .login-switcher {
    margin-top: 25px;

    &.padded {
      margin-top: 38px;
    }

    button {
      background: none;
      border: 0;
      color: #ea528e;
      font-size: 16px;
      cursor: pointer;
      font-weight: 300;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    border-bottom: solid 1px rgba(95, 95, 95, 0.62);
    box-shadow: 0 0 0 30px #2a2a31 inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  .login-error {
    font-size: 13px;
    font-weight: 300;
    background-color: #e94f35;
    color: #fff;
    border-radius: 15px;
    text-align: center;
    padding: 5px 20px;
    margin-bottom: 20px;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, opacity;

    &.v-leave-to,
    &.v-enter {
      transform: translateY(10px);
      opacity: 0;
    }
  }
}

.ft {
  font-weight: 500;
}
</style>
