var vid = $('#v0')[0]; // jquery option
var videoStartTime = 0;
var durationTime = 0;

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function () {
    vid.pause();
    //console.log(vid.currentTime, window.pageYOffset / 400);
    $("#time").text(vid.currentTime);
    durationTime = window.pageYOffset / 400;
    $("#time1").text(durationTime);
};

    vid.addEventListener('timeupdate', function () {
        $("#time").text(vid.currentTime);
    if ((window.pageYOffset / 400) >= 6 && this.currentTime > (window.pageYOffset / 400)) {
        this.pause();


        vid.currentTime = window.pageYOffset / 400;
    }
        else if ((window.pageYOffset / 400) > 6 && this.currentTime < (window.pageYOffset / 400)){
            this.play();
        }
});



// refresh video frames on interval for smoother playback
setInterval(function () {
    if ((window.pageYOffset / 400) > 3 && (window.pageYOffset / 400) < 6) {
        vid.pause();
    } else if ((window.pageYOffset / 400) > 6 && (window.pageYOffset / 400) < 7) {
        vid.play();
    } else if ((window.pageYOffset / 400) >= 7 || (window.pageYOffset / 400) < 3) {
        vid.currentTime = window.pageYOffset / 400;
    }


}, 32);