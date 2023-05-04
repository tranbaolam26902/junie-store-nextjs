// App's components
import OrderItem from './OrderItem';

export default function OrderTable({ orders }) {
    return (
        <section className='overflow-x-auto shadow rounded'>
            <div className='flex flex-col divide-y divide-gray'>
                <div className='w-[944px] lg:w-full grid grid-cols-12 items-center px-4 py-3 font-semibold text-black/50'>
                    <div className='col-span-1 text-center'>Date</div>
                    <div className='col-span-2 text-center'>Name</div>
                    <div className='col-span-2 text-center'>Phone</div>
                    <div className='col-span-4 flex flex-col gap-4 px-4'>Information</div>
                    <div className='col-span-2 text-center'>Total price</div>
                    <div className='col-span-1 text-center'>Confirmed</div>
                </div>
                {orders.map((order, index) => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </div>
        </section>
    );
}
