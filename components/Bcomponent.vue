<template>
  <div>
    <hr />
    <h1>B Component</h1>
  <h2>Count : {{store.count}}</h2>
  <button @click="store.decrement">Decrement</button>
  </div>
</template>

<script setup>
 import {useCounterStore} from "~~/store/counter";
 const store= useCounterStore();
 console.log(store,"store2------>");
</script>

<style lang="scss" scoped>
</style>