<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/loader.vue'
export default {
  name:'project',
  data(){
    return{
      project:{},
        isLoaded: false
    }
  },
  components:{
    Loader
  },
  methods:{
    getProject(slug){
        axios.get(store.apiUrl + 'Projects/' + slug )
          .then(res => {
            console.log(res.data.project);
            if(!res.data.success){
              this.$router.push({ name: 'Error-404' })
            }
            this.isLoaded = true;
            this.project = res.data.project;
            
          },
        )
      }
    },
  mounted(){
    this.getProject(this.$route.params.slug);
  },
  computed:{
      formattedDate(){
        const date = this.project.publication_date ? new Date(this.project.publication_date) : new Date();

        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }

        return new Intl.DateTimeFormat(navigator.language, options).format(date)
      }
  }
}
</script>

<template>
  <Loader v-if="!isLoaded" />
  <div  v-else class="container border-5 rounded-3"></div>
  <span>{{ formattedDate  }}</span>
  <h1 class="text-center">{{ project.title }}</h1>
  <p class="fs-2">{{project.description}}</p>
  <span class="badge text-bg-warning fs-5" v-if="project.type">{{ project.type.name }}</span>
  <div class="div gap-3">
  <hr>
  <span v-for="technology in project.technologies" class="badge text-bg-success fs-6" :key="technology.id">{{ technology.name }}</span>
</div>
  

</template>



<style>

</style>