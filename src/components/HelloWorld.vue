<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ ttt({ name: "12332", age: 12 }) }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface test {
  name: string;
  age: number;
  [propName: string]: any;
}
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    ttt(a: test): any {
      return `my name is ${a.name} and my age is ${a.age}`;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
