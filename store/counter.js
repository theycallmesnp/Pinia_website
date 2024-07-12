import { defineStore } from "pinia";

// export const useCounterStore=defineStore("counter",()=>{
//     const count =ref(5);
//     function increment(){
//         count.value++
//     }
//     function decrement(){
//         count.value--
//     }
//      return{count,increment,decrement}
// }

// )


//define to store   

// static data
// export const useTaskStore = defineStore("taskStore", {
//     state: () => ({
//         tasks: [
//             {
//                 id: 1, title: "HarryPotter", isFav: false
//             },
//             { id: 2, title: "Spiderman", isFav: true },
//             { id: 3, title: "Superman", isFav: true },
//             { id: 4, title: "Batman", isFav: false },

//         ],
//         name: "shravan"
//     }


//     ),
//     getters: {
//         favs() {
//             return this.tasks.filter(i => i.isFav)
//         },

//         // to check how many fav and all are there
//         favCount() {
//             return this.tasks.reduce((p, c) => {
//                 return c.isFav ? p + 1 : p
//             }, 0)
//         },
//         totalCount() {
//             return this.tasks.length;

//         },

//     },
//     actions: {

//         addTask(task) {
//             console.log(task, "new-task");
//             return this.tasks.push(task);


//         },
//         deleteTask(id){
//               this.tasks=this.tasks.filter(t=>{
//                 return t.id !==id
//               })
//         },
//         toggleFav(id){
//             const task=this.tasks.find(t=>t.id===id);
//             console.log(task,"fav-task");
//             task.isFav= !task.isFav
//             console.log(task.isFav,"djdjdjddj");
//         }
//     }


// })



// DATA DYNAMIC
export const useTaskStore = defineStore("taskStore", {

    state: () => ({
        tasks: [

        ],
        name: "shravan",
        isLoading: false
    }


    ),
    getters: {
        favs() {
            return this.tasks.filter(i => i.isFav)
        },

        // to check how many fav and all are there
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount() {
            return this.tasks.length;

        },

    },
    actions: {
        async getTask() {
            this.isLoading = true
            let data = await fetch('http://localhost:3000/tasks');

            const res = await data.json();
            this.tasks = res;
            this.isLoading = false
        },

        
        async addTask(task) {
            console.log(task, "new-task");
            this.tasks.push(task);
            let result = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),  // <-- Problematic line
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (result.error) {
                console.log(result.error);
            }
        },
        
        async deleteTask(id) {
          
            let result = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',
            
            });
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
            if(result.error){
                console.log(result.error);
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id);
            console.log(task, "fav-task");
            task.isFav = !task.isFav
            let result = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({isFav:task.isFav}),  // <-- Problematic line
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (result.error) {
                console.log(result.error);
            }
        }
    }


})