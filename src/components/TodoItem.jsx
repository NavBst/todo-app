import React from 'react'

const TodoItem = ({ list, setTodos, setTodo, setIsUpdate, updateTodo, isUpdate }) => {
  function handleDel(index) {
    const newarr = list.filter((_, i) => i !== index);
    console.log(newarr)
    setTodos(newarr)
  }

  function cancel() {
    setTodo("");
    setIsUpdate(false)
  }
  function handleupdate(i) {
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
                <button className={`  p-2 rounded cursor-pointer active:scale-95 ${isUpdate ? "bg-[rgba(153,107,107,0.5)]     text-gray-500 line-through" : "bg-red-500 text-white"}`}
                  onClick={() => handleDel(index)}
                  disabled={isUpdate ? "disabled" : isUpdate}>delete</button>
                <button className={` text-white p-2 rounded cursor-pointer ${isUpdate ? "bg-orange-400" : "bg-blue-500"}`}
                  onClick={!isUpdate ? () => handleupdate(index) : cancel}>{isUpdate ? "Cancel" : "Edit"}</button>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoItem