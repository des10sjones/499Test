// src/components/FacultyDashboard/ToDoList.js
import React, { useState } from 'react';
import { todoItems } from '../../models/mockData';

function ToDoList() {
  const [items, setItems] = useState(todoItems);

  const handleComplete = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, completed: true } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="section">
      <h3>To-Do List</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} - {item.completed ? 'Completed' : 'Pending'}
            {!item.completed && (
              <button onClick={() => handleComplete(item.id)}>Mark as Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
