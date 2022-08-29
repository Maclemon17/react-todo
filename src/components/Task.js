import React from 'react'
import Button from './Button'

const Task = ({ Task, deleteTask, editTask }) => {
  return (
    <div className='Task d-flex justify-content-between align-items-center py-2 px-1 my-2'>
        <h6>{Task.text}</h6>
        <div className="actions">
            <Button Text="Edit" Type="warning" onClick={() => editTask(Task.id)} />
            <Button Text="Delete" Type="danger" onClick={() => deleteTask(Task.id)}/>
        </div>
    </div>
  )
}

export default Task 