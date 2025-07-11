import { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null)

    function addTodo() {

        if (todo.length > 0) {
            if (updateIndex !== null) {
                const updated = [...todos];
                updated[updateIndex].todo = todo;
                setTodos(updated);
                localStorage.setItem('todos', JSON.stringify(updated))
                setIsUpdate(false);
                setUpdateIndex(null);
            }
            else {
                const obj = {
                    todo: todo,
                    completed: false
                }

                let updatedTodos = [...todos];
                updatedTodos.push(obj)
                setTodos(updatedTodos);
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            }
            setTodo("")
        }
        else {
            alert("Cannot add/update Blank Todo")
        }
    }

    function handleDel(i) {
        const updatedarr = todos.filter((_, idx) => idx !== i);
        setTodos(updatedarr);
        localStorage.setItem('todos', JSON.stringify(updatedarr));
        if (i === updateIndex) {
            setIsUpdate(false);
            setTodo("");
            setUpdateIndex(null);
        }
        if (i < updateIndex) {
            setUpdateIndex(updateIndex - 1)
        }

    }

    function checked(idx) {
        const updatedTodos = todos.map((todo, i) =>
            i === idx ? { ...todo, completed: !todo.completed } : todo
        );
        console.log(todos)
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    function handleEdit(i) {
        setUpdateIndex(i)
        setIsUpdate(true);
        setTodo(todos[i].todo)
        console.log(updateIndex)

    }

    function handleCancel() {
        setIsUpdate(false);
        setTodo("")
    }
    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos')) ?? [];
        setTodos(getTodos)
    }, [])

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-200 rounded-xl shadow-lg max-h-[500px] overflow-y-scroll">
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
                    className={`px-5 py-2 rounded-md font-semibold text-white cursor-pointer active:scale-95 ${isUpdate ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} transition`}
                    onClick={addTodo}
                >
                    {isUpdate ? `Update Task ${updateIndex + 1}` : "Add"}
                </button>
                {isUpdate &&
                    <button
                        className={`px-2 py-2 rounded-md font-semibold text-white active:scale-95 cursor-pointer ${isUpdate ? "bg-orange-500 hover:bg-orange-400" : "bg-blue-500 hover:bg-blue-600"} transition`}
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                }
            </div>
            <div className="space-y-3">
                <ul className=' w-[400px] mx-auto my-12 '>
                {
                    todos.map((item, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            item={item}
                            handleDel={handleDel}
                            checked={checked}
                            handleEdit={handleEdit}
                        />
                    ))
                }
            </ul>
        </div>
        </div >
    )
}

export default TodoList;