import React, { useState } from 'react';
import './TodoList.css';
import Checkbox from '@mui/material/Checkbox';

function TodoList(props) {
  let initialState = {
    completed: true,
    id: 0,
    todo: 'Do something nice for someone I care about',
    userId: 26,
  };
  const [selectedItems, setSelectedItems] = useState([0]);
  let todolistData = props.todotasks;
  //console.log('todolistData', todolistData);

  const handleChange = (item, event) => {
    console.log('id:', item);
    if (event.target.checked == true) {
      let updatedObj = [...new Set(selectedItems)];
      setSelectedItems([...updatedObj, item]);
    } else if (event.target.checked == false) {
      let updatedObj = selectedItems;
      updatedObj.splice(updatedObj.indexOf(item), 1);
      updatedObj = [...new Set(selectedItems)];
      setSelectedItems(updatedObj);
    }
    props.onSelectLanguage(selectedItems);
  };

  return (
    <div>
      <ul className="todolist">
        {todolistData &&
          todolistData.map((item, index) => (
            <li key={item.id}>
              <Checkbox
                size="large"
                color="success"
                onClick={(event) => handleChange(item, event)}
              />
              <span>{item.todo}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
