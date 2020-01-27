var target_color = document.getElementById("rgb"); //THE GREAT RGB GAME TEXT
var box_list = document.getElementsByClassName("box"); //List of all the Boxes
var msgdisplay = document.getElementById("message"); //Display Wrong or Right answer
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var newColors = document.getElementById("newcolors");
var h1 = document.querySelector("h1");
var game_finished = false;
var game_started = true;



var color_list = randomColors(6);


picked_color = color_list[4];

color_game(color_list);

var randomTarget = Math.floor(Math.random()*6);
var str = color_list[randomTarget];
target_color.textContent = str;

function color_game(color_list){
	for(var i=0;i<color_list.length;i++){
		if(box_list[i].style.visibility="visible"){
			box_list[i].style.backgroundColor = color_list[i]; //Apply colors to the list of boxes one at a time
			box_list[i].addEventListener("click",function(){
			if(this.style.backgroundColor === str){
				game_finished = true;
				h1.style.backgroundColor=this.style.backgroundColor;
				msgdisplay.innerHTML="Correct!!";
				for(var i=0;i<color_list.length;i++){
					box_list[i].style.backgroundColor = str;
				}
			}
			else{
				this.style.visibility="hidden";
				console.log(this.style.backgroundColor + str);

				msgdisplay.innerHTML=" Wow so noob. Try again";
			}

			})
		}
	}
}


easyBtn.addEventListener("click", function(){
	if(game_started && !game_finished){
		for(var i=3;i<6;i++){
			box_list[i].style.visibility="hidden";
		}
		game_restart(3);
	}
});
hardBtn.addEventListener("click", function(){
	if(game_started && !game_finished){
			// for(var i=3;i<6;i++){
			// box_list[i].style.visibility="visible";
		// }
		game_restart(6);

	}
});


newColors.addEventListener("click",function(){
	game_restart(6);
})


function game_restart(num){
	
	//change the background color back to:
	h1.style.backgroundColor = "#232323";
	//assign new random colors
	color_list = randomColors(num);

	for(var i=0;i<num;i++){
		box_list[i].style.visibility="visible";
	}
	//assign one of the newly generated random values to the target h1
	randomTarget = Math.floor(Math.random()*num);
	str = color_list[randomTarget];
	target_color.textContent = str;
	msgdisplay.innerHTML="";
	game_finished = false;
	color_game(color_list);


}



function randomColors(number){
	var array=[];
	for(var i=0;i<number;i++){
		array.push(generateRandomColor())
	}
	return array;
}

function generateRandomColor(){

	var R = Math.floor(Math.random()*256);
	var G = Math.floor(Math.random()*256);
	var B = Math.floor(Math.random()*256);

		 return "rgb("+R+", "+G+", "+B+ ")";

}
