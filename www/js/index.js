var key = "pen";
var value = "blue";

var key1 = "phone";
var value1 = "green";

var key2= "cable";
var value2= 15;

window.localStorage.setItem( key, value );
window.localStorage.setItem( key1, value1 );
window.localStorage.setItem( key2, value2 );

var value2 = window.localStorage.getItem(key2);

    function onLoad() {
        //document.addEventListener("deviceready", onDeviceReady, false); //Event listener for device ready life cycle event and running the onDeviceReady function
		console.log("device ready");
        
        $("#item").text(value2);
        $("#length").text(window.localStorage.length);
    }
	
	
    function onDeviceReady() { //This function runs when event listener for deviceready is true
		alert("device ready");
        
		document.addEventListener("resume", onResume, false); //Event listener added for when resume life cycle event is true and then runs the onResume function
		document.addEventListener("pause", onPause, false);//Event listener added for when pause life cycle event is true and then runs the onPause function
    }

