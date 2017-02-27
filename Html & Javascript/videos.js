window.onload = init;

function init() {
    myVideo = document.getElementById("video");
    video.setAttribute("src", "http://www.w3schools.com/html/mov_bbb.mp4");
    document.getElementById("playButton").onclick = playVideo;
    document.getElementById("pauseButton").onclick = pauseVideo;
    document.getElementById("restartButton").onclick = restartVideo;
    document.getElementById("choose").onchange = changeVideo;
    document.getElementById("addComment").onclick = videoComment;
    document.getElementById("fwd").onclick = skip;
    document.getElementById("rew").onclick = skip;
}

function myFunction(event) {
    // The currentTime property returns the current position of the audio/video playback
    document.getElementById("demo").innerHTML = event.currentTime;
}

function AnnotatedVideo(caption) {
    this.caption = caption;
}

var myVideo;
var AnnotatedVideoArray = new Array();

function playVideo() {
    myVideo = document.getElementById("video");
    /*if(myVideo.options.item(0)) {
    	src="http://techslides.com/demos/sample-videos/small.mp4";
    }
    else if(myVideo.options.item(1)) {
    	src="http://www.w3schools.com/html/mov_bbb.mp4";
    }*/
    myVideo.play();
}

function pauseVideo() {
    myVideo.pause();
}

function restartVideo() {
    myVideo.currentTime = 0;
}

function skip(value) {
    video.currentTime += value;
}

function changeVideo() {
    var annotatedVideo = new Array("http://www.w3schools.com/html/mov_bbb.mp4", "http://techslides.com/demos/sample-videos/small.mp4");
    //videoClips.push(new AnnotatedImage(inputurl,inputcaption));
    var val = document.getElementById("choose").value;
    var index = parseInt(val);
    video.setAttribute("src", annotatedVideo[index]);
}

//array with video objects with descriptions and url then push it.