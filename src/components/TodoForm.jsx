import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex flex-row space-x-3 py-5">
          <input
              type="text"
              placeholder="Write Todo..."
               className='bg-special_text w-full shrink-1 px-4 rounded-lg outline-none border-none focus:outline-special_green focus:outline-1 text-white text-md'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="bg-special_green text-special_dark rounded-full px-1 py-2 md:px-4 md:py-5  font-bold text-sm shrink-0 outline-none hover:outline md:hover:outline-1 md:hover:outline-special_green md:hover:outline-offset-5">
              Add
          </button>
      </form>
  );
}

export default TodoForm;