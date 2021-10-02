<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
body {
  margin: 0;
}

div[id*='@ft/backoffice-login'] {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #2a2a31;
  color: #fff;

  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
}

.grecaptcha-badge {
  visibility: hidden;
}
</style>
