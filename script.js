
var lose_number=0;
document.querySelector('.lose_msg').style.display='none';
document.querySelector('.lose_number').innerHTML=lose_number;

	var character = document.getElementById("character");

	
	var hurdle = document.getElementById("hurdle");

	var usermsg = document.getElementById("user_msg");

	function jump()
	{

		if(character.classList!="animate"){
		 character.classList.add("animate");

		 setTimeout(()=>
		 {

		 	character.classList.remove("animate");
		 },500);
		}
	}

	function checkgame()
	{
		var charTop=character.offsetTop;
	

		var hurdleLeft=hurdle.offsetLeft;
		

		if( hurdleLeft<115  && hurdleLeft>0 && charTop>210)
		{
		document.querySelector('.lose_msg').style.display='block';
		hurdle.style.animation="none";
		hurdle.style.left="115px";
		character.style.animation="none";
		character.style.top=charTop;
		lose_number++;
		document.querySelector('.lose_number').innerHTML=lose_number;

		usermsg.innerHTML="Click The Button To Play Again!";
		 	
	//	return false;

		} 

		
	}

	function ResetGame()
	{

		//lose_number=0;
		//document.querySelector('.lose_number').innerHTML=lose_number;
		document.querySelector('.lose_msg').style.display='none';

		 hurdle.style.animation="";
		 character.style.animation="";
		 usermsg.innerHTML="Click to Jump";


	}

	setInterval(function(){ 



		checkgame();



		 }, 10);

	document.getElementById("retry_btn").addEventListener("click", function(){
  ResetGame();
}); 
