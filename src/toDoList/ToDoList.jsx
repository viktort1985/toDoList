import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Task } from "./Task/Task";
import classes from "./ToDoList.module.css" 

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask !== "") {
      setTasks([...tasks, { id: nanoid(), text: newTask, isEdit: false }]);
      setNewTask("");
    }
  }
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function toggleMode(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEdit = !task.isEdit;
        }
        return task;
      })
    );
  }

  function editTask(id, e) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.text = e.target.value
      }
      return task;
    });
    setTasks(updatedTasks)
  }



  return (
    <div className={classes.toDoList}>
      <h1> To-Do-List</h1>
      <input
        id="taskInput"
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className={classes.addButton} onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              index={index}
              text={task.text}
              deleteTask={deleteTask}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
              isEdit={task.isEdit}
              toggleMode={toggleMode}
              editTask={editTask}
             
            />
          );
        })}
      </ol>
    </div>
  );
}
