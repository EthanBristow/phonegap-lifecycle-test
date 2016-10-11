var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false); //Event listener for device ready life cycle event and running the onDeviceReady function
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}
    //This function above is where jQueryMobile is used. Used to increment  the life cycle counts.


    // device APIs are available
    //
    function onDeviceReady() { //This function runs when event listener for deviceready is true
		alert("device ready");
        
		document.addEventListener("resume", onResume, false); //Event listener added for when resume life cycle event is true and then runs the onResume function
		document.addEventListener("pause", onPause, false);//Event listener added for when pause life cycle event is true and then runs the onPause function
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() { //This function runs when event listener for onPause is true
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() { //This function runs when event listener for onResume is true
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
