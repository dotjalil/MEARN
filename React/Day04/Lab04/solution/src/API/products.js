import axios from "axios";

const baseUrl = "http://localhost:3000/products/";

const getAllProducts = () => axios.get(baseUrl);
const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`);

export { getAllProducts, getProductById };
