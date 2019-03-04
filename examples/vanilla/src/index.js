const configuration = {
  client_id: "implicit",
  redirect_uri: "http://localhost:3000/authentication/callback",
  response_type: "id_token token",
  post_logout_redirect_uri: "http://localhost:3000/",
  scope: "openid profile email",
  authority: "https://demo.identityserver.io",
  silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Signin";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function() {
  window.vanillaOidc.init(configuration).then(function(status) {
    if (status.type !== "callback") {
      if (!status.user) {
        window.vanillaOidc.signinRedirect();
      } else {
        var span = document.createElement("span ");
        span.innerHTML = JSON.stringify(status.user);
        body.appendChild(span);
      }
    }
  });
});