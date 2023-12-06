<script>
import {store} from '../data/store';

export default {
  name: 'card',
  props: {
    project: Object
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <div class="card" style="width: 18rem;" v-for="project in store.projects" :key="project.id">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <p class="card-text">{{ project.publication_date }}</p>
    </div>
  </div>
</template>

<style>

</style>