<script setup>
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.js'

function refresh (value) {
    window.sessionStorage.setItem('rollup-plugin-i18n-auto-demo__locale', value.target.value)
    window.location.reload(true)
}
</script>

<template>
  <div>
    <select name="localLang" id="localLang" v-model="$i18n.locale" @change="refresh">
      <option value="zh">zh</option>
      <option value="en">en</option>
    </select>
    <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    {{test}}
    <!-- 注释 -->
    <!-- {{$t('0')}} -->
    我来了
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
