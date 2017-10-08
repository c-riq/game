
function setPosition(id, axis, pixels){

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


function moveBallX(id, x){

	/* moves DOM element with specified id (string) by x (number) pixels to the right */

}

function moveBallY(id, y){

	/* moves DOM element with specified id (string) by y (number) pixels down */

}

function didWin(id){

	/* returns true if DOM element with id (string) is inside the 'hole' element otherwise returns false */

}

function onKeyPress(e) {

	/* 
	this function will be triggered every time a player presses a key 
	it checks if either player has won and if so it alerts a winning message otherwise 
	it will call the moveBall functions according to the key which was pressed 
	*/

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
		case 99: 
			moveBallX('ball1', 10);
			break;
			...
	}
	*/
}

window.onload = function(){	

	document.body.setAttribute('onkeydown', 'onKeyPress(event)');
	setCubePositions()
}





