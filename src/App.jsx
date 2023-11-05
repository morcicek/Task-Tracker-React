import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import TaskList from './components/TaskList';

function App() {
  const [showInputs, setShowInputs] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  const handleShowTask = () => {
    setShowInputs(!showInputs);
  };
  return (
    <div className="container border border-secondary rounded-2 mt-4 mw-50">
      <Header showInputs={showInputs} handleShowTask={handleShowTask} />
      <Inputs setTasks={setTasks} tasks={tasks} showInputs={showInputs} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
