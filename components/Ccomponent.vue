<script setup>
//to access the store componenet
import {useTaskStore} from '../store/counter'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore();

taskStore.getTask();

console.log(taskStore.tasks,"taskstore");
const filter=ref('all');

</script>

<template>

    <!-- header -->
    <div class="header">
      
        <img src="../public/src/assets/download.jpeg" alt="">
        <h1>Pinia task</h1>
     
    </div>
   <!-- header -->
<addtask />

   <!-- buttton -->
    <div class="buttons">
        <button @click="filter='all'">All List</button>
        <button @click="filter='favs'"> Filter List</button>
    </div>

        <div class="loading" v-if="taskStore.isLoading">Loading task....</div>
<div class="task" v-if="filter==='all'"  >
    <h2>You have {{taskStore.totalCount}} tasks left to go</h2>
  <div v-for="i in taskStore.tasks" :key="i" >
 
     <tasks  :task="i"/>                 <!-- //define prop -->
  </div>
</div>

<div class="task"  v-if="filter==='favs'">
    <h2>You have {{taskStore.favCount}} tasks</h2>
  <div v-for="i in taskStore.favs" :key="i" >
 
     <tasks  :task="i"/>              <!-- //define prop -->
  </div>
</div>


</template>
<style>


.header{
    background-color: beige;
    display: flex;
    justify-content: space-evenly;
}
.header img{
    width:65px;
}
.task{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: center;
    align-items: center;
    row-gap: 22px;
    
}
button{
    width:75px;
    height:45px;
    background-color:beige;
    
}
.buttons{
    margin-top: 34px;
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
}
.loading{
    max-width: 640px;
    border:3px solid #ffd859;
    background:  #ffe9a0;
    color: black;
    padding: 5px 0;
    text-align: center;
    margin:30px auto;
}
</style>
