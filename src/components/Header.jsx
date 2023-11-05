import React from 'react';
import Button from './Button';

const Header = ({ handleShowTask, showInputs }) => {
  return (
    <div className="d-flex justify-content-around p-4">
      <h1>Task Tracker</h1>
      <Button
        text={showInputs ? 'Close' : 'Add'}
        bgColor={showInputs ? 'danger' : 'success'}
        onClick={handleShowTask}
      />
    </div>
  );
};

export default Header;
