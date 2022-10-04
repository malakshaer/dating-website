const addToFavorite = document.getElementById("fav-button");

const blockAPI = "";
const editAPI = "";
const addFavoriteURL =
  "http://localhost:8080/e-commerce-team-project/server/api/clients/all.php";

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
                <p  class="user-card-edit">${user.bio}</p>
                <button id="fav-button" class="fav-button">
                  <img class="heart-btn" src="./assets/heart-fav.png" />
                </button>
              </div>
            </div>`)
  );
  return usersList;
};

const loopingOverUserCards = () => {
  let editUser = document.querySelectorAll(".user-card-edit");

  editUser.forEach((edit) => {
    edit.onclick = () => {
      document.getElementById("app-body").innerHTML = userRender(edit.id);

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

      let editBtn = document.getElementById("edit-btn");
      editBtn.onclick = () => {
        var params = new URLSearchParams();
        params.append("id", edit.id);
        params.append("name", document.getElementById("username").value);
        params.append("email", document.getElementById("user-mail").value);
        params.append("password", document.getElementById("user-pass").value);

        axios.post(editAPI, params).then((res) => console.log(res.data));
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
