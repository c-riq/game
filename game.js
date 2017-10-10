
function setPosition(id, axis, pixels){

document.getElementById(id).style[axis] = (pixels + 'px')

	/* sets the position of the DOM element with specified id (string) along specified axis 'top' or 'left' */

}


function setCubePositions(){

	/* sets the initial position of the elements hole, ball1, ball2 */

	let w = window.innerWidth;
	let h = window.innerHeight;
	setPosition('hole', 'top', h / 2 - 50);
	setPosition('ball1', 'top', 20);
	setPosition('ball2', 'top', h - 100);
	setPosition('hole', 'left', w / 2 - 50);
	setPosition('ball1', 'left', 20);
	setPosition('ball2', 'left', w - 100);
}


function getPosition(id, axis){

	/* returns the pixel distance (number) along the specified axis (string) 'top' or 'left' of the DOM element with specified id (string) */

	let str = document.getElementById(id).style[axis].match(/\d+/g);
	let integer = parseInt(str);
	return integer;
}


function moveBall(id, pixels, axis){

	let currentPosition = getPosition(id, axis)
	let newPosition = currentPosition + pixels;
	setPosition(id, axis, newPosition)

}

function didWin(id){
	/* returns true if DOM element with id (string) is inside the 'hole' element otherwise returns false */

	let hole = {x: getPosition('hole','left'), y: getPosition('hole', 'top')}
	let ball = {x: getPosition(id,'left'), y: getPosition(id, 'top')}

	let result = false;

	if( (ball.x > hole.x) && (ball.x < (hole.x + 20) ) ){
		if( (ball.y > hole.y) && (ball.y < (hole.y + 20) ) ){
			result = true;
		}
	}

	return  result;

}

function onKeyPress(e) {

	/*
	this function will be triggered every time a player presses a key
	it checks if either player has won and if so it alerts a winning message otherwise
	it will call the moveBall functions according to the key which was pressed
	*/
	console.log(e.keyCode)
	if( didWin('ball1') ){
		alert('player 1 won');
		return;
	}
	if( didWin('ball2') ){
		alert('player 2 won');
		return;
	}

	/* missing code!

	switch(e.keyCode){
		case 39:
			moveBall('ball1', 10, 'left');
			break;
			...
	}
	*/
}

window.onload = function(){

	document.body.setAttribute('onkeydown', 'onKeyPress(event)');
	setCubePositions()
}
