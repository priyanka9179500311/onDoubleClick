//import area

import React from 'react';
import ReactDOM from 'react-dom';
//create an functional Component
function MyElement(){
    //A Functional Component always return HTML (JSX)
    return<button onDoubleClick={console.log('Clicked')}>Submit!</button>
}
//lets Define a function
function hello(){
    alert('Hello React');
}

//lets Create an element inside a constant
const x = <button onDoubleClick={hello}>Submit!</button>


ReactDOM.render(x,document.getElementById('root'));