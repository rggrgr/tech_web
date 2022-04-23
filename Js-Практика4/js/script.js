
let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');
let summ1 = 0;

let task2 = document.querySelector('#task2');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');

let task5 = document.querySelector('#task5');
let result5 = document.querySelector('#result5');

let task6 = document.querySelector('#task6');
let result6 = document.querySelector('#result6');

let task7 = document.querySelector('#task7');
let result7 = document.querySelector('#result7');

let task8 = document.querySelector('#task8');
let result8 = document.querySelector('#result8');

let task9 = document.querySelector('#task9');
let result9 = document.querySelector('#result9');

function getNickName(nick) {
	if(nick.startsWith("@")){
		return nick;
	}else{
		return "@" + nick;
	}
}

function getCurrency(val) {
	if(val.includes("$")) {
		return "Доллар";
	} else if(val.includes("€")) {
		return "Евро";
	}else{
		return "Недоступно";
	}
}

function getSlug(str) {
	let count = 0;
	str = str.toLowerCase();
	let slug = "";
	for (var i = 0; i < str.length; i++) {
		if(count < 15) {
			slug = slug + str[i];
		}
		count++;
	}
	return slug.replace(" ", "-");

}

function getTodosNumber(toDo) {
	let count = 0;
	for (let i = 0; i < toDo.length; i++) {
		if(toDo[i] == ",") {
			count++;
		}
	}
	if(toDo.endsWith(",")) {
		count--;
	}
	return count > 0 ? count + 1 : 0;
}

function renderTableRows(rows) {
	let cript = "";
	for(let i = 0; i < rows.length; i++) {
		cript = cript + `<tr><td>${rows[i][0]}</td><td>${rows[i][1]}</td></tr>`;
	}
	return cript;
}

function notAnExcellent(marks) {
	return marks.some(mark => mark < 3);
}

function deleteUserRole(roles) {
	roles.splice(0, 1)
	return roles;
}

function multiply(nums) {
	return nums.reduce((acc, cur) => {
		return acc * cur;
	}, 1);

}

function getUserInfo(info) {
	let [name, year] = info;
	return `Пользователю ${name} - ${year} лет`;
}

function joinArrays(arr1, arr2) {
	return [...arr1, ...arr2];
}

task1.addEventListener("input", () => {
	result1.innerHTML = "Ваш результат: " + getNickName(task1.value);
})

task2.addEventListener("input", () => {
	result2.innerHTML = "Ваш результат: " + getCurrency(task2.value);
})

task3.addEventListener("input", () => {
	result3.innerHTML = "Ваш результат: " + getSlug(task3.value);
})

task4.addEventListener("input", () => {
	result4.innerHTML = "Ваш результат: " + getTodosNumber(task4.value);
})

task5.onclick = function(){
	console.log("Задание 5: " + renderTableRows([["Bitcoin", 40468], ["Ethereum", 3005], ["Solana", 106], ["Tether", 1]]));
}

task6.onclick = function(){
	result6.innerHTML = "Ваш результат: " + notAnExcellent([4, 2, 3, 5]);
}

task7.onclick = function(){
	result7.innerHTML = "Ваш результат: " + deleteUserRole(["Admin", "Moderator", "Editor"]);
}

task8.onclick = function(){
	result8.innerHTML = "Ваш результат: " + multiply([504, 503, 807]);
}

task9.onclick = function(){
	result9.innerHTML = "Ваш результат: " + getUserInfo(["Nina", 25]);
}

task10.onclick = function(){
	result10.innerHTML = "Ваш результат: " + joinArrays(["When", "There"], ["Is", "No", "Tomorrow"]);
}

