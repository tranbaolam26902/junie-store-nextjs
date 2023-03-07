import About from './home/About';
import Category from './home/Category';
import Hero from './home/Hero';

export const metadata = {
    title: 'Junie | Thương Hiệu Phụ Kiện Thời Trang Bông Tai, Dây Chuyền Nữ',
};

export default function Home() {
    return (
        <>
            <Hero />
            <Category />
            <About />
            <div className='mt-10'></div>
        </>
    );
}
