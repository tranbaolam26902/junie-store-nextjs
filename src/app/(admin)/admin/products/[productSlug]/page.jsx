import { getProduct, getProductsByQueries } from '~/services';

// App's components
import EditProduct from './components/EditProduct';

// Dynamic metadata
export async function generateMetadata({ params }) {
    const product = await getProduct(params.productSlug);

    return {
        title: product ? product.name : '404 - Không tìm thấy trang',
    };
}

export default function Update({ params }) {
    return <EditProduct params={params} />;
}

// Static params to generate static pages
export async function generateStaticParams() {
    const queries = new URLSearchParams({
        Keyword: '',
        IsDiscounted: false,
        IsOutOfStock: false,
        CollectionId: 0,
        PageSize: 10000,
        PageNumber: 1,
    });
    const response = await getProductsByQueries(queries);

    return response.items.map((product) => ({ productSlug: product.slug }));
}
