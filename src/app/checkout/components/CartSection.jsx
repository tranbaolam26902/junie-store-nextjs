// Asset files
import { DELIVERY_FEE, MIN_PRICE_FOR_FREE_DELIVERY_FEE } from '~/app/utils/constants';
import product1 from '@/assets/images/cart-items/product-01.webp';
import product2 from '@/assets/images/cart-items/product-02.webp';
import product3 from '@/assets/images/cart-items/product-03.webp';
import product4 from '@/assets/images/cart-items/product-04.webp';
import product5 from '@/assets/images/cart-items/product-05.webp';

// App's components
import CartItem from '~/app/components/layout/components/CartItem';
import Button from '~/app/components/Button';

const products = [
    {
        image: product1,
        name: 'Bông tai Lara',
        price: 180000,
        quantity: 1,
    },
    {
        image: product2,
        name: 'Bông tai Faustine',
        price: 180000,
        quantity: 1,
    },
    {
        image: product3,
        name: 'Bông tai Ivy',
        price: 220000,
        discount: 132000,
        quantity: 1,
    },
    {
        image: product4,
        name: 'Bông tai Stella',
        price: 220000,
        quantity: 1,
    },
    {
        image: product5,
        name: 'Bông tai Selini',
        price: 220000,
        discount: 110000,
        quantity: 1,
    },
];
const totalPrice = products.reduce((acc, curr) => {
    return curr.discount ? acc + curr.discount : acc + curr.price;
}, 0);

export default function CartSection() {
    return (
        <div className='relative z-10 flex flex-col gap-4'>
            {products.map((product, index) => (
                <CartItem key={index} data={product} />
            ))}
            <hr className='text-secondary/10 my-2' />
            <div className='flex gap-4'>
                <input type='text' placeholder='Mã giảm giá' className='flex-1 px-4 border border-gray rounded' />
                <Button disable>Áp dụng</Button>
            </div>
            <span className='text-red'></span>
            <hr className='text-secondary/10 my-2' />
            <div className='flex flex-col gap-4 text-secondary/70'>
                <div className='flex justify-between'>
                    <span>Sản phẩm</span>
                    <span>
                        {new Intl.NumberFormat('vi-VN').format(totalPrice)}
                        <sup>đ</sup>
                    </span>
                </div>
                <div
                    className={`flex justify-between ${
                        totalPrice >= MIN_PRICE_FOR_FREE_DELIVERY_FEE ? 'text-green' : 'text-red'
                    }`}
                >
                    <span>Vận chuyển</span>
                    {totalPrice >= MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                        <span>Miễn phí</span>
                    ) : (
                        <span>
                            +30.000<sup>đ</sup>
                        </span>
                    )}
                </div>
                {/* <div className='flex justify-between text-green'>
                    <span>Mã giảm giá</span>
                    <span>
                        -30.000<sup>đ</sup>
                    </span>
                </div> */}
            </div>
            <hr className='text-secondary/10 my-2' />
            <div className='flex items-end justify-between'>
                <span className='text-xl tracking-wider'>Tổng</span>
                <span className='text-3xl'>
                    {new Intl.NumberFormat('vi-VN').format(
                        totalPrice >= MIN_PRICE_FOR_FREE_DELIVERY_FEE ? totalPrice : totalPrice + DELIVERY_FEE,
                    )}
                    <sup>đ</sup>
                </span>
            </div>
        </div>
    );
}
