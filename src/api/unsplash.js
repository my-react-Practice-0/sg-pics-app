import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Vby8kFEhez6SvyI-kSYZRd3k3qb0pkOeEvngDsCsOjA",
  },
});
