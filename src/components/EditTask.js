import React from 'react'
import Button from './Button'

const EditTask = ({ selectedTask, update, updatedText }) => {

    return (
        <>

            <input type="text"
                className='form-control w-75'
                placeholder={selectedTask.text}
                // value={selectedTask.text}
                onChange={(e) => updatedText(e.target.value)}
            />

            <Button Text="UpdateTask" Type="success" onClick={() => update()} />
        </>
    )
}

export default EditTask