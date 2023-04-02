// Third-party libs
import Image from 'next/image';
import Link from 'next/link';

// App's features
import { MIN_PRICE_FOR_FREE_DELIVERY_FEE } from '~/app/utils/constants';

// Asset files
import truck from '@/assets/icons/truck.svg';
import placeholder from '@/assets/images/collections/bracelet/products/amira-01.webp';

export default function ProductItem({ data }) {
    return (
        <Link href={`/collections/${data.collection}/${data.id}`} className='group flex flex-col w-full text-center'>
            <div className='relative'>
                {/* Start: Image */}
                <Image src={placeholder} alt='placeholder-image' className='opacity-0' />
                <Image
                    src={data.firstImage}
                    fill
                    sizes='50vw
                    (max-width: 1280px) 25vw'
                    alt='product-image'
                    className='w-full rounded opacity-100 group-hover:opacity-0 transition duration-500'
                />
                <Image
                    src={data.secondImage}
                    fill
                    sizes='50vw
                    (max-width: 1280px) 25vw'
                    alt='product-image'
                    className='absolute top-0 left-0 right-0 bottom-0 w-full rounded-md opacity-0 group-hover:opacity-100 transition duration-500'
                />
                {/* End: Image */}
                {/* Start: Tag */}
                {data.outOfStock ? (
                    <span className='absolute top-2.5 left-2.5 inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-[#6f719b] rounded-sm'>
                        Hết hàng
                    </span>
                ) : (data.discount && data.price * (1 - data.discount) >= MIN_PRICE_FOR_FREE_DELIVERY_FEE) ||
                  data.price >= MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                    <span className='absolute top-2.5 left-2.5 flex px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-green rounded-sm'>
                        <Image src={truck} width={14} height={14} alt='freeship-icon' className='mb-0.5 mr-1' />
                        <span>Freeship</span>
                    </span>
                ) : data.discount ? (
                    <span className='absolute top-2.5 left-2.5 inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-red rounded-sm'>
                        Tiết kiệm <span className='text-[13px]'>{data.discount * 100}%</span>
                    </span>
                ) : null}
                {/* End: Tag */}
            </div>
            {/* Start: Info */}
            <span className='mt-6 mb-1'>{data.name}</span>
            {data.discount ? (
                <div className='flex gap-3 justify-center'>
                    <span className='text-red'>
                        {new Intl.NumberFormat('vi-VN').format(data.price * (1 - data.discount))}
                        <sup className='ml-0.5 underline'>đ</sup>
                    </span>
                    <span className='line-through opacity-70'>
                        {new Intl.NumberFormat('vi-VN').format(data.price)}
                        <sup className='ml-0.5 underline'>đ</sup>
                    </span>
                </div>
            ) : (
                <span>
                    {new Intl.NumberFormat('vi-VN').format(data.price)}
                    <sup>đ</sup>
                </span>
            )}
            {/* End: Info */}
        </Link>
    );
}
