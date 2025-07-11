import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false)
    const [childData, setChildData]  = useState(null)
    const handleChild = (i) =>{
        setChildData(i);
    }

    function addTodo(i) {
        console.log(i)
        if (isUpdate && childData !== null) {

            if (todo.length > 0) {
                let updatedData = todos;
                updatedData[childData] = todo;
                setTodos(updatedData);
                localStorage.setItem('todos', JSON.stringify(updatedData))
                setIsUpdate(false)

            }
        }
       else if (todo.length > 0) {
            console.log("first")
            let addtodo = [...todos];
            addtodo.push(todo);
            setTodos(addtodo)
            localStorage.setItem('todos', JSON.stringify(addtodo));
        }
        setTodo("")
    }

    useEffect(()=>{
        const getTodo = JSON.parse(localStorage.getItem('todos')) ?? [];
        setTodos(getTodo);
    }, [])

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Todo List</h2>
            <div className="w-full flex justify-center gap-3.5 mb-6">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 shadow bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter a todo..."
                />
                <button
                    className={`px-5 py-2 rounded-md font-semibold text-white ${isUpdate ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} transition`}
                    onClick={isUpdate ? () => addTodo(handleChild(childData)) : addTodo}
                >
                    {isUpdate ? "Update" : "Add"}
                </button>
            </div>
            <div className="space-y-3">
                <TodoItem
                    list={todos}
                    setTodos={setTodos}
                    setTodo={setTodo}
                    setIsUpdate={setIsUpdate}
                    updateTodo={handleChild}
                    isUpdate = {isUpdate}
                />
            </div>
        </div>
    )
}

export default TodoList