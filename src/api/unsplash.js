import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID kOG2aCF2S6WBFW1LzKqCgU9UkUfkM2QU1HjIadK5U9Q"
  }
});
