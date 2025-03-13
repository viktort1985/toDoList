// Он будет представлять собой список запланированных дел.
//  В этот список можно добавлять дела.
//  Можно удалять дела.
//  Можно также помечать дела сделанными, 
// в этом случае их текст должен стать перечеркнутым. 
// Можно также редактировать дела.
// Something new

import React from 'react';
import './App.css';
import {ToDoList} from './toDoList/ToDoList'



export default function App() {
  return (
    <>
      <ToDoList/>
    </>
  );
}



