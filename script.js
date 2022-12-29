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
const passwordCheck = document.getElementById("passwordcheck");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const submit = document.querySelector("button");

submit.addEventListener("click", () => {
	checkUsername();
	checkEmail();
});

const checkUsername = () => {
	if (username.value === "" || username.value === null) {
		usernameError.style.visibility = "visible";
		usernameError.textContent = "Username is required!";
		first.classList.add("error");
	} else if (username.value.length > 0 && username.value.length < 7) {
		usernameError.style.visibility = "visible";
		usernameError.textContent = "Username must be at least 7 characters long!";
		first.classList.add("error");
	} else {
		first.classList.add("success");
		first.classList.remove("error");
		usernameError.style.visibility = "hidden";
	}
};

const checkEmail = () => {
	const pattern = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
	if (email.value.match(pattern)) {
		second.classList.add("success");
		second.classList.remove("error");
		emailError.style.visibility = "hidden";
	} else if (email.value == "" || email.value === null) {
		emailError.style.visibility = "visible";
		emailError.textContent = "Email is required!";
		second.classList.add("error");
	} else {
		emailError.style.visibility = "visible";
		emailError.textContent = "Wrong pattern!";
		second.classList.add("error");
	}
};

// if (email.value === "") {
// 	emailError.style.visibility = "visible";
// 	emailError.textContent = "Email is required!";
// 	second.classList.add("error");
// } else if (email.match(pattern)) {
// 	second.classList.add("success");
// 	second.classList.remove("error");
// 	emailError.style.visibility = "hidden";
// } else {
// 	emailError.style.visibility = "visible";
// 	emailError.textContent = "Wrong pattern!";
// 	second.classList.add("error");
// }
// };
