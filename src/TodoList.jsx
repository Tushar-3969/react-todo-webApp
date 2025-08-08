import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todo,setTodo]=useState([{task:"sample",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");
    
    let addNewTask=()=>{
        console.log("we have to add new task in Todo");
        setTodo((todo)=>{
            return [...todo,{task:newTodo,id:uuidv4()}];
        });
        setNewTodo("");
    }

    let updateValue=(e)=>{
        setNewTodo(e.target.value);
    }

    let deleteTodo=(id)=>{
       setTodo(todo.filter((todo)=> todo.id !=id ));
    }

    return (
        <div className="Todo">
            <h3>To-do app</h3>
            <input type="text" placeholder="Enter a Task" value={newTodo} onChange={updateValue}/> &nbsp; &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <ul>
                {
                todo.map(
                    (todo)=>
                            <li key={todo.id}><span>{todo.task} </span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            </li>
                    )
                } 
            </ul>
        </div>
    )
}

