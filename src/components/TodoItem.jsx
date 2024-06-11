import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import edit from '../assets/Edit.svg'
import save from '../assets/Save.svg'
import cross from '../assets/Cross.svg'


function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex  rounded-lg px-4 py-4 gap-x-3  text-special_light text-wrap ${
              todo.completed ? "bg-special_text" : "bg-special_text my-2"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer accent-special_green"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg text-sm focus:text-white  ${
                  isTodoEditable ? "border-special_green px-2" : "border-transparent"
              } ${todo.completed ? "line-through decoration-special_green decoration-1 " : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-full text-sm  justify-center items-center bg-special_green outline-none md:hover:outline-1 md:hover:outline-offset-10 md:hover:outline-special_green shrink-0 "
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? <img src={save} alt="" /> : <img src={edit} alt="" />}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-full text-sm  justify-center items-center bg-special_green outline-none md:hover:outline-1 md:hover:outline-offset-3 md:hover:outline-special_green shrink-0 "
              onClick={() => deleteTodo(todo.id)}
          >
              <img src={cross} alt="" />
          </button>
      </div>
  );
}

export default TodoItem;