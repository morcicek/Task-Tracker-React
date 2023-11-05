import React from 'react';

const Button = ({ text, bgColor, onClick }) => {
  return (
    <div>
      <button className={`btn btn-${bgColor} fs-5`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
