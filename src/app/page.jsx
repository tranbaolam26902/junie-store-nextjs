import AboutSection from './home/AboutSection';
import CategorySection from './home/CategorySection';
import HeroSection from './home/HeroSection';
import BlogSection from './home/BlogSection';
import ServiceSection from './home/ServiceSection';

export const metadata = {
    title: 'Junie | Thương Hiệu Phụ Kiện Thời Trang Bông Tai, Dây Chuyền Nữ',
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <CategorySection />
            <AboutSection />
            <BlogSection />
            <ServiceSection />
            <div className='mt-10'></div>
        </>
    );
}
