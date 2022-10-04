const favoriteRender = () => {
  document.getElementById("app-body").innerHTML = fList("", "");
  `
      <div class="more-lists" id="favorite-products-list"><div>
      `;

  axios.get(getFavoriteAPI).then((res) => {
    document.getElementById("users-list").innerHTML = userCard(res.data);
    loopingOverUserCards();
  });
};
