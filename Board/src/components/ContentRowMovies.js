import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';
import SmallCardUsers from './SmallCardUsers'


function ContentRowMovies(){

    const [productos, setProducts] = useState([])

useEffect(() => {
    obtenerDatos()
}, [])

const obtenerDatos = async () => {
    const data = await fetch('http://localhost:3000/api/products')
    const products = await data.json()
    setProducts(products)
}

const [usuarios, setUsers] = useState([])

useEffect(() => {
    obtenerDatosUsuarios()
}, [])

const obtenerDatosUsuarios = async () => {
    const data = await fetch('http://localhost:3000/api/users')
    const users = await data.json()
    setUsers(users)
}
    return (
       
        <div className="row">
           <SmallCard {...productos}/>
            <SmallCardUsers {...usuarios}/>
        </div>
    )
}

export default ContentRowMovies;