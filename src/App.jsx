import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import logo from './assets/Logo.svg'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-special_dark md:bg-special_green min-h-screen p-0  md:p-16 z-50 scroll-smooth appearance-none	scrollbar ">
                <div className="bg-special_dark max-w-3xl  mx-auto shadow-sm shadow-special_dark rounded-none md:rounded-lg p-5 ">
                    <div className='flex items-center space-x-2 py-8'>
                      <img src={logo} alt="" className='h-12 w-auto' />
                      <span className='text-white text-2xl font-sans font-bold'>Todo<span className='text-special_red'>Ninja</span></span>
                    </div>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                        {todos.length === 0 ? (
                          <div className='mx-auto flex justify-center item-center text-2xl font-bold text-special_light p-10 text-center'>Hello<span className='animate-ping text-special_red'>! </span>buddy, add some goals.</div>
                        ) : (
                            todos.map((todo) => (
                                <div key={todo.id} className='w-full'>
                                    <TodoItem todo={todo} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App