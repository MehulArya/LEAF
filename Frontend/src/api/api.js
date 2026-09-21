import axios from "axios";


export const Apidata = axios.create({
  baseURL: "https://yourbackend.com", // Replace with your actual backend URL
  timeout: 10000,                        // Optional: times out after 10 seconds
  headers: { "Content-Type": "application/json" }
});
