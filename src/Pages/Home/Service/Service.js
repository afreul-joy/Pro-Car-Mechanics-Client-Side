import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const {id,name,price,description,img} =service
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className='service p-3'>
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3> 
            <h5>Price: {price}</h5>
             <p className="px-3">{description}</p>
        
        <Link to={`/booking/${id}`}>
          <button className="btn btn-warning">Book {name.toUpperCase()} </button>
        </Link>
        
      </div>    
    </div> 
  );
};

export default Service;