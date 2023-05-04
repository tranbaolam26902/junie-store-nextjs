'use client';

// Third-party libs
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// App's features
import { selectProduct } from '~/redux/features/productSlice';

// App's services
import { getProductsByQueries } from '~/services';

// App's component's
import Pagination from '../components/Pagination';
import ProductFilterPane from './components/ProductFilterPane';
import ProductTable from './components/ProductTable';

export default function Products() {
    // Global states
    const product = useSelector(selectProduct);

    // Component's states
    const [products, setProducts] = useState([]);
    const [metadata, setMetadata] = useState({});

    // useEffects
    useEffect(() => {
        getProducts(product.queries);

        async function getProducts(data) {
            const queries = new URLSearchParams({
                Keyword: data.keyword,
                IsDiscounted: data.isDiscounted,
                IsOutOfStock: data.isOutOfStock,
                CollectionId: data.collectionId || 0,
                PageSize: 10,
                PageNumber: data.pageNumber,
            });
            const response = await getProductsByQueries(queries);

            setProducts(response.items);
            setMetadata(response.metadata);
        }
    }, [product.queries]);

    return (
        <div className='flex flex-col gap-6 mx-auto px-6 md:px-10 py-6 max-w-screen-2xl'>
            <p className='text-3xl font-bold uppercase'>Products</p>
            <ProductFilterPane />
            <ProductTable products={products} />
            <Pagination metadata={metadata} />
        </div>
    );
}
