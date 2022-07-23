import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductsList from './ProductsList';

function ProductDelete() {

	const { id } = useParams()

	useEffect(() => {
		obtenerDatos()
	})

	const obtenerDatos = async () => {
		await fetch(`http://localhost:3000/api/products/delete/${id}`, { method: 'DELETE' })

	}

	return (
		<ProductsList />
	)
}
export default ProductDelete;

