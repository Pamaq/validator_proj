// first form
// const nameOne = document.getElementById("name");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
// 	let messages = [];
// 	if (nameOne.value === "" || nameOne.value == null) {
// 		messages.push("Name is required");
// 	}
// 	if (password.value.length <= 6) {
// 		messages.push("Password must be longer than 6 characters");
// 	}
// 	if (password.value.length >= 20) {
// 		messages.push("Password must be less than 20 characters");
// 	}
// 	if (password.value === "password") {
// 		messages.push("Password cannot be password");
// 	}
// 	if (messages.length > 0) {
// 		e.preventDefault();
// 		errorElement.innerText = messages.join(", ");
// 	}
// });

// second form
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordcheck = document.getElementById("passwordcheck");
const usernameError = document.getElementById("usernameError");
const submit = document.querySelector("button");

submit.addEventListener("click", () => {
	if (username.value === "" || username.value === null) {
		usernameError.style.visibility = "visible";
		// document.getElementsByClassName("fa-exclamation-circle").style.visibility =
		// 	"visible";
		usernameError.textContent = "Username is required!";
	}
	if (username.value.length > 0 && username.value.length < 7) {
		usernameError.style.visibility = "visible";
		usernameError.textContent = "Username must be at least 7 characters long!";
	}
});
// form.addEventListener("submit", (e) => {
// 	if (username.value === "" || username.value === null) {
// 		usernameError.value = "Name is required!";
// 	}
// });
