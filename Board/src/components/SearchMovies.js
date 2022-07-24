import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function SearchMovies() {

	const [productos, setUsuarios] = useState([]);
	const [tablaUsuarios, setTablaUsuarios] = useState([]);
	const [busqueda, setBusqueda] = useState('');

	const peticionGet = async () => {
		const data = await fetch('http://localhost:3000/api/products')
		const products = await data.json()
		setUsuarios(products.products)
		setTablaUsuarios(products.products)
		console.log(productos)
		console.log(tablaUsuarios)
	}

	const handleChange = e => {
		setBusqueda(e.target.value);
		filtrar(e.target.value);
	}

	const filtrar = (terminoBusqueda) => {
		var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
			if (elemento.product_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
			) {
				return elemento;
			}
		});
		setUsuarios(resultadosBusqueda);
	}

	useEffect(() => {
		peticionGet();
	}, [])

	return (
		<div className='container-fluid position-relative gap-10'>
			  <div className='card-header py-3'>
                    <h5 className='text-center m-0 font-weight-bold text-gray-800'>Buscar productos:</h5>
                </div>
			<div>
				<input className='form-control' value={busqueda} placeholder='Búsqueda por Nombre' onChange={handleChange} />
			</div>
			<div className='text-center'><i class="fas fa-glass-cheers"></i></div>
			<div>
				<table className='table table-sm table-bordered'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Stock</th>
						</tr>
					</thead>
					<tbody>
						{productos.map((producto) => (
							<tr key={producto.product_id}>
								<td>{producto.product_id}</td>
								<td>{producto.product_name}</td>
								<td>{producto.price}</td>
								<td>{producto.quantity_stock}</td>
								<td><Link to={`/products/${producto.product_id}`}>Detalle</Link></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SearchMovies;