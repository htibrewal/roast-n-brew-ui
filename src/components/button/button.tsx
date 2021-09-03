import React from 'react';

interface ButtonI {
  text: string;
  size?: 'sm' | 'lg';
}

const Button = ({ text, size }: ButtonI) => {
  return (
    <button
      type='button'
      className={ 'btn-primary' + (size && size === 'sm' ? ' btn-sm' : (size === 'lg' ? ' btn-lg' : '')) }>
      <span className='btn-text'>
        {text}
      </span>
    </button>
  )
}

export default Button;