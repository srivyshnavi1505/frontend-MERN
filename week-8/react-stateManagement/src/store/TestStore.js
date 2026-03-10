import {create} from 'zustand'

//create store 
export const useTest = create((set)=>({

    //state 
    x : 10,
    y : 9,

    user:{
        name : "ram",
        age : 21
    },

    //functions to modify state 
    incrementX: () => set((state)=>({x: state.x + 1})),

    decrementX: () => set((state)=>({x: state.x - 1})),

    incrementY : () => set((state)=>({y: state.y + 1})),

    incrementXbyValue : (v) => 
        set((state)=>({x: state.x + v})),

    updateUser: (newName) => 
        set((state)=>({
            user:{
                ...state.user,
                name:newName,
                age:30
            }
        }))
}))