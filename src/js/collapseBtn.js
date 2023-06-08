export default class CollapseBtn {
	constructor() {
		this.btn = document.createElement('button');
		this.btn.setAttribute('class', 'btn');
		this.btn.textContent = 'Collapse';
	}

	insertBtn(node) {
		node.append(this.btn);
	}
}
