const profileRender = () => {
  document.getElementById("app-body").innerHTML = `
        <div class="edit-profile-page">
          <h2>Edit Your Profile<h2>
          <img src="/frontend/assets/profile_picture.jpg" alt="">
          <div class="inputs-container">
              <input placeholder="Full name" id='name' />
              <input placeholder="Email" id='email' />
              <input placeholder="Password" id='password'/>
              <input placeholder="Gender" id='gender'/>
              <input placeholder="Interested In" id="interested">
              <input placeholder="Location" id='location'/>              
              <input placeholder="Age" id='age'/>
              <input placeholder="Bio" id='bio'/>
              <button class="update-profile-btn" id='update-profile-btn'>Update Profile</button>
              <div>
                <button onclick="location.href = '/frontend/sign.html';" class="sign-out-btn" id='sign-out'>Sign Out</button>
              </div>
          </div>
        </div>  
          `;
  const updateProfile = document.getElementById("update-profile-btn");

  updateProfile.onclick = () => {
    axios.get(editProfileAPI).then((res) => {
      document.getElementById("users-list").innerHTML = userCard(res.data);
      loopingOverUserCards();
    });
  };
};
