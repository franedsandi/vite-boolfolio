<script>
import {store} from './data/store';
import axios from 'axios';
import card from './components/cards.vue';
export default{
  name: 'App',
  components: {
    card,
  },
  data(){
    return {
      title: 'Projects',
      store
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'Projects')
      .then(results => {
        store.projects = results.data;
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
    <div class="container d-flex flex-wrap justify-content-center gap-3">
      <card/> 
    </div>
  </div>
</template>

<style lang="scss" >

</style>
