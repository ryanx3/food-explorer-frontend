import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodexplorer-api2-s8mx.onrender.com"
})

