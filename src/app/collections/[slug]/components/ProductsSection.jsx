// App's components
import ProductItem from './ProductItem';

export default function ProductsSection({ data }) {
    return (
        <div className='mx-auto my-10 px-6 md:px-10 max-w-screen-2xl'>
            <p className='mb-6 text-center xl:text-start'>{data.length} sản phẩm</p>
            <div className='grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8 xl:gap-y-12'>
                {data.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
}
