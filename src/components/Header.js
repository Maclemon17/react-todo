import React, { useState } from 'react'
import Button from './Button'

const Header = ({ onAdd }) => {
	const [todo, setTodo] = useState({})

	const addNewTask = () => {
		if (todo == '') {
			alert('Please add a task');
		} else {
			onAdd(todo);
			setTodo('');
			document.querySelector("input[type=text]").value = '';
		}
	}


	return (

		<>
			<header className="header">
				<h3>TODO APP</h3>
				<div className="input-box mt-2 d-flex justify-content-between">
					<input type="text"
						className='form-control w-75'
						placeholder='Enter task todo here...'
						onChange={(e) => setTodo(e.target.value)}
					/>

					<Button Text="Add Task" Type="success" onClick={() => addNewTask(todo)} />
				</div>
			</header>

		</>

	)
}

export default Header