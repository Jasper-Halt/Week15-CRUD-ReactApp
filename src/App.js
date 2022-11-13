import React from "react";                      //imports React
import "./App.css";                             //imports the CSS for the app.
import TodoList from "./components/TodoList";   //imports "To Do List."  Additional components have already been imported in "TodoList."

function App() {
  return (
    <div className="todo-app">
      <TodoList />                            
    </div>                                    //instantiates "To Do List"
  );
}

export default App;                         //starts app.