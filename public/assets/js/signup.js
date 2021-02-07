console.log("hi");

$(document).ready(function () {
  const signUpBtn = $("form.signup");
  const userEmail = $("input#email-input");
  const userPassword = $("input#password-input");
  // let isTrainer = $("input#checkbox-input")[0].checked;

  signUpBtn.on("submit", function (event) {
    event.preventDefault();
    let newUser = {
      email: userEmail.val().trim(),
      password: userPassword.val().trim(),
      // trainer: isTrainer
    };

    if (!newUser.email || !newUser.password) {
      return alert("email and password fields are both required");
    }

    console.log(newUser);

    newUserSignUp(newUser.email, newUser.password);
    userEmail.val("");
    userPassword.val("");
  });

  // code to reset checkbox TBD
  function newUserSignUp(email, password) {
    $.post("/signup", {
      email: email,
      password: password,
      //   is_Trainer: trainerBoo,
    })
      .then(function (data) {
        // console.log("redirect to trainer or client page now");
        window.location.replace("/");
      })
      .catch(handleErr);
  }

  function handleErr(err) {
    console.log(err);
  }
});
