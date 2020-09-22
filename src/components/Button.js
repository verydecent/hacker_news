import React from 'react';

const Button = ({
  onClick,
  type = 'button',
  children,
  className
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonInline = ({
  onClick,
  type,
  children,
  className
}) => {
  return (
    <Button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonInline;