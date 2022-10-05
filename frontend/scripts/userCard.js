const addToFavorite = document.getElementById("fav-button");
const searchBar = document.getElementById("search-users");

const blockAPI = "";

const userCard = (users, option = "Bio") => {
  var usersList = "";
  users.map(
    (user, i) =>
      (usersList += `
            <div class="all-cards-container">      
              <div class="user-card">
                <div class="user-card-img-name">
                  <div class="user-card-img-container">
                    <img width="100%" src="${user.profile_img}" alt="" />
                  </div>
                  <p class="user-card-name">${user.name},${user.age}</p>
                </div>
                <p>${user.bio}</p>            
                <button id="fav-button" class="fav-button">
                  <img class="heart-btn" src="./assets/heart-fav.png" />
                </button>
              </div>
            </div>`)
  );
  return usersList;
};

const loopingOverUserCards = () => {
  let showUser = document.querySelectorAll(".all-cards-container");

  showUser.forEach((show) => {
    show.onclick = () => {
      document.getElementById("app-body").innerHTML = userRender(show.id);

      document.getElementById("img-input").onchange = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            document.getElementById("label-img").src = event.target.result;
            basedImg = btoa(event.target.result);
          };
        }
      };

      let blockBtn = document.getElementById("block-btn");
      blockBtn.onclick = () => {
        blockBtn.classList.toggle("unblock");
        if (blockBtn.innerText == "block") blockBtn.innerText = "Unblock";
        else blockBtn.innerText = "block";
        var params = new URLSearchParams();
        params.append("user_id", edit.id);
        axios.post(blockAPI, params).then((res) => console.log(res.data));
      };
    };
  });
};

addToFavorite.onclick = () => {
  addToFavorite.style.color = "red";
  const user = JSON.parse(localStorage.getItem("user"));
  const users_id = user.id;
  const users_genders_id = JSON.parse(localStorage.getItem("users_genders_id"));

  const update_favorites = async () => {
    let params = new URLSearchParams();
    params.append("users_id", users_id);
    params.append("users_genders_id", users_genders_id);

    await axios
      .post(addFavoriteURL, params)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  update_favorites();
};

searchBar.addEventListener("change", () => {
  get_search_result(searchBar.value);
});
