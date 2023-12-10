<script>
export default{
  name: 'App',
  components: {},
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
  
  <div class="container">
    <h1>{{title}}</h1>
    <router-view/>
  </div>
</template>

<style lang="scss" >

</style>
