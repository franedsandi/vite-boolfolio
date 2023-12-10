<script >

import axios from 'axios';
import { store } from '../data/store';
import cards from '../components/cards.vue';
import Loader from '../components/loader.vue';
import Navigator from '../components/Navigator.vue';

export default {  
  name: 'Projects',
  components:{
    cards,
    Loader,
    Navigator
  },
  data(){
    return {
      title: 'my projects',
      isLoaded: false,
      paginator:{
        links: [],
        firstPageUrl:'',
        lastPageUrl:'',
        currentPage:'',
        lastPage:'',
      }
      
    }
  },
  methods:{

    getApi(endpoint){
      this.isLoaded = false;
      axios.get(endpoint)
        .then(results =>{
          this.isLoaded = true;
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPageUrl = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.currentPage = results.data.current_page;
          this.paginator.lastPage = results.data.last_page;
        })
    }

  },
  mounted(){
    this.getApi(store.apiUrl + 'Projects');
  }
}

</script>

<template>

  <Loader v-if="!isLoaded" />
  <div v-else class="container d-flex flex-wrap justify-content-center gap-3"> 
    <cards/> 
    <Navigator
      :paginator="paginator"
      @callApi="getApi"
    />
  </div>

    

</template>

<style lang="scss">

</style>