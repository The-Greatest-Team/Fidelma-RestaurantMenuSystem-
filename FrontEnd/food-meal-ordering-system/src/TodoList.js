import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} todo = {todo} />
    })
    // Note: set key can help on (real time)update, but key must be unique
  )
}
