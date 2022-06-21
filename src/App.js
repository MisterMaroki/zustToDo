import { Toaster } from 'react-hot-toast'
import './App.scss'
import ToDoForm from './components/ToDoForm'
import List from './components/List'

function App() {
	return (
		<div className="main-container">
			<h1>Todo List</h1>
			<ToDoForm />
			<List />
			<Toaster />
		</div>
	)
}

export default App
