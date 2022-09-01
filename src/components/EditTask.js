import React, { useState } from 'react'
import Button from './Button'

const EditTask = ({ selectedTask, update, updatedText }) => {
    // const [updatedText, setUpdatedText] = useState('');
    // const [id, setId] = useState(selectedTask.id)
    // const [updatedDetails, setupdatedDetails] = useState('');
    // console.log(selectedTask);

    // const updateTask = () => {
    //     const update = { id: selectedTask.id, updatedText }
    //     // console.log(update)
    // }

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