import React from 'react';
import './styles.css';

export default function InputField() {
  return (
    <form action="" className="input">
        <input type="input" placeholder="Enter a Task" className="input_box" />
        <button className="input_submit" type="submit">
            Go
        </button>
    </form>
  )
}
