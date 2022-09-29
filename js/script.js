// const hamburger = document.querySelector('.hamburger'),
// 		menu = document.querySelector('.menu'),
// 		close = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
// 	menu.classList.add('active');
// });

// close.addEventListener('click', () => {
// 	menu.classList.remove('active');
// });

// $().ready(function() {
// 	$('#form').validate({
// 		rules: {
// 			name: "required",
// 			email: {
// 				required: true,
// 				email: true
// 			},
// 			text: "required"
// 		}
// 	});
// })

let form = document.querySelector('.contacts__form'),
	 formInputs = document.querySelectorAll('.form-input'),
	 inputEmail = document.querySelector('.form-input-email'),
	 inputName = document.querySelector('.form-input-name'),
	 inputText  =document.querySelector('.form-input-text'),
	 inputCheckbox = document.querySelector('.input-checkbox');

function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}


form.onsubmit = function () {
	let emailVal = inputEmail.value,
		 phoneVal = inputName.value;
		 emptyInputs = Array.from(formInputs).filter(input => input.value === '');

	formInputs.forEach(function (input){
		if (input.value === '') {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	})

	if (emptyInputs.length !== 0) {
		console.log('inputs not filled');
		return false;
	}

	if(!validateEmail(emailVal)){
		console.log('email not valid');
		inputEmail.classList.add('error');
		return false;
	} else {
		inputEmail.classList.remove('error');
	}

	if(!inputCheckbox.checked) {
		console.log('checkbox not checked');
		inputCheckbox.classList.add('error');
		return false;
	} else {
		inputCheckbox.classList.remove('error');
	}

}
