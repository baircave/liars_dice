const die1 = document.getElementById("d1");
const die2 = document.getElementById("d2");
const die3 = document.getElementById("d3");
const die4 = document.getElementById("d4");
const die5 = document.getElementById("d5");

const privateDiceContainer = document.getElementById("private-dice-container");
const publicDiceContainer = document.getElementById("public-dice-container");

let konami = 0;
let isHidden = false;

function rollPrivate() {
	if (privateDiceContainer.childElementCount > 0) {
		for (dice of privateDiceContainer.children) {
			const roll = Math.floor(Math.random() * 6) + 1;
			dice.children[0].src = "die_".concat(roll.toString(), ".png");
		}
	}
}

function rollPublic() {
	if (publicDiceContainer.childElementCount > 0) {
		for (dice of publicDiceContainer.children) {
			const roll = Math.floor(Math.random() * 6) + 1;
			dice.children[0].src = "die_".concat(roll.toString(), ".png");
		}
	} 
}

function revealHide() {
	isHidden = !isHidden;
	
	for (dice of privateDiceContainer.children) {
		console.log(dice.children[0].display)
		dice.children[0].style.display = dice.children[0].style.display == "none" ? "flex" : "none";
		dice.children[1].style.display = dice.children[1].style.display == "none" ? "flex" : "none";
	}

	revealHideButton.innerHTML = isHidden ? "REVEAL" : "HIDE"
}

function moveDie(event) {
	const die = event.currentTarget;
	if (die.parentElement.id === "private-dice-container") {
		die.parentElement.removeChild(die);
		publicDiceContainer.appendChild(die);
		die.children[0].style.display = "flex";
		die.children[1].style.display = "none";
	} else {
		die.parentElement.removeChild(die);
		privateDiceContainer.appendChild(die);
		if (isHidden) {
			die.children[0].style.display = "none";
			die.children[1].style.display = "flex";
		}
	}
}

function rigDice() {
	konami += 1;

	if (konami >= 4) {
		const roll = Math.floor(Math.random() * 6) + 1;

		for (dice of privateDiceContainer.children) {
			dice.children[0].src = "die_".concat(roll.toString(), ".png");
		}
	} else {
		setTimeout(() => konami = 0, 1000);
	}
}


const rollPrivateButton = document.getElementById("roll-private");
const rollPublicButton = document.getElementById("roll-public");

const revealHideButton = document.getElementById("reveal-hide");

rollPrivateButton.addEventListener("click", rollPrivate);
rollPublicButton.addEventListener("click", rollPublic);
revealHideButton.addEventListener("click", revealHide);

die1.addEventListener("click", moveDie);
die2.addEventListener("click", moveDie);
die3.addEventListener("click", moveDie);
die4.addEventListener("click", moveDie);
die5.addEventListener("click", moveDie);

const cheatButton = document.getElementById("konami");

cheatButton.addEventListener("click", rigDice);

