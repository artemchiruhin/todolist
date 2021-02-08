let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;

document.getElementById("date").textContent = `${day}.${month}.${year}`;

let weekDay = new Date().getDay();
switch(weekDay){
	case 0:
		weekDay = "Воскресенье";
		break;
	case 1:
		weekDay = "Понедельник";
		break;
	case 2:
		weekDay = "Вторник";
		break;
	case 3:
		weekDay = "Среда";
		break;
	case 4:
		weekDay = "Четверг";
		break;
	case 5:
		weekDay = "Пятница";
		break;
	case 6:
		weekDay = "Суббота";
		break;
}
document.getElementById("weekDay").textContent = weekDay;

let plus = document.querySelector(".plus");
let list = document.querySelector(".list");
let counter = document.getElementById("counter");
let task;
plus.onclick = function(){
	task = prompt("Введите задание");
	if(task != "" && task != null)
	{
		let li = document.createElement("li");
		counter.textContent++;
		li.textContent = `${counter.textContent}) ${task}`;
		list.append(li);
	}
}