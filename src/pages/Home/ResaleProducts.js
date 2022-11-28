import React, { useState } from 'react';
import CategoreyCard from '../../components/CategoreyCard';
import axios from 'axios';


const ResaleProducts = () => {
  const [categories, setCategories] = useState([]);
    axios.get('https://server-xi-fawn.vercel.app/categorey')
    .then(data => {
      setCategories(data.data);
    })

    return (
        <div className='py-10'>
            <h1 className='text-xl text-center font-semibold'>Buy Products By Categorey:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
                {
                    categories?.map(c => <CategoreyCard key={c._id} c={c}></CategoreyCard>)
                }
            </div>
        </div>
    );
};

export default ResaleProducts;