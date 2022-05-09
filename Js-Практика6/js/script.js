let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');
let summ1 = 0;

let task2 = document.querySelector('#task2');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');


class CreateUser {
	constructor(name, email) {
		console.log(`Имя пользователя ${name}, почта ${email}`);
	}
}

class User {
	constructor(id, login) {
		this.id = id;
		this.login = login;
	}

	getId() {
		return "#" + this.id;
	}

	isAdmin() {
		if(this.login == "Admin"){
			return true;
		}else{
			return false;
		}
	}
}

class AreaOfCircle {
	set radius(r){
		this._radius = r * r * 3.14;
	}

	get radius(){
		return this._radius;
	}
}

class Course {

	constructor(mark){
		this.mark = mark;
	}

	getGrade() {
		if(this.mark == 4 || this.mark == 5) {
			this.isComp = true;
			return this;
		} else {
			this.isComp = false;
			return this;
		}
	}

	getCertificate() {
		if(this.isComp == true) {
			return "Курс пройден"
		} else {
			return "Курс не пройден"
		}
	}
}

task1.onclick = function(){
	let user = new CreateUser("Aman", "email");
}

task2.onclick = function(){
	let user = new User(12, "Admi");
	console.log(user.getId());
	console.log(user.isAdmin());
}

task3.onclick = function(){
	let s = new AreaOfCircle();
	s.radius = 2;
	console.log(s.radius);
	s.radius = 10;
	console.log(s.radius);
}

task4.onclick = function(){
	let course = new Course(5);
	console.log(course.getGrade().getCertificate());
}