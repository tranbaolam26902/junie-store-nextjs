// App's components
import OrderManagement from './components/OrderManagement';

// Metadata
export async function generateMetadata() {
    return {
        title: 'Orders',
    };
}

export default function Orders() {
    return <OrderManagement />;
}
