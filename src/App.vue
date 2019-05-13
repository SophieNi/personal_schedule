<template>
  <div id="app">
    <Banner></Banner>
    <router-view/>
  </div>
</template>

<script>
import Banner from './components/Header'

export default {
  name: 'App',
  data () {
    return {
      toHome: false,
      toMain: false
    }
  },
  components: {
    Banner
  },
  methods: {
    navigateToHome: function () {
      console.log('call Home')
      this.$router.go({
        path: '/'
      })
    },
    navigateToMain: function () {
      this.$router.go({
        path: '/main'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
