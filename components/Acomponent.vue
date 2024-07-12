<script setup>
           import {useCounterStore} from "~~/store/counter";
           const store= useCounterStore();
           console.log(store,"storeeeeeeee--->");
</script>



<template>
    <div>
  <h1>A Component</h1>
  <h2>Count : {{store.count}}</h2>
  <button @click="store.increment">Increment</button>
    </div>
</template>



<style lang="scss" scoped>

</style>