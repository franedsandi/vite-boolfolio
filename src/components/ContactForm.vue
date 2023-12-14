<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'ContactsForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      success:false,
      errors: {
        name: [],
        email: [],
        subject: [],
        message: [],  
        
      }
    };
  },
  methods: {
    sendForm() {
      console.log('sendform');
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      axios.post(store.apiUrl + 'send-email', data)
        .then(response => {
          console.log(response.data);
          this.success = response.data.success;
          if(!this.success){
            this.errors = response.data.errors;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted() {},
  computed: {},
};
</script>


<template>
  <form v-if="!success" @submit.prevent="sendForm()">
    <div>
      <label for="name" >Name</label>
      <input v-model="name" type="text" name="name" id="name" />
      <p v-for="error in errors.name"> {{error}}</p>
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="text" name="email" id="email" />
      <p v-for="error in errors.email"> {{error}}</p>
    </div>
    <div>
      <label for="subject">Subject</label>
      <input v-model="subject" type="text" name="subject" id="subject" />
      <p v-for="error in errors.subject"> {{error}}</p>
    </div>  
    <div>
      <label for="message">Message</label>
      <textarea v-model="message" name="message" id="message"></textarea>
      <p v-for="error in errors.message"> {{error}}</p>
    </div> 
    <div>
      <button type="submit">Send</button>
    </div>  
  </form>
  <div v-else>Message sent</div>

</template>



<style lang="scss" scoped>
form{
  color:black;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  label{
    display: block;
    margin-bottom: 10px;
  }
  input, textarea{
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button{
    color:white;
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    background-color:black ;

  }
}
</style>