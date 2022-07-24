import React from "react";


function GenresInDb() {
  return (
    <div className="d-flex col-lg-6 mb-4 justify-content-center">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="text-center m-0 font-weight-bold text-gray-800">
            Categorias disponibles
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="text-center card-body"><a className="text-light" href="/products/category/1"> Vinos </a></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="text-center card-body"><a className="text-light" href="/products/category/2">Cervezas </a></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="text-center card-body"><a className="text-light" href="/products/category/4">Espumantes </a></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="text-center card-body"><a className="text-light" href="/products/category/3">whiskys</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
