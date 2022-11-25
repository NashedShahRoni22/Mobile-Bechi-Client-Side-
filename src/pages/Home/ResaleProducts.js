import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoreyCard from '../../components/CategoreyCard';
import Spinner from '../../components/Spinner';


const ResaleProducts = () => {
  
    const { isLoading, data:categories } = useQuery({
        queryKey: ['products'],
        queryFn: () =>
          fetch('http://localhost:8000/categorey').then(res =>
            res.json()
          )
      })

      if(isLoading){
        return <Spinner></Spinner>
      }
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