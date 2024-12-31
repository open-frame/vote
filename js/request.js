export const base_url = "http://192.168.170.4:8899";
export const APIconfig = {
  // method: 'GET',
  // mode: "no-cors", // no-cors, *cors, same-origin
};





export function request(path, data = "") {
  return fetch(base_url + path + data, APIconfig).then(async response => {
    if (!response.ok) {
      console.error(response.statusText);
    }
    const data = await response.json();
    if (data.code !== 0) { alert(data.msg); }
    return data
  });
}

