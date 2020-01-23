# Vue First Steps

## Description

This repository is the notebook were you can find the main concepts of Vue.js.

## Content

### The basics

- `{{ variableInDataSection }}`: Allows to bind the element's text to a variable declared in the data section.
- `v-bind<:property>=""` : Allows to bind the element's property to a variable declared in the data section.

- `v-if = "condition"` : Allows to render conditionally the element. If `condition == true`, the element will render; otherwise, it will not.}
- `v-for="(item, index) in array" :key="index"`:  Allows to iterate over the array declared in the data section. The `:key` token is necessary to identify the element to be rendered in the DOM. It is useful for Vue to render efficiently.
- `v-on:<event>="methodName"`: Allows to call the method specified in the methods section when the event was triggered.
- `v-model="variableName"`: Allows to bind bidirectionally the data and the form. The data stored in the variable will reflect in the form, and the data modified in the form will be reflected in the variable.

### Components

All interfaces could be decomposed in a tree of components.

![vue-components](https://es.vuejs.org/images/components.png)

*Image extracted from https://es.vuejs.org/v2/guide/index.html#*

A basic component its defined by the name and a JSON object defining its structure (template, props) and behavior (methods).

[JavaScript]

```javascript
// Defines a new component called todo-item
Vue.component('componentName', {
  template: 'HTML code',
    props: ['listOfProps', 'separatedWithComma']
})
```

[HTML]

```html
<ol>
  <!-- Creates an instance of the component todo-item -->
  <todo-item></todo-item>
</ol>
```

#### How to pass properties from a parent component to child one?

The answer is defining the `props` section of the component as below

[JavaScript]

```javascript
Vue.component('task-item', {
  // The component todo-item, now supports a
  // "property", which could be seen like an attribute.
  // That property is called todo.
  props: ['task'],
  template: '<li>{{ task.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {id: 1, content: "Learn JavaScript"},
            {id: 2, content: "Learn Vue"},
            {id: 3, content: "Build something awesome"}
        ]
    }
})
```

It is supposed that the parent component define an structure (JSON object) of a `task` with the text attribute.

[HTML simulating the parent component]

```html
<ol>
	<task-item v-for="task in tasks"
               :key="task.id" 
               v-bind:task="task"/>
</ol>
```

### The Vue instance

When you write 

```javascript
var vm = new Vue({
  // options
})
```

You will understand that it will execute a new instance of Vue, called the root instance. Similarly, when you create components, it will execute new instances of Vue different of the root instance, allowing to configure options in similar way you will do in the root instance (check the API for more details https://es.vuejs.org/v2/api/#Options-Data). So the application structure for a To Do List will be as shown below

```text
Root Instance
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

#### Data and methods

When you declare the `data` option in a Vue instance, its content will be registered in the **reactive system** of Vue. Hence, when you change the value of the variables in the `data` option, the UI will **react** to those changes to reflect on it.

The only way to avoid Vue's changes tracking is **creating a object outside of the instance** or **using `Object.freeze(obj)`**.

On the other hand, a Vue instance defines their own methods and properties and, supports methods created by the user. The first one are identified with the prefix `$`. For more details about instance's methods and properties, check the docs https://es.vuejs.org/v2/api/#Instance-Properties.

#### Instance lifecycle

When an instance is created, some processes will have to be executed to *give life* to the instance. Some processes could be overwritten for the user to perform custom operations. Those processes are called hooks. Examples of hooks:

- created
- mounted
- updated
- destroyed

Code example:

```javascript
var vm = new Vue({
            data: {
              a: 1
            },
            created: function () {
              // `this` is a reference to vm
              console.log('a es: ' + this.a)
            }
         })
```

![Vue-instance-lifecycle](https://es.vuejs.org/images/lifecycle.png)

*Image extracted from https://es.vuejs.org/v2/guide/instance.html*

