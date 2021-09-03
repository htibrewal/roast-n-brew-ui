import React from 'react';

interface ButtonI {
  text: string;
  size?: 'sm' | 'lg';
  onClick?: () => any;
}

const Button = ({ text, size, onClick }: ButtonI) => {
  return (
    <button
      type='button'
      className={ 'btn-primary' + (size && size === 'sm' ? ' btn-sm' : (size === 'lg' ? ' btn-lg' : '')) }
      onClick={onClick}>
      <span className='btn-text'>
        {text}
      </span>
    </button>
  )
}

export default Button;