const API_URL = "http://localhost:3000/api/";

export function fetchGet(url) {
  return fetch(`${API_URL}${url}`).then((res) => {
    return res.json().then((jsonRes) => {
      return jsonRes.data;
    });
  });
}
