// App's features
import { getBestSellingProducts } from '~/services';

// App's components
import ProductsCarousel from '~/app/(client)/components/ProductsCarousel';
import AboutSection from './home/AboutSection';
import CategorySection from './home/CategorySection';
import HeroSection from './home/HeroSection';
import BlogSection from './home/BlogSection';
import ServiceSection from './home/ServiceSection';
import SubscribeSection from './home/SubscribeSection';

const NUMBER_OF_PRODUCTS = 18;

export default async function Home() {
    // Get data
    const products = await getBestSellingProducts(NUMBER_OF_PRODUCTS);

    return (
        <>
            <HeroSection />
            <CategorySection />
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <ProductsCarousel
                    products={products}
                    title='Mẫu bán chạy'
                    subtitle='Nhanh tay kẻo hết'
                    xlItemsPerSlide={6}
                    lgItemsPerSlide={4}
                    mdItemsPerSlide={2.5}
                    xsItemsPerSlide={1.5}
                />
            </div>
            <AboutSection />
            <BlogSection />
            <ServiceSection />
            <SubscribeSection />
        </>
    );
}
