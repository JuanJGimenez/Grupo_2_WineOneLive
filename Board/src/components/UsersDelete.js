import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UsersList from './UsersList';

function UsersDelete() {

	const { id } = useParams()

	useEffect(() => {
		obtenerDatos()
	})

	const obtenerDatos = async () => {
		await fetch(`http://localhost:3000/api/users/delete/${id}`, { method: 'DELETE' })

	}

	return (
		<UsersList />
	)
}
export default UsersDelete;