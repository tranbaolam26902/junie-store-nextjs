// Third-party libs
import Image from 'next/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';

export default async function HeroSection({ collection }) {
    // Component's props
    const { title, description, imagePath } = collection;

    // Get placeholder blur base64
    const { base64, img } = await getPlaiceholder(imagePath);

    return (
        <section className='relative overflow-hidden w-full h-[250px] md:h-[400px]'>
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl text-white'>
                <Image
                    src={img}
                    fill
                    size='100vw'
                    priority
                    placeholder='blur'
                    blurDataURL={base64}
                    className='absolute left-0 w-full h-auto object-cover object-center'
                    alt='banner-image'
                />
                <div className='absolute top-0 z-20 py-6 hidden md:block text-sm'>
                    <Link href='/' className='opacity-70 hover:opacity-100 transition'>
                        Trang chủ
                    </Link>
                    <span className='mx-1'>/</span>
                    <span className='capitalize'>{title}</span>
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black/50'>
                    <p className='mb-6 md:mb-8 text-3xl md:text-5xl xl:text-6xl capitalize font-bold animate-[slide-in-bottom_400ms_ease-in-out_400ms_both]'>
                        {title}
                    </p>
                    <p className='mx-auto px-6 md:px-10 max-w-screen-2xl text-sm md:text-base text-center animate-[slide-in-bottom_400ms_ease-in-out_600ms_both]'>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
