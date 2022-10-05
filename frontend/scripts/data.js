const getUsersAPI = "http://127.0.0.1:8000/api/auth/getUsers";
const getFavoriteAPI = "http://127.0.0.1:8000/api/auth/getFavorite";
const searchAPI = "http://127.0.0.1:8000/api/auth/search";
const getSingleUserAPI = "http://127.0.0.1:8000/api/auth/getUser";
const viewProfileAPI = "http://127.0.0.1:8000/api/auth/viewProfile";
const repliesAPI = "http://127.0.0.1:8000/api/auth/replies/18";
const updateReplyAPI = "http://127.0.0.1:8000/api/auth/updateReply";
const deleteReplyAPI = "http://127.0.0.1:8000/api/auth/deleteReply/";
const addFavoriteAPI = "http://127.0.0.1:8000/api/auth/addFavorite";
const updateUserProfileAPI =
  "http://127.0.0.1:8000/api/auth/updateUserProfile/";
const sendMessageAPI = "http://127.0.0.1:8000/api/auth/sendMessage";

let users = [];
axios.get(getUsersAPI).then((res) => (users = res.data));
axios.get(getFavoriteAPI).then((res) => (users = res.data));
axios.get(searchAPI).then((res) => (users = res.data));
axios.get(getSingleUserAPI).then((res) => (users = res.data));
axios.get(viewProfileAPI).then((res) => (users = res.data));
axios.get(repliesAPI).then((res) => (users = res.data));
axios.get(updateReplyAPI).then((res) => (users = res.data));
axios.get(deleteReplyAPI).then((res) => (users = res.data));
axios.get(addFavoriteAPI).then((res) => (users = res.data));
axios.get(updateUserProfileAPI).then((res) => (users = res.data));
axios.get(sendMessageAPI).then((res) => (users = res.data));
