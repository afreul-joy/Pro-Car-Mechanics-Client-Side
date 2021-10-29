import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../404.png'

const NotFound = () => {
  return (
    <div>
      <img className="img-fluid" src={img} alt="" />
      <Link to='/'> <button className="btn btn-danger my-3 text-white">Go Back</button> </Link>
    </div>
  );
};

export default NotFound;