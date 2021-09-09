const die1 = document.getElementById("d1");
const die2 = document.getElementById("d2");
const die3 = document.getElementById("d3");
const die4 = document.getElementById("d4");
const die5 = document.getElementById("d5");

const privateDiceContainer = document.getElementById("private-dice-container");
const publicDiceContainer = document.getElementById("public-dice-container");

function rollPrivate() {
	if (privateDiceContainer.childElementCount > 0) {
		for (dice of privateDiceContainer.children) {
			dice.innerHTML = Math.floor(Math.random() * 6) + 1;
		}
	}
}

function rollPublic() {
	if (publicDiceContainer.childElementCount > 0) {
		for (dice of publicDiceContainer.children) {
			dice.innerHTML = Math.floor(Math.random() * 6) + 1;
		}
	} 
}

function reveal() {
	for (dice of privateDiceContainer.children) {
		dice.style.color = "black";
	}
}

function hide() {
	for (dice of privateDiceContainer.children) {
		dice.style.color = "white";
	}
}

function moveDie(event) {
	const die = event.currentTarget;
	if (die.parentElement.id === "private-dice-container") {
		die.parentElement.removeChild(die);
		die.style.color = "black";
		publicDiceContainer.appendChild(die);
	} else {
		die.parentElement.removeChild(die);
		die.style.color = "white";
		privateDiceContainer.appendChild(die);
	}
}


const rollPrivateButton = document.getElementById("roll-private");
const rollPublicButton = document.getElementById("roll-public");

const revealButton = document.getElementById("reveal");
const hideButton = document.getElementById("hide");

rollPrivateButton.addEventListener("click", rollPrivate);
rollPublicButton.addEventListener("click", rollPublic);
revealButton.addEventListener("click", reveal);
hideButton.addEventListener("click", hide);

die1.addEventListener("click", moveDie);
die2.addEventListener("click", moveDie);
die3.addEventListener("click", moveDie);
die4.addEventListener("click", moveDie);
die5.addEventListener("click", moveDie);