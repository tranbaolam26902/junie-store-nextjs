// Third-party libs
import Image from 'next/image';

// Asset files
import subscribeImage from '@/assets/images/home/subscribe.webp';

// App's components
import Button from '~/app/components/Button';

export default function SubscribeSection() {
    return (
        <>
            <div className='relative mt-10 min-h-[360px] md:min-h-[400px]'>
                <Image
                    src={subscribeImage}
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                    alt='subscribe-image'
                />
                <div className='absolute w-full h-full'>
                    <div className='flex items-center justify-center lg:justify-end mx-auto px-6 md:px-10 max-w-screen-2xl h-full'>
                        <div className='flex flex-col gap-4 p-6 sm:p-12 w-full sm:w-fit bg-white rounded lg:rounded-lg'>
                            <p className='text-xs md:text-sm font-bold tracking-wider uppercase'>Đăng kí nhận e-mail</p>
                            <p>Promotions, new products and sales. Directly to your inbox.</p>
                            <div className='md:flex gap-4'>
                                <input
                                    type='text'
                                    className='flex-1 mb-4 md:mb-0 px-4 py-3 md:py-2 w-full border border-gray rounded'
                                    placeholder='Email của bạn'
                                />
                                <Button secondary className='w-full md:w-fit'>
                                    Đăng ký
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
