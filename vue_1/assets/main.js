// початок компонента


// кінець компонента

const App = {
    data() {
        return {
            todoList: [
                {
                    text: 'To buy milk',
                    isDone: true,
                },
                {
                    text: 'Create project',
                    isDone: false,
                },
                {
                    text: 'Clean my room',
                    isDone: false,
                },

            ],
            taskText: ''

        }
    },
    methods: {
        addToDo() {
            if (this.taskText !== '') {
                this.todoList.push({
                    text: this.taskText,
                    isDone: false,
                }) 
                
            }
            this.taskText = '';
        },
        markDone(ind) {
            this.todoList[ind].isDone = true;
        },
    }
  

}
 Vue.createApp(App).mount("#app")