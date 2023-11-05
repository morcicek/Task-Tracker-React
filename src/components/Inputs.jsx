import React, { useState } from 'react';
import Button from './Button';

const Inputs = ({ setTasks, tasks, showInputs }) => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.length || !day.length) {
      alert('Please add your task!');
      return null;
    }
    const newTask = {
      text: task,
      day: day,
      reminder: reminder,
    };
    setTasks([...tasks, newTask]);
    setTask('');
    setDay('');
    setReminder(false);
  };

  if (showInputs) {
    return (
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Day & Time
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-check d-flex justify-content-evenly">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Set Reminder
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value={reminder}
            checked={reminder}
            id="flexCheckDefault"
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-secondary w-50 " onClick={handleSubmit}>
            Save Task
          </button>
        </div>
      </div>
    );
  }
};

export default Inputs;
