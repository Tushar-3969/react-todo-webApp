import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todo,setTodo]=useState([{task:"sample",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let [error,setError]=useState("");

    
    let addNewTask=()=>{
        if(newTodo){
            setTodo((todo)=>{
                return [...todo,{task:newTodo,id:uuidv4(),isDone:false}];
            });
        }else{
            return(
                setError("you must enter task")
            )
        }
        
        setNewTodo("");
    }

    let markAsDone = (id) => {
        setTodo((prevTask)=>(
            prevTask.map((todo)=>{
                if(todo.id==id){
                    return {...todo,
                    isDone:true
                    }
                }else{
                    return todo;
                }
                
            })
        ));
    }

    let updateValue=(e)=>{
        setNewTodo(e.target.value);
    }

    let deleteTodo=(id)=>{
       setTodo(
        (prevTodo)=>
            prevTodo.filter((todo)=> todo.id !=id )
        );
    }

    return (
        <div className="Todo">
            <h3>To-do app</h3>
            <p className="para">{error}</p>
            <input type="text" placeholder="Enter a Task" value={newTodo} onChange={updateValue}/> &nbsp; &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <ul>
                {
                todo.map(
                    (todo)=>
                            <li key={todo.id}><span style={{
                                textDecoration:todo.isDone ? "line-through" : "none",fontSize:"1.2rem"}}
                                ><b>{todo.task} </b></span>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                            </li>
                    )
                } 
            </ul>
        </div>
    )
}

