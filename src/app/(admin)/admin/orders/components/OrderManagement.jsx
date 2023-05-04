'use client';

// Third-party libs
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// App's features
import { selectOrder } from '~/redux/features/orderSlice';

// App's services
import { getOrdersByQueries } from '~/services';

// App's components
import OrderFilterPane from './OrderFilterPane';
import OrderTable from './OrderTable';
import Pagination from '~/app/(admin)/admin/components/Pagination';

export default function OrderManagement() {
    // Global states
    const order = useSelector(selectOrder);

    // Component's states
    const [orders, setOrders] = useState([]);
    const [metadata, setMetadata] = useState({});

    // useEffects
    useEffect(() => {
        getOrders(order.queries);

        async function getOrders(data) {
            const queries = new URLSearchParams({
                Keyword: data.keyword,
                IsNotConfirmed: data.isNotConfirmed,
                PageSize: 10,
                PageNumber: data.pageNumber,
            });
            const response = await getOrdersByQueries(queries);

            setOrders(response.items);
            setMetadata(response.metadata);
        }
    }, [order.queries]);

    return (
        <div className='flex flex-col gap-6 mx-auto px-6 md:px-10 py-6 max-w-screen-2xl'>
            <p className='text-3xl font-bold uppercase'>Orders</p>
            <OrderFilterPane />
            <OrderTable orders={orders} />
            <Pagination metadata={metadata} />
        </div>
    );
}
