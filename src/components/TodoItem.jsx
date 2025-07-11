
const TodoItem = ({item, index, handleDel, checked, handleEdit}) => {

  return (
  
            <li key={index} className={`flex justify-between px-5 py-2 items-center gap-6 mb-[0.2rem] rounded  ${item.completed ? "bg-gray-500 " : "bg-blue-300/60"} `} >
              <div className='flex-center gap-2'>
                <label className="flex gap-3 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer"
                    checked={item.completed}
                    onChange={() => checked(index)}
                  />
                </label>
                <span className={`font-bold mr-1 ${item.completed ? "line-through" : ""}`}>{index + 1} </span> <span className={`${item.completed ? "line-through" : ""}`}>{item.todo}</span>  
              </div>

              <span className='flex justify-center items-center gap-6'>
                <button className={`p-2 rounded cursor-pointer active:scale-95 bg-red-500 text-white `}
                  onClick={()=>handleDel(index)}
                >delete</button>
                <button className={` p-2 rounded  ${item.completed ? "bg-gray-300 text-gray-600 opacity-65 cursor-not-allowed": 'bg-blue-500 text-white  cursor-pointer'}`}
                  disabled={item.completed}
                  onClick={()=>handleEdit(index)}
                  >Edit</button>
              </span>
            </li>
   
  )
}

export default TodoItem