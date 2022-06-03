import React, { useEffect, useState } from 'react';
import useService from './../../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
   const [services,setService] = useService();
   console.log(services);

    return (
        <div className='container fluid mt-5'>
            <h1 className='text-primary text-center mb-5'>Services</h1>
           <div className='row g-4'>
           {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;