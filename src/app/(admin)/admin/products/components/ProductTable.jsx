// App's components
import ProductItem from './ProductItem';

export default function ProductTable({ products }) {
    return (
        <section className='overflow-x-auto shadow rounded'>
            <div className='flex flex-col divide-y divide-gray'>
                <div className='w-[944px] lg:w-full grid grid-cols-12 items-center px-4 py-3 font-semibold text-black/50'>
                    <div className='col-span-5 flex gap-4 items-center'>Product</div>
                    <div className='col-span-2 text-center'>Collection</div>
                    <div className='col-span-1 text-center'>Quantity</div>
                    <div className='col-span-1 text-center'>Price</div>
                    <div className='col-span-1 text-center'>Discount</div>
                </div>
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>
        </section>
    );
}
