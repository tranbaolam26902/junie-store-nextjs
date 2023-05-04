import axios from '~/services/api/axios';

export default async function getProductsByQueries(queries) {
    const { data } = await axios.get(`/api/products?${queries}`);

    return data.isSuccess ? data.result : null;
}
