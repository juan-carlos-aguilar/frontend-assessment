import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import "./styles.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {
                    (provided) => (
                        <div className="todos"
                            ref={provided.innerRef} 
                            {...provided.droppableProps}
                        >
                            <span className="todos_heading">Active Tasks</span>
                            {
                                todos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        todos={todos}
                                        key={todo.id}
                                        setTodos={setTodos}
                                    />
                                ))
                            }
                        </div>
                    )
                }

            </Droppable>

            <Droppable droppableId="TodosRemove">
                {
                    (provided) => (
                        <div className="todos remove" 
                            ref={provided.innerRef} 
                            {...provided.droppableProps}
                        >
                            <span className="todos_heading">Completed Tasks</span>
                            {
                                completedTodos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        todos={completedTodos}
                                        key={todo.id}
                                        setTodos={setCompletedTodos}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </Droppable>
        </div>

        // <div className="todos">
        //     {todos.map((todo) => (
        //         <SingleTodo 
        //             todo={todo} 
        //             key={todo.id} 
        //             todos={todos} 
        //             setTodos={setTodos} />
        //     ))}
        // </div>
    );
};

export default TodoList;