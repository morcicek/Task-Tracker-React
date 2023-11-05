import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaRegFaceFrownOpen } from 'react-icons/fa6';
const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    const filteredTask = tasks.filter((el) => el.id !== id);
    setTasks(filteredTask);
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, reminder: !item.reminder } : item
      )
    );
  };
  if (tasks.length) {
    return (
      <>
        {tasks.map((item) => {
          const { text, day, id, reminder } = item;
          return (
            <div key={id} className="card m-3">
              <div
                className={`card-body ${reminder ? 'reminder' : ''}`}
                onDoubleClick={() => handleToggle(id)}
              >
                <h3>{text}</h3>
                <p>{day}</p>
              </div>
              <AiFillCloseCircle
                className="icon fs-4"
                color="red"
                onClick={() => deleteTask(item.id)}
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <div className="card m-3">
        <div className="card-body text-center">
          <h4>
            There is no task to show{' '}
            <span className="mx-2">
              <FaRegFaceFrownOpen className="fs-3" />
            </span>
          </h4>
        </div>
      </div>
    );
  }
};

export default TaskList;
