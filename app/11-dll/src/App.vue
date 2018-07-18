<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add() {
      this.$store.dispatch('increment', 10)
      console.log(this.$store.getters.count);
    }
  },
  created() {
    console.log(this.$store.getters.count);
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
  margin-top: 60px;
}
</style>
