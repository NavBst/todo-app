import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white py-4 px-4 text-center shadow-md">
      <h1 className="m-0 text-3xl font-bold tracking-wider">
        📝 Todo App
      </h1>
      <p className="mt-1 text-base font-normal opacity-90">
        Organize your tasks efficiently
      </p>
    </header>
  )
}

export default Header