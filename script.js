const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const now = new Date();

// Format the time
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
timeElement.textContent = `${hours}:${minutes}`;

// Format the date
const options = { weekday: 'long', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);
dateElement.textContent = formattedDate;


var timesClicked = 0;

function turnOff() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
		document.getElementById("inner").style.cursor = "auto"; 
	}

	document.getElementById("iphone").addEventListener("click", () => {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
	});
}

function turnOffLock() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		window.location.href = "./index.html";	
	}

	document.getElementById("iphone").addEventListener("click", () => {
		window.location.href = "./index.html";			
	});
}

function changeColorTorch() {
	timesClicked++;

	if (timesClicked % 2 == 1) {
	document.getElementById("torchBtn").style.backgroundColor = "#ffffff";
	document.getElementById("torchImg").src = "Images/Icons/torchDark.png";
	} else {
		document.getElementById("torchBtn").style.backgroundColor = "#1d2145";
		document.getElementById("torchImg").src = "Images/Icons/torch.png";
	}
}

var passcodeCount = 0;

function addFilledDot() {
	passcodeCount++;

	document.getElementById("dot" + passcodeCount).style.backgroundColor = "#fff";

	if (passcodeCount == 6) {
		setTimeout(function(){
			window.location.href = "./home.html";	

			var all = document.getElementsByClassName("dot");
			for (var i = 0; i < all.length; i++) {
				all[i].style.backgroundColor = "transparent";
			}					
		}, 500);
	}
}
