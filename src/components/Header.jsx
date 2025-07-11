import github from '../../public/github.svg'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white py-4 px-4 text-center shadow-md">
      <h1 className="m-0 text-3xl font-bold tracking-wider">
        📝 Todo App
      </h1>
      <p className="mt-1 text-base font-normal opacity-90">
        Organize your tasks efficiently
      </p>
      <div className='absolute z-10 right-0 bottom-0  inline-block'>
        <a href="https://github.com/NavBst/todo-app" className='rounded-full flex items-center gap-2'>
          <span className='text-black font-bold font-mono'>
            To Github Repo.
          </span>
          <img src={github} alt="" className='animate-pulse' />
        </a>
      </div>
    </header>
  )
}

export default Header