import Breadcrumb from './components/Breadcrumb';
import ProductInfo from './components/ProductInfo';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';

const data = {
    id: 1,
    name: 'Vòng tay Jenna',
    price: 250000,
    discount: 0.3,
    type: 'B-JENNA',
    images: [],
    rating: {
        total: 19,
        point: 5,
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, similique?',
    outOfStock: false,
};

export default function Product() {
    return (
        <>
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <Breadcrumb name={data.name} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-20 2xl:gap-x-40'>
                    <ProductImages data={data} />
                    <ProductInfo data={data} />
                </div>
                <div className='grid lg:grid-cols-6'>
                    <ProductDescription data={data} />
                </div>
            </div>
        </>
    );
}
