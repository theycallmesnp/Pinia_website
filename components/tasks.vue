<template>
  <div class="titles">
    <h1>{{ task.title }}</h1>
    <div class="icons">
      <i class="fa fa-trash-o" style="font-size: 36px" @click="taskStore.deleteTask(task.id)"></i>

      <i class="fa fa-heart" style="font-size: 36px" @click="taskStore.toggleFav(task.id)"></i>
    </div>
  </div>
</template>

<script setup>
import {useTaskStore} from "../store/counter.js"
const taskStore=useTaskStore();
const { task } = defineProps(["task"]); // accessing the prop from parent
</script>

<style  scoped>

.titles{
   
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    background-color:azure;
    column-gap: 100px;
    width:600px;
    border-radius: 25px;
    box-shadow: 15px 8px 7px 9px rgba(0, 0, 0, 0.1);
    padding: 4px 10px 10px 10px;
}
.icons{
    display: flex;
   
    column-gap: 56px;
}
</style>