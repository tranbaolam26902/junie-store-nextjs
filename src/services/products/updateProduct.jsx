import axios from '~/services/api/axios';

export default async function createProduct(product) {
    const { data } = await axios.post('/api/products/update', product);

    return data;
}
