import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    "Client-Id": process.env.CLIENT_ID,
  },
});
