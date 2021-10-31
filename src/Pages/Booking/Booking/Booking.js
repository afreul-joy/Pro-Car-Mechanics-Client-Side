import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { bookingId } = useParams();
  const [service,setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${bookingId}`)
      .then(res => res.json())
      .then(data=>setService(data))
  }, [])
  
  return (
    <div>
      <h3>Details of : {service.name} </h3>
      <h2>This is booking {bookingId} </h2>
    </div>
  );
};

export default Booking;