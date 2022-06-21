import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import toast from 'react-hot-toast'
import usetoDoStore from '../app/toDoStore'

const List = () => {
	const { toDos, addtoDo, removetoDo, toggletoDoStatus } = usetoDoStore(
		(state) => ({
			toDos: state.toDos,
			addtoDo: state.addtoDo,
			removetoDo: state.removetoDo,
			toggletoDoStatus: state.toggletoDoStatus,
		})
	)

	return (
		<>
			{toDos?.map((toDo) => (
				<div
					key={toDo.id}
					className="toDo-item"
					onClick={() => {
						toggletoDoStatus(toDo.id)
						toast.success(
							`Marked ${toDo.title} as ${
								!toDo.completed ? 'Completed' : 'Incomplete'
							}!`
						)
					}}
				>
					<div className="toDo-item-col-1">
						<input type="checkbox" checked={toDo.completed} readOnly />
						<span>{toDo.title}</span>
					</div>
					<IconButton
						onClick={() => {
							removetoDo(toDo.id)
							toast.success(`Removed ${toDo.title}`)
						}}
					>
						<Delete color="primary" />
					</IconButton>
				</div>
			))}
		</>
	)
}

export default List
