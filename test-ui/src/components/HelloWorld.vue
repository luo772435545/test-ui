<template>
  <div class="hello">
      <a @click="wor">1</a>
    <ui-button :className="success">123</ui-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      success:'success'
    }
  },
  methods:{
    wor(){
      let _this=this;
      this.$loadding();
      setTimeout(()=>{
        _this.$loadding.close()
      },1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
