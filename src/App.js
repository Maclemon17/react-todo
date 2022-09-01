import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const data = [
		{
			id: 1,
			text: "Doctors Appointment",
		},
		{
			id: 2,
			text: "Meeting at School",
		},
		{
			id: 3,
			text: "Food Shopping",
		},
	]

	const [allTask, setAllTask] = useState(data);
	const [editedIndex, setEditedIndex] = useState(0);
	const [showEdit, setShowEdit] = useState(false);
	const [selectedTask, setSelectedTask] = useState('');
	const [updatedText, setUpdatedText] = useState('');


	const deleteTask = (id) => {
		setAllTask(allTask.filter((task) => task.id !== id));
		console.log("Task DElETEd", id)
	}

	const editTask = (task) => {
		setEditedIndex(task.id);
		setShowEdit(true)
		setSelectedTask(task)
		console.log("Edit", task);
	}

	const updateTask = () => {
		setAllTask(
			allTask.map((task) => (
				task.id === editedIndex ? { ...task, text: updatedText || task.text } : task
			))
		)
		setUpdatedText('')
		setShowEdit(!showEdit)
	}

	const addTask = (todo) => {
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { text: todo, id: id }
		setAllTask([...allTask, newTask]);
		console.log(todo);
	}

	return (
		<div className="App">
			<Header onAdd={addTask}
				showEdit={showEdit}
				selected={selectedTask}
				updateText={setUpdatedText}
				update={updateTask} />
			{
				allTask.length > 0 ?
					<Tasks tasks={allTask} onDelete={deleteTask} onEdit={editTask} /> :
					<h2>No task, add new tasks</h2>
			}

		</div>
	);
}

export default App;
