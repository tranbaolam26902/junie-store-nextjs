// App's components
import CartSection from './components/CartSection';
import FormSection from './components/FormSection';

// Metadata
export async function generateMetadata() {
    return {
        title: 'Đặt hàng',
    };
}

export default function Checkout() {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <div className='order-2 xl:order-1 xl:pr-16 py-10 xl:py-16'>
                <FormSection />
            </div>
            <div className='order-1 xl:order-2 relative xl:pl-16 py-10 xl:py-16 xl:border-l border-gray'>
                <div className='absolute top-0 -left-6 md:-left-10 xl:left-0 bottom-0 z-0 w-screen bg-gray/30'></div>
                <CartSection />
            </div>
        </div>
    );
}
