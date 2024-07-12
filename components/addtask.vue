<template>
    <div  >
   <form @submit.prevent="handleSubmit">
  <input type="text" placeholder="add the task" v-model="newTask">
  <button >Add</button>
   </form>
    </div>
</template>

<script setup>
import {useTaskStore} from '../store/counter'
const taskStore=useTaskStore();
const newTask =ref('');

const handleSubmit=()=>{
    console.log(newTask.value,"val");
if(newTask.value.length>0){
  
taskStore.addTask({
    title:newTask.value,
    isFav:false,
    id:(Math.floor(Math.random()*10000)).toString()
})
newTask.value=''

}

}
 
</script>

<style >

</style>