var gpio = require('rpi-gpio');

let pin = 40;
let delay = 2000;
let count = 0;
let max = 3;

gpio.setup(pin, gpio.DIR_OUT, on)

function on(){
	if(count >= max){
		gpio.destroy(function(){
			console.log("Closed Pins");
		});
		return;
	}

	setTimeout(function(){
		gpio.write(pin, 1, off);
		count+=1;
	}, delay);
}

function off(){
	setTimeout(function(){
		gpio.write(pin, 0, on);
	}, delay);
}


