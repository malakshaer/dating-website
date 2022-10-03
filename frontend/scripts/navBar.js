const navBar = () => {
  return `
    <div class="nav-icon">
    <h1>Dating.com</h1>
    </div>
    <div class="nav-icon" id="nav-home-btn">
      <img id='img' src="/frontend/assets/home-icon.svg" alt="" />
      <p>Home</p>
    </div>
    <div class="nav-icon" id="nav-profile-btn">
      <img src="/frontend/assets/person-icon.svg" alt="" />
      <p>Profile</p>
    </div>
    <div class="nav-icon" id="nav-favorite-btn">
      <img src="/frontend/assets/favorite-icon.svg" alt="" />
      <p>Favorites</p>
    </div>
    <div class="nav-icon" id="nav-message-btn">
      <img src="/frontend/assets/message-icon.svg" alt="" />
      <p>Messages</p>
    </div>
    <img class="profile-logo" src="/frontend/assets/profile_picture.jpg" alt="">`;
};

const navBarDom = document.getElementById("navbar");
navBarDom.innerHTML = navBar();
const navHomeBtn = document.getElementById("nav-home-btn");
const navProfileBtn = document.getElementById("nav-profile-btn");
const navFavoriteBtn = document.getElementById("nav-favorite-btn");
const navMessageBtn = document.getElementById("nav-message-btn");
const signOutBtn = document.getElementById("sign-out");

navHomeBtn.onclick = () => {
  navHomeBtn.children[0].src = "/frontend/assets/home-active-icon.svg";
  navHomeBtn.children[1].style.color = "#d5232f";
  navProfileBtn.children[0].src = "/frontend/assets/person-icon.svg";
  navProfileBtn.children[1].style.color = "#54549f";
  navFavoriteBtn.children[0].src = "/frontend/assets/favorite-icon.svg";
  navFavoriteBtn.children[1].style.color = "#54549f";
  navMessageBtn.children[0].src = "/frontend/assets/message-icon.svg";
  navMessageBtn.children[1].style.color = "#54549f";

  usersRender();
};

navProfileBtn.onclick = () => {
  navHomeBtn.children[0].src = "/frontend/assets/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navProfileBtn.children[0].src = "/frontend/assets/person-active-icon.svg";
  navProfileBtn.children[1].style.color = "#d5232f";
  navFavoriteBtn.children[0].src = "/frontend/assets/favorite-icon.svg";
  navFavoriteBtn.children[1].style.color = "#54549f";
  navMessageBtn.children[0].src = "/frontend/assets/message-icon.svg";
  navMessageBtn.children[1].style.color = "#54549f";

  profileRender();
};

navFavoriteBtn.onclick = () => {
  navHomeBtn.children[0].src = "/frontend/assets/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navProfileBtn.children[0].src = "/frontend/assets/person-icon.svg";
  navProfileBtn.children[1].style.color = "#54549f";
  navFavoriteBtn.children[0].src = "/frontend/assets/favorite-active-icon.svg";
  navFavoriteBtn.children[1].style.color = "#d5232f";
  navMessageBtn.children[0].src = "/frontend/assets/message-icon.svg";
  navMessageBtn.children[1].style.color = "#54549f";

  favoriteRender();
};

navMessageBtn.onclick = () => {
  navHomeBtn.children[0].src = "/frontend/assets/home-icon.svg";
  navHomeBtn.children[1].style.color = "#54549f";
  navProfileBtn.children[0].src = "/frontend/assets/person-icon.svg";
  navProfileBtn.children[1].style.color = "#54549f";
  navFavoriteBtn.children[0].src = "/frontend/assets/favorite-icon.svg";
  navFavoriteBtn.children[1].style.color = "#54549f";
  navMessageBtn.children[0].src = "/frontend/assets/message-active-icon.svg";
  navMessageBtn.children[1].style.color = "#d5232f";

  messageRender();
};

window.onload = (event) => {
  usersRender();
};
