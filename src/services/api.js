import axios from "axios"

export const api = axios.create({
    baseURL: "https://fexplorer-api.netlify.app"
})

