import React from 'react';
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo, todos, setTodos }: Props) => {
  return (
    <form action="" className="todos_single">
        <span className="todos_single_text">{todo.todo}</span>
        
        {/* React Icons */}
        <div>
            <span className="icon"><AiFillEdit /></span>
            <span className="icon"><AiFillDelete /></span>
            <span className="icon"><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo