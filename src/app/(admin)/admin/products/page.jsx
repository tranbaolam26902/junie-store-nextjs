// App's components
import ProductManagement from './components/ProductManagement';

// Metadata
export async function generateMetadata() {
    return {
        title: 'Products',
    };
}

export default function Products() {
    return <ProductManagement />;
}
