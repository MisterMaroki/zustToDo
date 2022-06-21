import React, { useState } from 'react'
import usetoDoStore from '../app/toDoStore'

const ToDoForm = () => {
	const addtoDo = usetoDoStore((state) => state.addtoDo)
	const [toDoTitle, setToDoTitle] = useState('')

	console.log('form rendered')

	const handletoDoSubmit = () => {
		if (!toDoTitle) return alert('please add a toDo title!')

		addtoDo({
			id: Math.ceil(Math.random() * 10000),
			title: toDoTitle,
			completed: false,
		})
	}
	return (
		<form className="form-container">
			<input
				type="text"
				value={toDoTitle}
				onChange={(e) => setToDoTitle(e.target.value)}
				className="form-input"
			/>
			<button
				type="submit"
				onClick={() => handletoDoSubmit()}
				className="form-submit-btn"
			>
				Add toDo
			</button>
		</form>
	)
}

export default ToDoForm
