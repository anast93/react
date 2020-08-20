'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'],
	nameCourse = 'Базовый React';
let command = [];

employers.forEach(elem => {
	if(elem.trim()) {
		command.push(elem);
	}
});

command = command.map(elem => {
	elem = elem.toLowerCase().trim();
	elem = elem[0].toUpperCase() + elem.slice(1);
	return elem;
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash() {
	const everyCash = [].concat(...arguments),
		total = everyCash.reduce((acc, cur) => acc + cur);
	return total;
}

const lesson = calcCash(data.cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	console.log(
`Стартуем новый курс: ${course}. Владелец: ${director}. Преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}.
Первое, что изучим, будет ${data.react[0]}. Он очень похож на HTML!
Технологии, которые мы изучим: ${data.react} и другие. `);

};

makeBusiness(...['Артем', lesson, command, nameCourse]);

