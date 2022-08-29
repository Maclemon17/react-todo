import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const [allTask, setAllTask] = useState([
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
	]);

	const [editedIndex, setEditedIndex] = useState(0)

	const deleteTask = (id) => {
		setAllTask(allTask.filter((task) => task.id !== id));
		console.log("Task DElETEd", id)
	}

	const editTask = (id) => {
		setEditedIndex(id);
		console.log("Edit", id)
	}

	const addTask = (todo) => {
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { text: todo, id:id }
		setAllTask([...allTask, newTask])
		console.log(todo)
	}

	return (
		<div className="App">
			<Header onAdd={addTask} />
			{
				allTask.length > 0 ? 
				<Tasks tasks={allTask} onDelete={deleteTask} onEdit={editTask} /> :
				<h2>No task, add new tasks</h2>
			}
			
		</div>
	);
}

export default App;
