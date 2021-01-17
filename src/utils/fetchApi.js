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

export function fetchGet(url) {
  return fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200) return res.statusText;
      return res.json().then((jsonRes) => {
        return jsonRes.data;
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
}
