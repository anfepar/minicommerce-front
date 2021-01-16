const API_URL = "http://192.168.1.116:3001/api/";

export function fetchPost(url, data) {
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json().then((jsonRes) => {
      return jsonRes.data;
    });
  });
}
