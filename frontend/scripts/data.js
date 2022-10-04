const getUsersAPI = "http://127.0.0.1:8000/api/auth/getUsers";

const getFavoriteAPI = "http://127.0.0.1:8000/api/auth/getFavorite";

let users = [];
axios.get(getUsersAPI).then((res) => (users = res.data));

axios.get(getFavoriteAPI).then((res) => (users = res.data));
