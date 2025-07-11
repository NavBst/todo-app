import React from 'react'

const TodoItem = ({ list, setTodos, setTodo, setIsUpdate, updateTodo, childData }) => {
  
  function handleDel(index) { // handling deleting an todo
    const newarr = list.filter((_, i) => i !== index);
    localStorage.setItem('todos', JSON.stringify(newarr)) // updating in local storage
    setTodos(newarr)
    if(index === childData) { // handling the deletion of currently updating todo.
      setTodo("");
      setIsUpdate(false)
    };
  }

  function handleupdate(i) { // --> triggers when Edit button clicked
    const item = list[i]
    setTodo(item);
    setIsUpdate(true);
    updateTodo(i);
  }
  return (
    <ul className=' w-[400px] mx-auto my-12 '>
      {
        list.map((todo, index) => {
          return (
            <li key={index} className={`flex justify-between px-5 py-2 items-center gap-6 mb-[0.1rem] bg-blue-200 transition-all duration-300 `}>
              <span className='font-bold'>{index + 1} </span>  {todo}
              <span className='flex justify-center items-center gap-6'>
                <button className={`  p-2 rounded cursor-pointer active:scale-95 bg-red-500 text-white`}
                  onClick={() => handleDel(index)}
                 >delete</button>
                <button className={` text-white p-2 rounded cursor-pointer bg-blue-500`}
                  onClick={() => handleupdate(index)}>Edit</button>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoItem