import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SmallCard(props) {
    return (
        <div className='col-md-4 mb-4'>
            <div className={`card border-left shadow h-100 py-2`}>
                <div className='card-body'>
                    <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                            <div className='text-xs font-weight-bold text-uppercase mb-1'>
                                <Link className='text-gray-800' to={'/products'}>Total productos en db</Link>
                            </div>
                            <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                {props.count}
                            </div>
                        </div>
                        <div className='col-auto'>
                            <i class='fas fa-wine-bottle fa-2x'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */
SmallCard.defaultProps = {
    cuantity: 'No cuatity',
}
/* PROPTYPES */
SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}

export default SmallCard;