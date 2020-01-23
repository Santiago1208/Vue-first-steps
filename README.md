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

![image-20200123154641706](C:\Users\santiago.restrepo\AppData\Roaming\Typora\typora-user-images\image-20200123154641706.png)

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

It is supposed that the parent component define an structure (JSON object) of a `todo` with the text attribute.

[HTML simulating the parent component]

```html
<ol>
	<task-item v-for="task in tasks"
               :key="task.id" 
               v-bind:task="task"/>
</ol>
```

