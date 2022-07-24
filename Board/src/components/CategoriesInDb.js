import React, { Link } from 'react-router-dom';


function CategoriesInDb() {
  return (
    <div className='d-flex col-lg-6 mb-4 justify-content-center'>
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <h5 className='text-center m-0 font-weight-bold text-gray-800'>
            Categorias disponibles:
          </h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 mb-4'>
              <div className='card bg-dark text-white shadow'>
                <div className='text-center card-body'><Link className='text-light' to='/products/category/1'> Vinos </Link></div>
              </div>
            </div>
            <div className='col-lg-6 mb-4'>
              <div className='card bg-dark text-white shadow'>
                <div className='text-center card-body'><Link className='text-light' to='/products/category/2'>Cervezas </Link></div>
              </div>
            </div>
            <div className='col-lg-6 mb-4'>
              <div className='card bg-dark text-white shadow'>
                <div className='text-center card-body'><Link className='text-light' to='/products/category/4'>Espumantes </Link></div>
              </div>
            </div>
            <div className='col-lg-6 mb-4'>
              <div className='card bg-dark text-white shadow'>
                <div className='text-center card-body'><Link className='text-light' to='/products/category/3'>whiskys</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
