import React from 'react';
import './CompletedTasks.css';

function CompletedTasks(props) {
  let itemsToRender = props.selectedItems;
  console.log('itemsToRender', itemsToRender);

  return (
    <div>
      <p className="section-heading">I did it!</p>
      <div className="wrapper">
        {itemsToRender &&
          itemsToRender.map((item, index) => (
            <div key={item.id} className="itemblock">
              {item.todo}
            </div>
          ))}
      </div>
    </div>
  );
}
export default CompletedTasks;
