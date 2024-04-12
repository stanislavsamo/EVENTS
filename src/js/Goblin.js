import image from "../img/goblin.png";

export default class Goblin {
	constructor() {
		this.element = document.createElement("img");
		this.element.className = "goblin";
		this.element.src = image;
		this.currentCell = null;
		this._stepNum = 0
	}

	moveGoblin(cells) {
		if (this.currentCell !== null) {
			this.currentCell.removeChild(this.element);
		}

		let newIndex = Math.floor(Math.random() * cells.length);

		while (cells[newIndex] === this.currentCell) {
			newIndex = Math.floor(Math.random() * cells.length);
		}

		const newCell = cells[newIndex];
		newCell.appendChild(this.element);
		this.currentCell = newCell;
		this._stepNum++;
	}

	get stepNum() {
		return this._stepNum;
	}
}
