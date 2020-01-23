Vue.component('task-item', {
    template: '<li>{{ task.content }}</li>',
    props: ['task']
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        tooltip: 'Hello world!!! ' + new Date().toLocaleString(),
        seen: true,
        tasks: [
            {id: 1, content: "Learn JavaScript"},
            {id: 2, content: "Learn Vue"},
            {id: 3, content: "Build something awesome"}
        ],
        inputText: 'This variable was set through code. Change its value in the input below.'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})