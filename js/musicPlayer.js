//JavaScript code for managing the music
//Contributed by Hazel O'Keeffe. 
/*
References used:
Usage of the play() and pause() methods is explained here: https://www.w3schools.com/jsref/met_audio_play.asp
These were used to start and stop the music on click
The DOM image src property reference can be found here: https://www.w3schools.com/jsref/prop_img_src.asp
This was used to toggle the music button between the play and the pause state.
*/

//create variables for the player and the music control button
var bgMusic = document.getElementById("player");
var musicButton = document.getElementById("musicButton");
//set music playing to false as it shouldn't start on load
var isPlaying = false;

//This function stops the music if it's playing, or starts it if it's not
function togglePlay() {
    if (isPlaying) {
        bgMusic.pause()
    } else {
        bgMusic.play();
    }
};

//update our isPlaying boolean to be true
bgMusic.onplaying = function() {
    isPlaying = true;
    //music is playing so update button to show the pause icon
    musicButton.src = "media/pausebtn.png";
};

//update our isPlaying boolean to be true
bgMusic.onpause = function() {
    isPlaying = false;
    //music is not playing so update button to show the pause icon
    musicButton.src = "media/playbtn.png";
};

