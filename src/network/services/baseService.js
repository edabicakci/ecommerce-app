import { API_URL } from "../env/config";

export const baseService = {
  get: async (url) => {
    let result = [];
    await fetch(API_URL + url)
      .then((res) => res.json())
      .then((data) => (result = data));
    return result;
  },
  post: async (url, data) => {
    let result = {};
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(API_URL + url, requestOptions)
      .then((res) => res.json())
      .then((data) => (result = data));
    return result;
  },
};
