import { API_URL, STRAPI_API_TOKEN } from "./url";

export const fetchData = async (endpoint) => {

    var requestOptions = {
        method: 'GET',
        headers: { Authorization: Bearer + STRAPI_API_TOKEN },
        redirect: 'follow'
    };

    const response = await fetch(`${API_URL} ${endpoint}`, requestOptions);
    const data = await response.json();

    return data;
}
