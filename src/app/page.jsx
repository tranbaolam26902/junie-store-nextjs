import Category from './Home/Category';
import Hero from './Home/Hero';

export const metadata = {
    title: 'Junie | Thương Hiệu Phụ Kiện Thời Trang Bông Tai, Dây Chuyền Nữ',
};

export default function Home() {
    return (
        <>
            <Hero />
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <Category />
                <div className='mt-10'></div>
            </div>
        </>
    );
}
