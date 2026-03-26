import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const analyzeStock = async (symbol) => {
    const response = await axios.get(`${BASE_URL}/analyze?symbol=${symbol}`);
    console.log(response.data);
    console.log(symbol);
    
    
    return response.data;
};