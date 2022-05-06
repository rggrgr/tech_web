
let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');
let summ1 = 0;

let task2 = document.querySelector('#task2');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');


function getRate(eth) {
	return eth[task1.value] + " " + task1.value;
}

function getValues(arr) {
	let val = Object.values(arr);
	for (var i = 0; i < val.length; i++) {
		val[i] = val[i].toUpperCase();
	}
	return val;
}

let getInfo = adr => {
	Object.keys(adr).map(key => console.log({key}));
}

function joinArrays(obj1, obj2) {
	let newObj = {...obj1, ...obj2};
	return newObj;
}

task1.addEventListener("input", () => {
	result1.innerHTML = "Ваш результат: " + getRate({usd:2811, rub: 200612, eur: 2666});
})

task2.onclick = function(){
	result2.innerHTML = "Ваш результат: " + getValues({lang: "JavaScript", course: "third"});
}

task3.onclick = function(){
	getInfo({street: 'Lenina', building: 1, flat: 40});
}

task4.onclick = function(){
	console.log(joinArrays({name: "Ivan"}, {age: 16}));
}