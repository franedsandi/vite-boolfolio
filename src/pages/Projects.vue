<script>
import {store} from '../data/store';
import axios from 'axios';
import card from '../components/cards.vue';
import header from '../components/header.vue';

export default {
  name:'Projects',
  data(){
    return{
      store
    }
  },
  components:{
    card
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'Projects')
      .then(results => {
        store.projects = results.data;
      });
    }
  },
  mounted(){
    this.getApi();
  },
  computed:{}
}
</script>

<template>
  <h1>Projects
  </h1>
  <div class="container d-flex flex-wrap justify-content-center gap-3"> 
    <card/> 
  </div>
</template>



<style>

</style>