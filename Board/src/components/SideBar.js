import React from 'react';
import image from '../assets/images/logo-header.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import Users from './UsersList';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import { Link, Routes, Route } from 'react-router-dom';
import UsersDetail from './UsersDetail';
import ProductDelete from './ProductDelete';
import UsersDelete from './UsersDelete';
import ProductsByCategory from './ProductsByCategory';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className='navbar-nav bg-gradient-dark sidebar sidebar-dark accordion' id='accordionSidebar'>

                {/*<!-- Sidebar - Brand -->*/}
                <Link className='sidebar-brand d-flex align-items-center justify-content-center' to='/'>
                    <div className='sidebar-brand-icon'>
                        <img className='img-fluid mx-auto' src={image} alt='Almacén de Vinos' />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className='sidebar-divider my-0' />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className='nav-item active'>
                    <a className='nav-link' href='http://localhost:3000'>
                        <i class='text-light fab fa-chrome'></i>
                        <span className='text-light'>Web - Almacén de vinos</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className='sidebar-divider' />

                {/*<!-- Nav Item - SearchMovies -->*/}
                <li className='nav-item nav-link'>
                    <Link className='nav-link' to='Users'>
                        <i className='text-light fas fa-users'></i>
                        <span className='text-light'> Users</span></Link>
                </li>

                {/*<!-- Nav Item - SearchMovies -->*/}
                <li className='nav-item nav-link'>
                    <Link className='nav-link' to='products'>
                        <i className='text-light fas fa-list'></i>
                        <span className='text-light'> Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className='nav-item'>
                    <Link className='nav-link' to='GenresInDb'>
                        <i className='text-light fas fa-folder-plus'></i>
                        <span className='text-light'>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className='nav-item'>
                    <Link className='nav-link' to='LastMovieInDb'>
                        <i className='text-light fas fa-cloud-upload-alt'></i>
                        <span className='text-light'> Ultimo producto agregdo</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}


                {/*<!-- Nav Item - SearchMovies -->*/}
                <li className='nav-item nav-link'>
                    <Link className='nav-link' to='SearchMovies'>
                        <i className='text-light fas fa-search'></i>
                        <span className='text-light'>  Buscar Producto</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className='sidebar-divider d-none d-md-block' />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Rutas -->*/}

            <Routes>
                <Route exact path='/' element={<ContentWrapper />} />
                <Route path='/GenresInDb' element={<GenresInDb />} />
                <Route path='/LastMovieInDb' element={<LastMovieInDb />} />
                <Route path='/ContentRowMovies' element={<ContentRowMovies />} />
                <Route path='/SearchMovies' element={<SearchMovies />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/:id' element={<UsersDetail />} />
                <Route path='/users/delete/:id' element={<UsersDelete />} />
                <Route path='/products' element={<ProductsList />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/products/category/:id' element={<ProductsByCategory />} />
                <Route path='/products/delete/:id' element={<ProductDelete />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;