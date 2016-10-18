var key = "pen";
var value = "blue";

var key1 = "phone";
var value1 = "green";

var key2 = "cable";
var value2= 15;

//JSON Object
var chocbar = {
    "Energy": "2280",
    "Fat": "32.4",
    "Carbohydrate": "56.0",
    "Protein": "6.7",
    "Salt": "0.25"
}

var chocbarString = JSON.stringify(chocbar);
window.localStorage.setItem("chocbar", chocbarString);

window.localStorage.setItem( key, value );
window.localStorage.setItem( key1, value1 );
window.localStorage.setItem( key2, value2 );

var result = window.localStorage.getItem("cable");

    function onLoad() {
        //document.addEventListener("deviceready", onDeviceReady, false); //Event listener for device ready life cycle event and running the onDeviceReady function
		console.log("device ready");
        
        $("#item").text(result);
        $("#length").text(window.localStorage.length);
        var getChocbar = window.localStorage.getItem("chocbar");
        var chocbarJSON = JSON.parse(getChocbar);
        $("#JSON").text("Energy: " + chocbarJSON.Energy + " Fat: " + chocbarJSON.Fat + " Carbohydrate: " + chocbarJSON.Carbohydrate + " Protein: " + chocbarJSON.Protein + " Salt: " + chocbarJSON.Salt);
        
    }
	
	
    function onDeviceReady() { //This function runs when event listener for deviceready is true
		alert("device ready");
        
		document.addEventListener("resume", onResume, false); //Event listener added for when resume life cycle event is true and then runs the onResume function
		document.addEventListener("pause", onPause, false);//Event listener added for when pause life cycle event is true and then runs the onPause function
    }

