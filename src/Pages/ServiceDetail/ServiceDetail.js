import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'


const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='details'>
            <h1>Your Selected Service No is : {serviceId}</h1>]
            <p>{}</p>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;