import React, { useEffect, useState } from 'react';

const ManageService = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services/')
      .then(res => res.json())
      .then(data=>setService(data))
  }, [])
  
  return (
    <div>
      <h3>This is manage vai</h3>
      {
        services.map(service => <div key={service._id}>
          <h3> {service.name} </h3>
          <button>Delete</button>
          </div>)
      }
    </div>
  );
};

export default ManageService;