import {createContext, useReducer} from 'react';
import appReducer from './AppReducer';
import {v4} from 'uuid';

const initialState={
    task:[{
        id: '1',
        title:'title',
        description: 'description',
        done: false
    },{
        id: '2',
        title:'title2',
        description: 'description2',
        done: true
    }]
}
export const myContext= createContext(initialState);


export const ContextProvider=({children})=>{

    const [state, dispatch] = useReducer(appReducer,initialState);

    const addTask=(task)=>{
        //console.log(task)

        dispatch({type:"ADD", payload: {...task, id: v4()}})
    }

    const DeleteTask=(id)=>{
        dispatch({type:"DELETE", payload: id})
    }

    const ShowTask=({title})=>{
        dispatch({type:"FILTER", payload: title})
        const found= state.task.find(task=> task.title=== title)
        console.log(found)
    }
    return(
    <myContext.Provider value={{...state,addTask,DeleteTask,ShowTask}}>
        {children}
    </myContext.Provider>)
    
}