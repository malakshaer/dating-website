const getUsersAPI = "";

let users = [];
axios.get(getUsersAPI).then((res) => (users = res.data));
