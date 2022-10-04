let signAPI = "";
let signupAPI = "";
let checkCode = "";

const signUp = () => {
  return `<div class="sign-container display-none"  id='sign-up-container'>
      <h1>Create new account</h1>
      <div class="inputs-container">
        <input placeholder="Full name" id='name' />
        <input placeholder="Email" id='email' />
        <input placeholder="Password" id='password'/>
        <input placeholder="Gender" id='gender'/>
        <input placeholder="Interested In" id="interested">
        <input placeholder="Location" id='location'/>
        <input placeholder="Age" id='age'/>
      </div>
      <button class="sign-btn" id='sign-up-btn'>Sign Up</button>
      <div class="have-account" id='have-account'>already have an account</div>
    </div>
  </div>`;
};

const validateCode = () => {
  return `  <div class="sign-container display-none"  id='validation-container'>
        <h1>Enter the verification code</h1>
        <div class="inputs-container">
          <input placeholder="code" id='validate' />
        </div>
        <button class="sign-btn" id="valid">Verify</button>
      </div>
    </div>`;
};

const signIn = () => {
  return `<div class="sign-container " id='sign-in-container'>
        <h1>Sign in to your account</h1>
        <div class="inputs-container">
          <input placeholder="Email" id='mail' />
          <input placeholder="Password" id='pass'/>
        </div>
        <button class="sign-btn" id='sign-in-btn'>Sign In</button>
        <div class="have-account" id='dont-have'>Don't have an account?</div>
      </div>
    </div>`;
};

if (localStorage.getItem("user")) {
  window.location.replace("../index.html");
} else {
  document.getElementById("sign-body").innerHTML =
    signUp() + signIn() + validateCode();
}

document.getElementById("have-account").onclick = () => {
  document.getElementById("sign-up-container").classList.add("display-none");
  document.getElementById("sign-in-container").classList.remove("display-none");
  document.getElementById("validation-container").classList.add("display-none");
};

document.getElementById("dont-have").onclick = () => {
  document.getElementById("sign-up-container").classList.remove("display-none");
  document.getElementById("sign-in-container").classList.add("display-none");
  document.getElementById("validation-container").classList.add("display-none");
};

document.getElementById("sign-up-btn").onclick = () => {
  document.getElementById("sign-up-container").classList.add("display-none");
  document.getElementById("sign-in-container").classList.add("display-none");
  document
    .getElementById("validation-container")
    .classList.remove("display-none");

  let param = new URLSearchParams();
  param.append("name", document.getElementById("name").value);
  param.append("email", document.getElementById("email").value);
  param.append("password", document.getElementById("password").value);
  param.append("gender", document.getElementById("gender").value);
  param.append("interested", document.getElementById("interested").value);
  param.append("location", document.getElementById("location").value);
  param.append("age", document.getElementById("age").value);

  axios.post(signupAPI, param).then((res) => {
    console.log(res);
    localStorage.setItem("user", JSON.stringify(res.data));
  });
};

document.getElementById("sign-in-btn").onclick = () => {
  let params = new URLSearchParams();
  params.append("email", document.getElementById("mail").value);
  params.append("password", document.getElementById("pass").value);

  axios.post(signAPI, params).then((res) => {
    if (res.data.id) {
      window.location.replace("../index.html");
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  });
};
document.getElementById("valid").onclick = () => {
  let params = new URLSearchParams();
  params.append("code", document.getElementById("validate").value);
  axios.post(checkCode, params).then((res) => {
    console.log(res.data);
    if (res.data) {
      window.location.replace("../index.html");
    } else {
      const err = document.createElement("h2");
      err.innerText = "Wrong Validation Code";
      err.style.color = "red";
      document
        .getElementById("validation-container")
        .insertAdjacentElement("afterbegin", err);
    }
  });
};
