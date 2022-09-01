import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className='mt-5 tasks'>
      {
        tasks.map((task) => (
          <Task key={task.id}
            Task={task}
            deleteTask={onDelete}
            editTask={onEdit}
          />
        ))
      }
    </div>
  )
}

export default Tasks