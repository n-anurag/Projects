import React from 'react';

const Todolist = (props) => {
  return (
    <>
      <div className="list-item">
        {props.item}
        <span className="icons">
          <i
            className="fa-solid fa-trash"
            onClick={() => props.deleteItem(props.index)}
          ></i>
        </span>
      </div>
    </>
  );
};

export default Todolist;
