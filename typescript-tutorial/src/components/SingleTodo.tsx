import React, { useEffect, useRef, useState } from 'react';
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css';
import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {

    // Edit Functionality
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    // hisDone Functionality
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    // Delete functionality
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)
            ));

        setEdit(false)
    };

    // Focus input automatically when clicking 'edit' button
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided, snapshot) => (
                    <form action="" 
                        className={`todos_single ${snapshot.isDragging ? "drag" : ""}`} 
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {edit ? (
                            <input
                                ref={inputRef}
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                className="todos_single_text" />
                        ) : todo.isDone ? (
                            <s className="todos_single_text">{todo.todo}</s>
                        ) : (
                            <span className="todos_single_text">{todo.todo}</span>
                        )}

                        {/* React Icons */}
                        <div>
                            <span className="icon" onClick={() => {
                                if (!edit && !todo.isDone) {
                                    setEdit(!edit);
                                }
                            }}>
                                <AiFillEdit />
                            </span>
                            <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTodo