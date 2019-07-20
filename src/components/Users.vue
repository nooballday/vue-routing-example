<template>
  <div>
    <h2>hey i am users!</h2>
    <p>Team id is {{ $route.params.teamId }}</p>
    <b-button variant="outline-primary" @click="goHome">Go Home</b-button>
  </div>
</template>

<script>
export default {
  name: "user",
  watch: {
      '$route' (to, from){
        //   alert(to.params.teamId)
      }
  },
  created(){
    //   alert(this.$route.params.teamId)
  },
  methods: {
      goHome(){
          this.$router.push('/')
      }
  }
};
</script>
