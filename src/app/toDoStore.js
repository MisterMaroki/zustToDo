import toast from 'react-hot-toast'
import create from 'zustand'

import { devtools, persist } from 'zustand/middleware'

const toDoStore = (set) => ({
	toDos: [],
	addtoDo: (toDo) => {
		set((state) => ({
			toDos: [toDo, ...state.toDos],
		}))
	},
	removetoDo: (id) => {
		set((state) => {
			return {
				toDos: state.toDos.filter((x) => x.id !== id),
			}
		})
	},
	toggletoDoStatus: (id) => {
		set((state) => ({
			toDos: state.toDos.map((x) =>
				x.id === id ? { ...x, completed: !x.completed } : x
			),
		}))
	},
})

const useToDoStore = create(
	devtools(
		persist(toDoStore, {
			name: 'toDos',
		})
	)
)

export default useToDoStore
