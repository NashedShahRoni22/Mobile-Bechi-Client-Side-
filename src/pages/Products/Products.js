import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';

const Products = () => {
    const { isLoading, data:products } = useQuery({
        queryKey: ['products'],
        queryFn: () =>
          fetch('http://localhost:8000/products').then(res =>
            res.json()
          )
      })

      if(isLoading){
        return <Spinner></Spinner>
      }
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>Total Products: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map(p => <ProductCard key={p._id} p={p}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;