// =========================
// 1 level - kind of players
// =========================

/* vv CANVAS CONFIG vv */

const canvas = document.getElementById("canvas0");

canvas.width = 1024;
canvas.height = 576;

const context = canvas.getContext("2d");

/* ^^ CANVAS CONFIG ^^ */

const DrawBackground = () => {
	context.fillStyle = "gray";
	context.fillRect(0, 0, canvas.width, canvas.height); // temp background
}

// Player

class Player {
	constructor(initpointX, initpointY, sizex, sizey, Physics) {
		this.position = {
			x: initpointX,
			y: initpointY
		},
		this.size = {
			x: sizex,
			y: sizey
		},
		this.physics = Physics;
	}
	Update() {
		// Draw
		context.fillStyle = "green";
		context.fillRect(
			this.position.x,
			this.position.y - this.size.y,
			this.size.x,
			this.size.y
		);
		// Move circunstances
		if (this.position.y < canvas.height) {
			if (this.position.y + this.physics.gravity < canvas.height)
				this.position.y += this.physics.gravity;
			else
				this.position.y = canvas.height;
		}
		
	}
}

class Physics {
	constructor(gravity, objectForce) {
		this.gravity = gravity;
		this.objectForce = objectForce;
	}
}

// GameRotine

const player1Physics = new Physics(20, 10);
const player1 = new Player(0, 100, 100, 100, player1Physics);

(GameLoop = () => {
	context.clearRect(0, 0, canvas.width, canvas.height)

	DrawBackground()

	player1.Update();

	console.log(true);
	window.requestAnimationFrame(GameLoop);
})()

window.addEventListener("keydown", (e) => {
	console.log(e.key);
})



