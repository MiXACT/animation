export default class Controller {
	constructor(container, content) {
		this.container = container;
		this.dropDown = document.createElement('div');
		this.dropDown.setAttribute('class', 'dropDown');
		this.dropDown.textContent = content;
		this.container.append(this.dropDown);
	}

	mouseClick = (evt) => {
		const { target } = evt;

		if (target.classList.contains('btn')) {
			if (this.dropDown.classList.contains('rollOut')) this.dropDown.classList.remove('rollOut');
			else this.dropDown.classList.add('rollOut');
		}
	};
}
