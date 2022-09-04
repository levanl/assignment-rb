
// const fillFromStorage = () => {
//     const obj = JSON.parse(localStorage.getItem('formObj'));
//     if (obj) {
//         for (let key of Object.keys(obj)) {
//             let input = document.getElementById(key);
//             input.value = obj[key];
//         }
//     }
// }
// fillFromStorage();

// let form = document.getElementById('form');
// let inputArr = document.getElementsByTagName('input');
// let selectArr = document.getElementsByTagName('select');

// for (let input of [...inputArr, ...selectArr]) {
//     input.addEventListener('input', (e) => {
//         const value = input.value;
//         const obj = JSON.parse(localStorage.getItem('formObj'));
//         const objToSet = { ...obj };
//         objToSet[input.id] = value;
//         localStorage.setItem('formObj', JSON.stringify(objToSet));
//         const obj1 = localStorage.getItem('formObj');
//         console.log(obj1)
//     })
// }

// const name = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const team = document.getElementById('team')
// const position = document.getElementById('position')
// const email = document.getElementById('email')
// const phoneNumber = document.getElementById('phoneNumber')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// })

// function checkInputs() {
//     // get the values from the inputs
//     const nameValue = name.value.trim();
//     const lastNameValue =lastName.value.trim();
//     const teamValue = team.value.trim();
//     const positionValue = position.value.trim();
//     const emailValue = email.value.trim();
//     const phoneNumberValue = phoneNumber.value.trim();
//     const geoAlphabet = ["აბგდევზთიკლმნოპჟრსტუფქღყშჩძხჰ"]


// if() {
//     // add error class
//     const hintOne = document.getElementById('firstNameHint');
//     hintOne.classList.add('input-error')
//     console.log('error')
// }else {
//     // add success class
// }
// }

// fetch('https://pcfy.redberryinternship.ge/api/teams')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         const selectTeams = document.getElementById('team');
//         selectTeams.innerHTML = '';
//         for(let item of data.data) {
//             selectTeams.innerHTML += `<option value="${item.id}">${item.name}</option>`
//         }
//     });
let imageBlob;
const nextBtn = document.getElementById('nextForm');
const laptopForm = document.getElementById('laptopForm');
const firstForm = document.getElementById('firstForm');
const backBtn = document.getElementById('lastForm');
const submitBtn = document.getElementById('submitForm')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const formData = new FormData(form);
    // formData.append('laptop_image', imageBlob);
    fetch('https://pcfy.redberryinternship.ge/api/laptop/create?token=0a27eede2714b9c80c604a4f1ad0c88a', {
		method: 'POST',
		body: formData,
	}).then(function (response) {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(response);
	}).then(function (data) {
		console.log(data);
	}).catch(function (error) {
		console.warn(error);
	});


})

nextBtn.addEventListener('click', () => {
    laptopForm.style.display = "flex"
    firstForm.style.display = "none"
    nextBtn.style.display = "none"
    backBtn.style.display = "block"
    submitBtn.style.display = "block"
})

backBtn.addEventListener('click', () => {
    laptopForm.style.display = "none"
    firstForm.style.display = "block"
    nextBtn.style.display = "block"
    backBtn.style.display = "none"
})

function getSelectOptions(selectName, subUrl, valueProperty = 'id') {
    if(!selectName) {
        console.error('No selectName provided!');
        return;
    }
    const select = document.getElementById(selectName);
    if(!select) {
        console.error(`select with name (${selectName}) not found`)
        return;
    }       


    fetch(`https://pcfy.redberryinternship.ge/api/${subUrl}`)
    .then((response) => response.json())
    .then((data) => {
        const options = data.data;
        options.forEach(element => {
            const optionElement = document.createElement('option');
            optionElement.text = element.name;
            optionElement.value = element[valueProperty];
            select.add(optionElement)
        });
    })
}

getSelectOptions('team_id', 'teams');
getSelectOptions('position_id', 'positions');
getSelectOptions('laptop_brand_id', 'brands');
getSelectOptions('laptop_cpu', 'cpus', 'name')

const imgInput = document.getElementById('imgInput');
const preview = document.getElementById('img-preview');

imgInput.addEventListener('change', () => {
    const imageEl = document.createElement('img');
    const img = imgInput.files[0];
    imageEl.src = URL.createObjectURL(img);
    preview.appendChild(imageEl);

    const reader = new FileReader();

    reader.onload = (e) => {
        imageBlob = e.target.result;
        console.log(imageBlob);
    }

    reader.readAsBinaryString(img);
})
