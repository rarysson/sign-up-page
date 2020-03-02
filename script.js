const inputs = document.querySelectorAll("input");
const buttonForm = document.querySelector("button");



function toggleErrorIcon(element) {
	if (element.checkValidity()) {
		element.classList.remove("error-icon");
	} else {
		element.classList.add("error-icon");
	}
}

buttonForm.addEventListener("click", () => {
	inputs.forEach(input => {
		toggleErrorIcon(input);
	});
});

inputs.forEach(input => {
	input.addEventListener("change", function() {
		toggleErrorIcon(this);
	});
});