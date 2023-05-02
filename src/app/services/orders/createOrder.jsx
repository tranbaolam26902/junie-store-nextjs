import axios from 'axios';

export default async function createOrder(order) {
    const { data } = await axios.post('https://localhost:7106/api/orders', order);

    return data.isSuccess ? data : null;
}
