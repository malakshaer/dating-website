const usersRender = () => {
  document.getElementById("app-body").innerHTML = uList("", "");

  axios.get(getUsersAPI).then((res) => {
    document.getElementById("users-list").innerHTML = userCard(res.data);
    loopingOverUserCards();
  });
};
