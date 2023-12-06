<script>
import axios from 'axios';
import {store} from './data/store';
export default{
  name: 'App',
  data(){
    return {
      title: 'Projects'
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'Projects')
      .then(results => {
        console.log(results.data);
      });
    }
  },mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div></div>
  </div>
</template>

<style lang="scss" >

</style>
