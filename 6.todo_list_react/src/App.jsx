import React, { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  // Function to add a todo item
  const addList = (inputText) => {
    if (inputText.trim() !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  // Function to delete a todo item by index
  const deleteListitem = (index) => {
    const updatedList = listTodo.filter((_, i) => i !== index);
    setListTodo(updatedList);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          {/* Input Component */}
          <Todoinput addList={addList} />

          {/* List Rendering */}
          <ul>
            {listTodo.map((listItem, i) => (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListitem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
