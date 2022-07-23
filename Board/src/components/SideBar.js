import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import Users from './Chart';
import ProductsList from './ProductsList';
import { Link, Routes, Route } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
                    <div className="sidebar-brand-icon">
                        <img className="img-fluid rounded-circle mx-auto" src={image} alt="Almacén de Vinos" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href='http://localhost:3000'>
                        <i className="fas fa-wine-bottle" />
                        <span>Dashboard - Almacén de Vinos</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='GenresInDb'>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>GenresInDb</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>LastMovieInDb</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentRowMovies</span></Link>
                </li>

                {/*<!-- Nav Item - SearchMovies -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="SearchMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Search Movies</span></Link>
                </li>

                 {/*<!-- Nav Item - SearchMovies -->*/}
                 <li className="nav-item nav-link">
                    <Link className="nav-link" to="Users">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Users</span></Link>
                </li>

                 {/*<!-- Nav Item - SearchMovies -->*/}
                 <li className="nav-item nav-link">
                    <Link className="nav-link" to="products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Rutas -->*/}

            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route path="/GenresInDb" element={<GenresInDb />} />
                <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
                <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
                <Route path='/SearchMovies' element={<SearchMovies />} />
                <Route path='/users' element={<Users />} />
                <Route path='/products' element={<ProductsList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;