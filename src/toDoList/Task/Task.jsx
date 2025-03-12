    import React, { useState } from "react";
    import classes from "./Task.module.css" 


    export function Task({id, 
        index, 
        text,
        deleteTask,
        moveTaskUp, 
        moveTaskDown, 
        isEdit, 
        toggleMode,
        editTask
        }) {
            const[done, setDone] = useState(false)
            

    return (
        <>
        <li id={id} className={classes.li}>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span className={classes.text}  >
                {isEdit
                ? <input type="text" value={text} onChange={e => editTask(id, e)}/> 
                : <span className={done ? classes.completed : ""}>{text}</span>}
            </span>
            <div className={classes.buttonsWrapper}>
            <button className={classes.deleteButton} onClick={() => deleteTask(id)}>
            delete
            </button>
            <button className={classes.moveButton} onClick={() => moveTaskUp(index)}>
            &uarr;
            </button>
            <button className={classes.moveButton} onClick={() => moveTaskDown(index)}>
            &darr;
            </button>
            <button className={classes.editButton} onClick={() => toggleMode(id)}>
                {isEdit ? 'Save' : 'Edit'}
            </button>
            </div>
        </li>
        </>
    );
    }
