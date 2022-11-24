import React, { useEffect, useState } from 'react';
import CategoreyCard from '../../components/CategoreyCard';


const ResaleProducts = () => {
    const [categorey, setCategorey] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/categorey')
        .then(res => res.json())
        .then(data => setCategorey(data))
    },[])
    return (
        <div className='py-10'>
            <h1 className='text-3xl text-center font-semibold'>Buy Products By Categorey:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
                {
                    categorey.map(c => <CategoreyCard key={c._id} c={c}></CategoreyCard>)
                }
            </div>
        </div>
    );
};

export default ResaleProducts;