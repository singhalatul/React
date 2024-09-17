import {useContext ,createContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            todo:"todo msg",
            id:1,
            completed:false
        }
    ],
    addTodo :(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}