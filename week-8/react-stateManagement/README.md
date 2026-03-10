
STATE MANAGEMENT
step 1:  create context object 
=> react provides : 
=>provider -> provides the state through context 

=>every context object has 
1.context provider
2.context consumer

=> context provider id used to provide state through context object whereas the components  can consume the state through the context object 
=>context object is just like a channel , it does not have a state on its own 

1.create context object 

import {createContext } from 'react'

export const CounterContext = createContext()


3.a component can consume the state of context provider with useContext hook 


LIMITATIONS:
=>when we take more than 1 state and if a component is not using any state , it unnecessarily renders

=> solution is either use one state per one context file (its complex when we use in large applications ) or use REDUX OR zustand 


//UseRef hook :  used to access of reference of dom element directly 
=>import useRef 


=>closure is a func with its surrounding states called as a closure
=>its default function of every javascript function , every function and component has this default quality of javascript 
=>whether its js func or component , it first refers to inner func then goes to outer one , it will store the data in heap for temp purpose until the inner func is executed, whethere they are primitive or reference types 
=>ex:

function sum(){
    a=10;
    return functon(){
        let b = 20;
        return a + b;
    };
}

let res = sum()

console.log(sum())  => ans 30

function getSum(a,b){
    return a + b;

}
getSum(10,20,30)

function getSum(...a){  //rest parameter
    return a + b;

}
getSum(10,20,30)

//rest parameter can receive any number of arguments
function getSum(...a){  //rest parameter
    return a.reduce((x,y)=>x+y);
}
