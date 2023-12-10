<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>

<template>
  <div class="header d-flex justify-content-center py-3">
    <ul class="nav nav-pills gap-3">
      <li><router-link :to="{name:'Home'}">Home</router-link></li>
      <li><router-link :to="{name:'Contacts'}">Contacts</router-link></li>
      <li><router-link :to="{name:'About'}">About</router-link></li>
      <li><router-link :to="{name:'Projects'}">Projects</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>