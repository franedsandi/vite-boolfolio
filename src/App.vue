<script>
import Header from './components/header.vue';
export default{
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      title: "Francisco's Projects"
    }
  },
  methods: {
  },mounted(){
  }
}
</script>

<template>
  <Header/>
  
  <div class="container">
    <h1>{{title}}</h1>
    <router-view/>
  </div>
</template>

<style lang="scss" >

</style>
