import axios from '~/services/api/axios';

export default async function getOrdersByQueries(queries) {
    const { data } = await axios.get(`/api/orders?${queries}`);

    return data.isSuccess ? data.result : null;
}
