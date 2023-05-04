// App's components
import CreateProduct from './components/CreateProduct';

// Metadata
export async function generateMetadata() {
    return {
        title: 'Add Product',
    };
}

export default function Create() {
    return <CreateProduct />;
}
