<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ date }}</h1>
    <b-alert show>Default Alert</b-alert>

    <container fluid>
      <b-list-group class="main-container">
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    date: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  padding: 40px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-container {
  padding-left: 25%;
  padding-right: 25%;
}
</style>
